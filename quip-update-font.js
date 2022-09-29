// ==UserScript==
// @name         Quip (Re)Styler
// @namespace    https://github.com/jrrombaldo/tamperscripts
// @version      0.1
// @description  customize QUIP's style
// @author       Carlos R
// @match        https://quip-amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @require      https://code.jquery.com/jquery-3.6.0.slim.min.js
// @updateURL    https://github.com/jrrombaldo/tamperscripts/edit/main/quip-update-font.js
// @downloadURL  https://github.com/jrrombaldo/tamperscripts/edit/main/quip-update-font.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('STARTING FONT CHANGE...');
    
    
    const FONT_FAMILY = 'iA Writer Duo S';
    const FONT_SIZE = '16px;';
    const BACKGROUND_COLOR = "227,227,226"
    
  
    /*
      some fonts on brew ...
      brew tap homebrew/cask-fonts
      brew install font-ia-writer-quattro
      brew install font-ia-writer-duo
      brew install font-ia-writer-mono
    */


    $(document).ready(function(){

        document.body.style.setProperty('--quipBackground', BACKGROUND_COLOR);

        const element = document.querySelector('.document-content'); // '.document' also works, need to understand the difference...
        if (element == null) {
            console.error ('ELEMENT IS NULL, CSS CLASS NOT FOUND...')
            
        } else {
            element.style.setProperty('--theme-font-family', FONT_FAMILY);
            element.style.setProperty('--quipUiFontFamily', FONT_FAMILY);
            element.style.setProperty('--spreadsheet-theme-font-family', FONT_FAMILY);
            element.style.setProperty('--theme-font-size', FONT_SIZE);
        }


        console.log('FONT CHANGED !!!');


       /*
        Array.from(document.getElementsByClassName('content')).forEach(element => {
            element.style.setProperty('--theme-font-family', FONT_FAMILY);
            element.style.setProperty('--theme-font-size', FONT_SIZE);
        });
        */
     })
})();
