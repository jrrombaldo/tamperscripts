// ==UserScript==
// @name         Quip Font Update Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  update fonts on quip
// @author       You
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @require      https://code.jquery.com/jquery-3.6.0.slim.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
       $(document).ready(function(){
            Array.from(document.getElementsByClassName('content')).forEach(element => {
                element.style.setProperty('--theme-font-family', 'Avenir Next');
                element.style.setProperty('--theme-font-size', '16px');
            });
        })
    
    
})();
