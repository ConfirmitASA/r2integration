function locationDeserialize(location = window.location) {
  let o = {
    path: location.origin + location.pathname,
    query: {},
  };
  location.search.substring(1).split(/&/).forEach(pair => {
    let aPair = pair.split(/=/);
    o.query[aPair[0].toLowerCase()] = aPair[1]
  });
  return o
}

function promiseRequest(URL) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true);
    xhr.onload = () => {
      xhr.status == 200 ? resolve(xhr.responseText) : reject(Error(`${xhr.status}: ${xhr.statusText}`));
    }
    xhr.onerror = () => {
      reject(Error('Network Error'));
    }
    xhr.send();
  });
};

/**
 * Turns a `location` object (result of `locationDeserialize`) into a URL
 * @param {{path:String, query:Object}} location - an object with params and a url
 * @returns {String} - a URL string
 * */
function locationSerialize(location) {
  let query = [];
  for (let key in location.query) {
    query.push([key, location.query[key]].join('='));
  }
  return location.path + '?' + query.join('&');
}

function getOriginalConfig() {
  try {
    const scripts = document.querySelectorAll('script');
    if (scripts) {
      let i = scripts.length;
      const cfg = /(Y\.FilterContainer,)\s(.*?)\)/gi;
      while (i--) {
        const script = scripts[i].text;
        if (script.indexOf('Y.FilterContainer,') > -1) {
          const exec = cfg.exec(script);
          return (exec != null && exec[2]) ? JSON.parse(exec[2]) : {}; // eslint-disable-line
        }
      }
    } else {
      return undefined;
    }
  } catch (err) {
    console.error(err);
  }
}

function getInternalValue(nodeId) {
  const node = document.querySelector(nodeId);
  return node ? node.value : undefined;
}

function getProperURL(url) {
  const [pathname, search] = url.split('?');
  const location = locationDeserialize({
    pathname,
    search,
    origin: window.location.origin,
  });
  location.query.pagestateid = getInternalValue('#PageStateId');
  location.query.pageid = getInternalValue('#CurrentPageId');
  return locationSerialize(location);
}

function getFilterConfiguration() {
  const config = getOriginalConfig();
  if (config && config.ServiceUrl) {
    return promiseRequest(getProperURL(config.ServiceUrl));
  }
  return Promise.resolve();
}

/*
const payload = {
  externalFilters: [{
    function: 'InHierarchy', //optional
    variable: 'crmdata.accounts:Region',
    value: ['Top'],
  }],
};
*/

function createFilterPayload({Type, Id, Value1}, pNumber) {
  return Type === 'hierarchy' ? {
    variable: Id,
    value: Value1,
    function: 'InHierarchy',
  } : {
    variable: `${pNumber}.responseId:${Id}`,
    value: Value1,
  };
}

function createStudioFilterPayload({Id, Value1}) {
  return {[Id]: Value1}
}

function updateConfigWithValues({configuration = {}, hierarchyConfig = {}, values: {filterPanel, hierarchy} = {}}) {
  const configWithModifiedValues = {
    ...configuration,
    Items: [
      ...(configuration.Items || []).map(item => ({
        ...item,
        Value1: (filterPanel ? filterPanel[item.Id] || {} : {}).Precodes || null,
      })),
    ],
  };

  if (hierarchyConfig.values && hierarchyConfig.values.length > 0) {
    configWithModifiedValues.Items.push({
      Id: hierarchyConfig.question,
      Type: 'hierarchy',
      Value1: (
        hierarchy
          ? hierarchy.map(selected => selected.NodeId)
          : hierarchyConfig.values.map(selected => selected.level)
      ) || null,
    })
  }

  return configWithModifiedValues
}

function eventPromise(element, eventName, callback) {
  return new Promise(resolve => {
    element.addEventListener(eventName, wrappedCallback, false);

    function wrappedCallback(e) {
      element.removeEventListener(eventName, wrappedCallback);
      resolve(callback(e));
    }
  })
}

function getUpdateQuery(filterInfo) {
  const search = decodeURIComponent(filterInfo);
  const {query} = JSON.parse(JSON.stringify(locationDeserialize({search})));
  return query
}

export default function sendFilters(targetOrigin = 'http://r2.firmglobal.com', timeout) {
  let externalConfig = window.studioIntegrationConfig;
  if (!externalConfig) {
    //eventPromise(document,'textNodeLoaded', ()=>{externalConfig=window.studioIntegrationConfig})
  }

  const {pNumber, hierarchyConfig} = externalConfig;

  function parseConfig({Items = []}) {
    /*    const externalFilters = Items.reduce((result, filterItem) => {
          if (filterItem.Value1) {
            result.push(createFilterPayload(filterItem, pNumber))
          }
          return result
        }, []);
        return {externalFilters}*/
    const studioFilters = Items.reduce((result, filterItem) => {
      if (filterItem.Value1) {
        return Object.assign({}, result, createStudioFilterPayload(filterItem))
      }
      return result
    }, {});
    return {studioFilters}
  }

  function postMessage(payload) {
    const r2 = document.querySelector('.r2dashboard');
    console.debug('will send filters to appstudio', payload);
    if (r2 == null) {
      console.warn('appStudio is not found on this page, please check if you\'ve loaded it correctly or it exists');
      return
    }
    return !r2.contentWindow
      ? eventPromise(r2, 'load', e => sendPayload(e.target.contentWindow, payload))
      : sendPayload(r2.contentWindow, payload);

  }

  function sendPayload(target, payload) {
    target.postMessage(payload, targetOrigin)
  }

  function setupDataListener(configuration) {
    if (Y && Y.Global) {
      Y.Global.on('reportcontroller:viewModeDataUpdate', filterInfo => {
        const {customfilters, persnodes} = getUpdateQuery(filterInfo);
        const filterPanel = customfilters ? JSON.parse(customfilters) : undefined;
        const hierarchy = persnodes ? JSON.parse(persnodes) : undefined;
        const config = updateConfigWithValues({
          configuration,
          hierarchyConfig,
          values: {filterPanel, hierarchy},
        });
        const payload = parseConfig(config);
        setTimeout(function () {
          console.log('sendFilters: sending filters after timeout');
          postMessage(payload)
        }, timeout);
      })
    } else {
      console.error('YUI is not defined or accessible, cannot set up a "reportcontroller:viewModeDataUpdate" listener');
    }
    return configuration;
  }

  // execute function
  getFilterConfiguration()
    .then(configuration => {
      if (configuration) {
        return JSON.parse(configuration)
      }
      console.warn('filter panel doesn\'t exist on page, skip it from sending filters to appStudio');
      return;
    })
    .then(setupDataListener)
    .then(configuration => updateConfigWithValues({configuration, hierarchyConfig}))
    .then(parseConfig)
    .then(config => new Promise(resolve => {
        console.log('sendFilters: setting timeout', timeout);
        setTimeout(function () {
          console.log('sendFilters: sending filters after timeout');
          resolve(config)
        }, timeout)
      }),
    )
    .then(postMessage)
    .catch(e => console.error(e));
}

