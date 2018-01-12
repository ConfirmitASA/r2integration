import ReportalBase from 'r-reportal-base';
import get from 'lodash/get';

export function getOriginalConfig() {
  try {
    const scripts = document.querySelectorAll('script');
    if (scripts) {
      let i = scripts.length;
      const cfg = /(Y\.FilterContainer,)\s(.*?)\);/gi;
      while (i--) {
        const script = scripts[i].text;
        if (script.indexOf('Y.FilterContainer,') > -1) {
          const exec = cfg.exec(script);
          return (exec != null && exec[2]) ? JSON.parse(exec[2]) : {}; // eslint-disable-line
        }
      }
    } else {
      return {};
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
  const location = ReportalBase.locationDeserialize({
    pathname,
    search,
    origin: window.location.origin,
  });
  location.query.PageStateId = getInternalValue('#PageStateId');
  location.query.PageId = getInternalValue('#CurrentPageId');
  return ReportalBase.locationSerialize(location);
}

function getFilterConfiguration() {
  const {ServiceUrl} = getOriginalConfig();
  if (ServiceUrl) {
    return ReportalBase.promiseRequest(getProperURL(ServiceUrl));
  }
  return Promise.resolve();
}

function getFilterType(type) {
  switch (type) {
    case 0:
      return 'singleSelect';
    case 1:
      return 'multiSelect';
    case -1:
      return 'hierarchy';
    default:
      return null; // do not process unsupported types of filters
  }
}
const payload = [{
  //function: 'InHierarchy', //optional
  variable: p123.responseId:q1,
  value: [1],
}]
function createFilterCML({Type, Id, Value1}, pNumber) {
  const type = getFilterType(Type);
  if (type) {
    const identifier = `ReportalFilter_${Id}`;

    const definition = `
    filter ${type} ${identifier} {
      ${type === 'hierarchy' ? 'variable' : 'optionsFrom'}: ${pNumber}.responseId:${Id}
    }
    `;
    const value = Value1 ? `
    filter ${identifier} {
      selectedOptions: "${Value1}"
    }
    ` : null;
    return {
      [Id]: {
        definition,
        value,
      },
    };
  }
  return null;
}

function updateConfigWithValues({configuration, hierarchyValue: hierarchyConfig = {}, values: {filterPanel, hierarchy} = {}}) {
  return {
    ...configuration,
    Items: [
      ...configuration.Items.map(item => ({
        ...item,
        Value1: get(filterPanel, `.${item.Id}.Precodes.join()`, null),
      })),
      ...Object.keys.hierarchyValue.map(hierarchyQuestion => ({
        Id: hierarchyQuestion,
        Type: -1, // not to list as plain filters
        Value1: (
          hierarchy
            ? hierarchy.map(level => level.NodeId).join()
            : hierarchyConfig[hierarchyQuestion].map(selected => selected.level).join()
        ) || null,
      })),
    ],
  }
}

function joinFiltersCML(filterMap) {
  const values = [];

  const filters = Object.keys(filterMap).map(key => {
    const filterItem = filterMap[key];
    if (filterItem) {
      const {value, definition} = filterItem;
      if (value) values.push(filterItem);
      return definition;
    } else {
      return '';
    }
  });
  return `
  ${filters.join('')}
  ${values.length > 0 ? `
    state runtime {
      ${values.join('')}
    }
  ` : ''}
  `
}

export function getFilterInfo() {
  const pNumber = 'p123456'; //todo replace from reportal
  getFilterConfiguration().then(configuration => {
    const config = updateConfigWithValues({configuration, hierarchy: window.hierarchyValue});
    const CML = configurationToCML(config);
    sendFilters(CML);
  });

  function setupDataListener() {
    if (Y && Y.Global) {
      Y.Global.on('reportcontroller:viewModeDataUpdate', filterInfo => {
        const {customFilters: filterPanel, persNodes: hierarchy} = getUpdateQuery(filterInfo);
        const config = updateConfigWithValues({configuration, hierarchy: window.hierarchyValue});
        const CML = configurationToCML(config);
        sendFilters(CML);

        sendFilters(combineCML(query))
      })
    } else {
      throw new Error('YUI is not defined or accessible, cannot set up a "reportcontroller:viewModeDataUpdate" listener');
    }
  }

  function configurationToCML(configuration) {
    if (configuration && configuration.Items) {
      return configuration.Items.reduce((acc, filterItem) => ({
        ...acc,
        ...createFilterCML(filterItem, pNumber),
      }), {});
    }
  }
}

function getUpdateQuery(filterInfo) {
  const search = decodeURIComponent(filterInfo);
  const {query} = ReportalBase.locationDeserialize({search});
  return query
}
