import SideNav from "../side-nav/side-nav";
import MediaQuery from "media-query";
import HeaderScroller from "../r2/header-scroller";


class TransformMenuAt {
  /**
   * This class sets up a listener to detect whether the viewport matches the max-width set up in `breakpoint` and based on existence of an integration-iframeEl
   * sets up heade scrollers or just swaps the header into horizontal or sidebar navigation modes
   * @param {Number} [breakpoint=768] - max-width of device viewport that is considered to be a mobile device and hosts a mobile sidebar.
   * @param {Object} [options]
   * @param {String} [options.iframeClassName] - r2integration iframe CSS class
   * @param {String} [options.desktopHeaderClassName] - CSS class of header to display above `breakpoint`
   * @param {String} [options.mobileHeaderClassName] - CSS class of header to display below `breakpoint`
   * @requires MediaQuery
   * @requires SideNav
   * @requires HeaderScroller
   * */
  constructor(breakpoint = 768, options={}) {
    const {
            iframeClassName        = '.r2dashboard',
            desktopHeaderClassName = '.reportal-bar',
            mobileHeaderClassName  = '.reportal-header',
          } = options;

    this.iframeEl        = document.querySelector(iframeClassName);
    this.desktopHeaderEl = document.querySelector(desktopHeaderClassName);
    this.mobileHeaderEl  = document.querySelector(mobileHeaderClassName);
    this.currentHeader = null;

    if (this.isIntegrationMode){// if it's integration page - do scrolling
      this.swapHeaderAndIframe();
      this.headerScrollerInst = this.makeHeaderRespondToIframeScroll();
    }
    this.handleBreakpointMatch = this.handleBreakpointMatch.bind(this);
    this.sidenav = new SideNav();
    this.mediaQuery = new MediaQuery({query: `max-width:${breakpoint}px`}, this.handleBreakpointMatch, this);
  }

  get isIntegrationMode(){
    return !!this.iframeEl
  }

  swapHeaderAndIframe(){
    document.querySelector('.body-wrapper').classList.add('integration-mode');
  }

  handleBreakpointMatch(belowBreakpoint) {
    if (!belowBreakpoint) {
      this.swapHeader(this.desktopHeaderEl);
      this.sidenav.removeEventListeners();
    } else {
      this.swapHeader(this.mobileHeaderEl);
      this.sidenav.addEventListeners();
    }
  }

  makeHeaderRespondToIframeScroll() {
    return new Promise(resolve => {
      if (!this.isIframeURLEmpty) {
        resolve(this.makeHeaderScrollable(this.iframeEl.contentWindow));
      } else {
        this.iframeEl.addEventListener('load', e =>{
          return resolve(this.makeHeaderScrollable(e.target.contentWindow))

        }
        );
      }
    });
  }

  makeHeaderScrollable(iframeContentWindow) {
    return this.currentHeader && new HeaderScroller(iframeContentWindow, this.currentHeader);
  }

  get isIframeURLEmpty() {
    return this.iframeEl.contentWindow.location.href === 'about:blank'
  }

  /**
   * Sets `this.currentHeader` to a new HTMLElement and does the same for `HeaderScroller.header`
   * */
  swapHeader(newHeader) {
    this.currentHeader = newHeader;
    if (this.iframeEl && this.headerScrollerInst) {
      this.headerScrollerInst.then(headerScroller => headerScroller.header = newHeader);
    }
  }
}

export default TransformMenuAt;
