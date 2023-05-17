// ==UserScript==
// @name         Right DTF Vision
// @namespace    http://tampermonkey.net/
// @updateURL   https://github.com/ogampot/Right-DTF/raw/master/Right-DTF-Vision/Right_DTF.user.js
// @downloadURL https://github.com/ogampot/Right-DTF/raw/master/Right-DTF-Vision/Right_DTF.user.js
// @version      0.1.2
// @description  The true DTF vision for all men!
// @author       ogampot
// @match        https://dtf.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dtf.ru
// ==/UserScript==

(function() {
    var head = document.querySelector('head'),
        style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'unique-id';
    style.innerHTML = '#topLayer {\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\tz-index: 999;\n\tpointer-events: none;\n}';
    head.appendChild(style);

    var body = document.querySelector('body'),
        img = document.createElement('img');
    img.id = 'topLayer';
    img.src = 'https://images2.imgbox.com/ff/d0/9zjWbFvg_o.png';
    body.appendChild(img);
})();