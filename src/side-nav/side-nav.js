/**
 *
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Detabinator from "./detabinator";

class SideNav {
  /**
   * A class that sets up a sidebar that is dismissed on scrim-click or on swipe and is opend on hamburger-icon click
   * */
  constructor({
                showButtonEl = document.querySelector('.js-menu-show'),
                hideButtonEl = document.querySelector('.js-menu-hide'),
                sideNavEl = document.querySelector('.js-side-nav'),
                sideNavContainerEl = document.querySelector('.js-side-nav-container')
              } = {}) {
    this.showButtonEl = showButtonEl;
    this.hideButtonEl = hideButtonEl;
    this.sideNavEl = sideNavEl;
    this.sideNavContainerEl = sideNavContainerEl;
    // Control whether the container's children can be focused
    // Set initial state to inert since the drawer is offscreen
    this.detabinator = new Detabinator(this.sideNavContainerEl);
    this.detabinator.inert = true;
    this.startX = 0;
    this.currentX = 0;
    this.touchingSideNav = false;
    this.supportsPassive = null;
  }


  // apply passive event listening if it's supported
  applyPassive() {
    if (this.supportsPassive != null) {
      return this.supportsPassive ? {passive: true} : false;
    }
    // feature detect
    let isSupported = false;
    try {
      document.addEventListener('test', null, {
        get passive() {
          isSupported = true;
        }
      });
    } catch (e) {
    }
    this.supportsPassive = isSupported;
    return this.applyPassive();
  }

  addEventListeners() {
    this.showButtonEl.addEventListener('click', this.showSideNav);
    this.hideButtonEl.addEventListener('click', this.hideSideNav);
    this.sideNavEl.addEventListener('click', this.hideSideNav);
    this.sideNavContainerEl.addEventListener('click', this.blockClicks);

    this.sideNavEl.addEventListener('touchstart', this.onTouchStart, this.applyPassive());
    this.sideNavEl.addEventListener('touchmove', this.onTouchMove, this.applyPassive());
    this.sideNavEl.addEventListener('touchend', this.onTouchEnd);
  }

  removeEventListeners() {
    this.showButtonEl.removeEventListener('click', this.showSideNav);
    this.hideButtonEl.removeEventListener('click', this.hideSideNav);
    this.sideNavEl.removeEventListener('click', this.hideSideNav);
    this.sideNavContainerEl.removeEventListener('click', this.blockClicks);

    this.sideNavEl.removeEventListener('touchstart', this.onTouchStart);
    this.sideNavEl.removeEventListener('touchmove', this.onTouchMove);
    this.sideNavEl.removeEventListener('touchend', this.onTouchEnd);
  }

  onTouchStart = (evt) => {
    if (!this.sideNavEl.classList.contains('side-nav--visible'))
      return;
    //TODO:support sidebar scrolling as well
    this.startX = evt.touches[0].pageX;
    this.currentX = this.startX;

    this.touchingSideNav = true;
    requestAnimationFrame(this.update);
  };

  onTouchMove = (evt) => {
    if (!this.touchingSideNav) return;

    this.currentX = evt.touches[0].pageX;
  };

  onTouchEnd = (evt) => {
    if (!this.touchingSideNav)
      return;

    this.touchingSideNav = false;

    const translateX = Math.min(0, this.currentX - this.startX);
    this.sideNavContainerEl.style.transform = '';

    if (translateX < 0) {
      this.hideSideNav();
    }
  };

  update = () => {
    if (!this.touchingSideNav)
      return;

    requestAnimationFrame(this.update);

    const translateX = Math.min(0, this.currentX - this.startX);
    this.sideNavContainerEl.style.transform = `translateX(${translateX}px)`;
  };

  blockClicks = (evt) => {
    evt.stopPropagation();
  };

  onTransitionEnd = (evt) => {
    this.sideNavEl.classList.remove('side-nav--animatable');
    this.sideNavEl.removeEventListener('transitionend', this.onTransitionEnd);
  };

  showSideNav = () => {
    document.querySelector('body').style.overflow = "hidden";
    this.sideNavEl.classList.add('side-nav--animatable');
    this.sideNavEl.classList.add('side-nav--visible');
    this.detabinator.inert = false;
    this.sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
  };

  hideSideNav = () => {
    document.querySelector('body').style.overflow = "auto";
    this.sideNavEl.classList.add('side-nav--animatable');
    this.sideNavEl.classList.remove('side-nav--visible');
    this.detabinator.inert = true;
    this.sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
  }
}

export default SideNav

