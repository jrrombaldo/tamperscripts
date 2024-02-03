// ==UserScript==
// @name         Gammarly (Re)Styler
// @namespace    https://github.com/jrrombaldo/tamperscripts
// @version      0.1
// @description  Customize Gramamrly Style
// @author       Carlos R
// @match        https://app.grammarly.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @require      https://code.jquery.com/jquery-3.6.0.slim.min.js
// @updateURL    https://github.com/jrrombaldo/tamperscripts/raw/main/grammarly-styler.user.js
// @downloadURL  https://github.com/jrrombaldo/tamperscripts/raw/main/grammarly-styler.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    


    const WAIT_TIME = 10000 //delay is in milliseconds

    const FONT_FAMILY = 'spectral'
    const FONT_SIZE = '22px'
    const WIDTH = '52rem'



    function css( element, property ) {
        return window.getComputedStyle( element, null ).getPropertyValue( property );
    }
    function setCSS( element, property, value ) {
        element.style.setProperty(property, value);
    }


    $(document).ready(function(){

        console.log('STARTING FONT CHANGE...')

        setTimeout(function(){
            console.log('waited enough')


        Array.from(document.querySelectorAll('[class*=editorContent]')).forEach(div => {
            setCSS(div, 'font-family', FONT_FAMILY)
            setCSS(div, 'font-size', FONT_SIZE)
          //setCSS(div, 'max-width', WIDTH)

        });



  /*

            var divs = document.querySelectorAll('[class*=editorContent]');
            for(var i = 0; i < divs.length; i++){
               //console.log('before', divs[i], css( divs[i], 'font-family'))

                setCSS(divs[i], 'font-family', FONT_FAMILY)
                setCSS(divs[i], 'font-size', FONT_SIZE)
                //setCSS(divs[i], 'max-width', WIDTH)

               //console.log('after', divs[i], css( divs[i], 'font-family'))
            }

            */

            console.log('FONT CHANGED !!!');


        },WAIT_TIME);


  


       
     })
})();