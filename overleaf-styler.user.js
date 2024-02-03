// ==UserScript==
// @name         OverLeaf (Re)Styler
// @namespace    https://github.com/jrrombaldo/tamperscripts
// @version      0.1
// @description  customize Overleaf's style
// @author       Carlos R
// @match        https://www.overleaf.com/project/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @require      https://code.jquery.com/jquery-3.6.0.slim.min.js
// @updateURL    https://github.com/jrrombaldo/tamperscripts/edit/main/overleaf-styler.user.js
// @downloadURL  https://github.com/jrrombaldo/tamperscripts/edit/main/overleaf-styler.js.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    function getStyle( element ) {
        var size = window.getComputedStyle(element, null ).getPropertyValue( '--font-size' )
        var font = window.getComputedStyle(element, null ).getPropertyValue( '--source-font-family' )
        console.log('current font='+font+' and size'+size)
    }

    function setStyle( element ) {

        element.style.setProperty('--font-size', '18px');
        element.style.setProperty('--source-font-family', 'spectral');

    }


    $(document).ready(function(){

        setTimeout(function(){
            let text = "Should I customise the font?\nEither OK or Cancel.";
            if (confirm(text) == true) {
                console.log('customisation confirmed')

                   Array.from(document.querySelectorAll('[class*=cm-editor]')).forEach(div => {
                       getStyle( div );
                       setStyle( div );
                       getStyle( div );
                   });


            } else {
                console.log('customisation canceled')
            }


        }, 1000); // time to wait in ms


    })


})();