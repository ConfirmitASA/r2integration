import SideNav from "../side-nav/side-nav";
import MediaQuery from "media-query";
import HeaderScroller from "../r2/header-scroller";


class MenuTransformer{
  /**
   * This class sets up a listener to detect whether the viewport matches the max-width set up in `breakpoint` and based on existence of an integration-iframe
   * sets up heade scrollers or just swaps the header into horizontal or sidebar navigation modes
   * @param {Number} [breakpoint=768] - max-width of device viewport that is considered to be a mobile device and hosts a mobile sidebar.
   * @requires MediaQuery
   * @requires SideNav
   * @requires HeaderScroller
   * */
  constructor(breakpoint=768){
    this.iframe = document.querySelector('.r2dashboard');
    this.header = document.querySelector('.reportal-bar');

    // if it's integration page - do scrolling
    if(this.iframe){
      document.querySelector('.body-wrapper').classList.add('integration-mode'); //reverse layout to make header appear above iframe

      this.pScroller = new Promise((resolve,reject)=>{
        let headerScroller;
        if(!this.isBlankIframe){
          headerScroller = this.makeHeaderScrollable(this.iframe.contentWindow);
          resolve(headerScroller); //resolve to the instance of `HeaderScroller`
        } else {
          this.iframe.addEventListener('load',e=>{
            headerScroller = this.makeHeaderScrollable(e.target.contentWindow); //initialise headerScroller
            resolve(headerScroller); //resolve to the instance of `HeaderScroller`
          });
        }
      });
    }
    this.sidenav = new SideNav();

    this.mediaQuery = new MediaQuery({query:`max-width:${breakpoint}px`},(matches)=>{
      console.log(matches);
      if(!matches){ // if desktop
        this.swapHeader(document.querySelector('.reportal-bar'));
        this.sidenav.removeEventListeners();
      } else { // if mobile
        this.swapHeader(document.querySelector('.reportal-header'));
        this.sidenav.addEventListeners();
      }
    },this);
  }

  makeHeaderScrollable(iframeContentWindow){
    return this.header && new HeaderScroller(iframeContentWindow,this.header);
  }

  get isBlankIframe(){
    return this.iframe.contentWindow.location.href==='about:blank'
  }

  /**
   * Function that sets this.header to a new HTMLElement and does the same for HeaderScroller
   * */
  swapHeader(header){
    this.header = header;
    if(this.iframe && this.pScroller){
      this.pScroller.then(hs=>hs.header = header);
    }
  }


}

export default MenuTransformer;
