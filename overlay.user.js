// ==UserScript==
// @name         BizzWare + r/placeDE Template
// @namespace    http://tampermonkey.net/
// @version      11
// @description  Combination of BizzWare and r/placeDE template
// @author       BizzWare
// @match        https://garlic-bread.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.pietsmiet.de
// @updateURL    https://github.com/BizzWareX/rplace-pietsmiet/edit/main/overlay.user.js
// @downloadURL  https://github.com/BizzWareX/rplace-pietsmiet/edit/main/overlay.user.js
// ==/UserScript==

addOverlayImage("https://raw.githubusercontent.com/BizzWareX/rplace-pietsmiet/main/bonjwa/overlay.pn")
addOverlayImage("https://place.army/overlay_target.png")

function addOverlayImage(url) {
  var overlayImage = null;
  if (window.top !== window.self) {
    window.addEventListener('load', () => {
      const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
      overlayImage = document.createElement("img");
      overlayImage.src = url + "?" + Date.now()
      overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;pointerEvents: 'none';`;
      canvasContainer.appendChild(overlayImage);
    }, false);
  }

  setInterval(function () {
    overlayImage.src = url + "?" + Date.now()
  }, 30000);
}

