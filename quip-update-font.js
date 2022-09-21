// ==UserScript==
// @name         Quip Font Update Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  update fonts on quip
// @author       You
// @match        https://quip-amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @require      https://code.jquery.com/jquery-3.6.0.slim.min.js
// @updateURL    https://github.com/jrrombaldo/tamperscripts/edit/main/quip-update-font.js
// @downloadURL  https://github.com/jrrombaldo/tamperscripts/edit/main/quip-update-font.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const FONT_FAMILY = 'iA Writer Quattro S';

    const element = document.querySelector('.document-content'); // '.document-content' also works, need to understand the difference...
    element.style.setProperty('--theme-font-family', FONT_FAMILY);
    element.style.setProperty('--quipUiFontFamily', FONT_FAMILY);
    element.style.setProperty('--spreadsheet-theme-font-family', FONT_FAMILY);
    element.style.setProperty('--theme-font-size', '14px');

    /*
      brew install font-ia-writer-quattro
      brew install font-ia-writer-duo
      brew install font-ia-writer-mono
    */


       $(document).ready(function(){
           /*
            Array.from(document.getElementsByClassName('content')).forEach(element => {
                element.style.setProperty('--theme-font-family', 'iA Writer Quattro S');
                element.style.setProperty('--theme-font-size', '14px');
            });
            */
       })

})();
