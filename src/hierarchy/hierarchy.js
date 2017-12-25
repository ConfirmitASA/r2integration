export default class MDHierarchy {
  get hierarchyToggle() {
    return document.querySelector('.dd-target-button');
  }

  get hierarchyChrome() {
    return this.hierarchyToggle.parentNode.querySelector('.dd-drilldown')
  }

  get cancelButton() {
    return this.hierarchyChrome.querySelector('.dd-cancel')
  }

  get applyButton() {
    return this.hierarchyChrome.querySelector('.dd-button-select')
  }

  /**
   * attaches a listener to a hierarchy popup when it's initialised to be able to close it on click-outside
   * */
  upgrade() {
    const hierarchyButton = this.hierarchyToggle;
    hierarchyButton && hierarchyButton.addEventListener('click', this.hierarchyToggleClickHandler)
  }

  asyncHierarchyChrome() {
    return new Promise(resolve =>
      setTimeout(() => {
          const hierarchyChrome = this.hierarchyChrome;
          hierarchyChrome ? resolve(hierarchyChrome) : resolve(this.asyncHierarchyChrome())
        },
        300)
    )
  }

  hierarchyToggleClickHandler() {
    this.detachHierarchyToggleClickListener();
    this.disablePageScroll();
    let hierarchyChrome = this.hierarchyChrome;
    if (!hierarchyChrome) {
      hierarchyChrome = this.asyncHierarchyChrome();
      hierarchyChrome.then(this.attachChromeCloseListener)
    } else {
      this.attachChromeCloseListener(hierarchyChrome)
    }
  }

  detachHierarchyToggleClickListener() {
    this.hierarchyToggle.removeEventListener('click', this.hierarchyToggleClickHandler);
  }

  attachChromeCloseListener(hierarchyChrome) {
    hierarchyChrome.addEventListener('click', this.onChromeClose)
  }

  onChromeClose(event) {
    const cancel = this.cancelButton,
      apply = this.applyButton,
      chrome = this.hierarchyChrome,
      clickedEl = event.path[0];

    if ([chrome, cancel, apply].indexOf(clickedEl) > -1) {
      if (clickedEl == chrome) {
        cancel.click();
      } else {
        this.enablePageScroll();
      }
    }
  }

  disablePageScroll() {
    document.querySelector('body').setAttribute('style', 'overflow:hidden !important');
  }

  enablePageScroll() {
    document.querySelector('body').removeAttribute('style');
  }
}

