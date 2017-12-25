class HeaderScroller {
  /**
   * `HeaderScroller` is a class that listens to `iframeEl`'s contentWindow scroll event and scrolls the `reportalHeaderHTMLElement` when the iframeEl is scrolled
   * @param {Window} contentWindow - iframeEl.contentWindow
   * @param {HTMLElement} reportalHeaderHTMLElement - reportalHeaderHTMLElement element that needs to be scrolled
   * */
  constructor(contentWindow, reportalHeaderHTMLElement) {
    contentWindow.requestAnimationFrame =
      contentWindow.requestAnimationFrame
      || contentWindow.mozRequestAnimationFrame
      || contentWindow.webkitRequestAnimationFrame
      || contentWindow.msRequestAnimationFrame;

    this._meta = {
      topOffset: null,
      ticking: false,
      offsetHeight: null,
      header: null,
      lastScrollY: 0,
      contentWindow: contentWindow
    };
    this.header = reportalHeaderHTMLElement;
    this.attachListeners();
  }

  get header() {
    return this._meta.header;
  }

  set header(headerElement) {
    let offset;
    if (this.header != null) {
      this._meta.topOffset = this.headerTopOffset;
      this._resetHeader();
    }
    this._meta.header = headerElement;
    this._meta.offsetHeight = headerElement.offsetHeight;
    this._configureHeader();
    this._setHeaderOffsetInIframe();
  }

  get headerTopOffset() {
    return this.header.style.top;
  }

  _resetHeader() {
    const header = this.header;
    header.classList.remove('scrollable-header');
    header.style.top = "";
    // this.detachListeners();
  }

  _configureHeader() {
    const header = this.header;
    header.classList.add('scrollable-header');
    header.style.top = this._meta.topOffset;
  }

  _setHeaderOffsetInIframe() {
    const iframeBody = this._meta.contentWindow.document.querySelector('body');
    iframeBody.style.paddingTop = this._meta.offsetHeight + "px";
  }

  requestTick(callback) {
    if (!this._meta.ticking) {
      requestAnimationFrame(callback);
      this._meta.ticking = true;
    }
  }

  attachListeners() {
    this._meta.contentWindow.addEventListener("scroll", this._scrollFixed, false);
  }

  detachListeners() {
    this._meta.contentWindow.removeEventListener("scroll", this._scrollFixed);
  }

  _scrollFixed=()=>{
    this._meta.lastScrollY = this._meta.contentWindow.pageYOffset;
    this.requestTick(this._scrollCallback);
  };

  _scrollCallback=()=>{
    let offset = this._meta.lastScrollY;
    this.header.style.top = -offset + 'px';
    this._meta.ticking = false;
  };
}

export default HeaderScroller
