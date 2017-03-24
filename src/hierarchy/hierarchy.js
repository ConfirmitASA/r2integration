export default class MDHierarchy {
  /**
   * attaches a listener to a hierarchy popup when it's initialised to be able to close it on click-outside
   * */
  static upgrade() {
    const hierarchyButton = MDHierarchy.hierarchyToggle;
    hierarchyButton && hierarchyButton.addEventListener('click', MDHierarchy.hierarchyToggleClickHandler)
  }

  static get hierarchyToggle() {
    return document.querySelector('.dd-target-button');
  }

  static get hierarchyChrome() {
    return MDHierarchy.hierarchyToggle.parentNode.querySelector('.dd-drilldown')
  }

  static asyncHierarchyChrome() {
    return new Promise(resolve =>
      setTimeout(() => {
          const hierarchyChrome = MDHierarchy.hierarchyChrome;
          hierarchyChrome ? resolve(hierarchyChrome) : resolve(MDHierarchy.asyncHierarchyChrome())
        },
        300)
    )
  }

  static hierarchyToggleClickHandler() {
    MDHierarchy.detachHierarchyToggleClickListener();
    MDHierarchy.disablePageScroll();
    let hierarchyChrome = MDHierarchy.hierarchyChrome;
    if (!hierarchyChrome) {
      hierarchyChrome = MDHierarchy.asyncHierarchyChrome();
      hierarchyChrome.then(MDHierarchy.attachChromeCloseListener)
    } else {
      MDHierarchy.attachChromeCloseListener(hierarchyChrome)
    }
  }

  static detachHierarchyToggleClickListener() {
    MDHierarchy.hierarchyToggle.removeEventListener('click', MDHierarchy.hierarchyToggleClickHandler);
  }


  static attachChromeCloseListener(hierarchyChrome) {
    hierarchyChrome.addEventListener('click', MDHierarchy.onChromeClose)
  }

  static onChromeClose(event) {
    const cancel    = MDHierarchy.cancelButton,
          apply     = MDHierarchy.applyButton,
          chrome    = MDHierarchy.hierarchyChrome,
          clickedEl = event.path[0];

    if ([chrome, cancel, apply].indexOf(clickedEl) > -1) {
      if (clickedEl == chrome) {
        cancel.click();
      } else {
        MDHierarchy.enablePageScroll();
      }
    }
  }

  static get cancelButton() {
    return MDHierarchy.hierarchyChrome.querySelector('.dd-cancel')
  }

  static get applyButton() {
    return MDHierarchy.hierarchyChrome.querySelector('.dd-button-select')
  }

  static disablePageScroll() {
    document.querySelector('body').setAttribute('style', 'overflow:hidden !important');
  }

  static enablePageScroll() {
    document.querySelector('body').removeAttribute('style');
  }
}

