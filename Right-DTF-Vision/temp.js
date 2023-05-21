// ==UserScript==
// @name         Right DTF Vision
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @author       ogampot | https://t.me/ogampotik | https://dtf.ru/u/15036-ogampot-fanat-static-dress
// @description  The true DTF vision for all men!
// @match        https://dtf.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dtf.ru
// ==/UserScript==

(function() {
    function layerListButton() {
        var div = document.getElementById("topLayerListDiv");
        if(div == null) {
            div = document.getElementById("topLayerListDivHidden");
            div.id = "topLayerListDiv";
        }
        else {
            div.id = "topLayerListDivHidden";
        }
    }

    function changeLayerImg()
    {
        var img = document.getElementById("topLayerImg");
        img.src = document.querySelector('input[name="layerImg"]:checked').value;
    }

    function changeLayerImgByLink()
    {
        var img = document.getElementById("topLayerImg");
        img.src = document.getElementById("topLayerYourImgLink").value;
        document.getElementsByClassName("ui-radio-button ui-radio-button--checked").class = "ui-radio-button";
    }

    function clampOpacity(value)
    {
        return Math.min(Math.max(value.value, value.min), value.max);
    }

    function changeLayerImgOpacity()
    {
        var img = document.getElementById("topLayerImg");
        img.setAttribute("style", "opacity: " + clampOpacity(document.getElementById("topLayerOpacityValue").value) + "%;");
    }

    function setStorage() {
        localStorage.setItem("opacityValuer", document.getElementById("topLayerOpacityValue".value));
        localStorage.setItem("link", document.getElementById("topLayerImg").src);
        localStorage.setItem("linkInput", document.getElementById("topLayerYourImgLink").value);
        localStorage.setItem("check", document.querySelector("input[name=\"layerImg\"]:checked").id);
    }

    function setValues() {
        var currentOpacity = localStorage.getItem('opacityValuer');
        var currentLink = localStorage.getItem('link');
        var currentCheck = localStorage.getItem('check');

        if(currentOpacity == null) currentOpacity = 100;
        if(currentLink == null) currentLink = "";
        if(currentOpacity == null) currentOpacity == "topLayerRadio0";

        if(document.getElementById('topLayerOpacityValue') != null) document.getElementById('topLayerOpacityValue').value = currentOpacity;
        if(document.getElementById('topLayerYourImgLink') != null) document.getElementById('topLayerYourImgLink').value;
        if(document.getElementById(currentCheck) != null) document.getElementById(currentCheck).checked = true;
    }

    let layers = [
        ["None", "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="],
        ["Right vision", "https://images2.imgbox.com/ff/d0/9zjWbFvg_o.png"],
        ["Code screen", "https://images2.imgbox.com/f0/02/UgSZxyzS_o.png"],
        ["Iana", "https://images2.imgbox.com/89/26/uvAicREy_o.png"]
    ];

    var head = document.querySelector('head');

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'topLayerScript';
    script.innerHTML = 'function layerListButton() { \n\t'
                     + 'var div = document.getElementById("topLayerListDiv"); \n\t'
                     + 'if(div == null) { \n\t\t'
                     + 'div = document.getElementById("topLayerListDivHidden"); \n\t\t'
                     + 'div.id = "topLayerListDiv"; \n\t'
                     + '} \n\t'
                     + 'else { \n\t\t'
                     + 'div.id = "topLayerListDivHidden"; \n\t'
                     + '} \n'
                     + '} \n';
    script.innerHTML += 'function changeLayerImg() { \n\t'
                      + 'var img = document.getElementById("topLayerImg"); \n\t'
                      + 'img.src = document.querySelector(\'input[name="layerImg"]:checked\').value; \n\t'
                      //+ 'setStorage(); \n'
                      + '} \n';
    script.innerHTML += 'function changeLayerImgByLink() { \n\t'
                      + 'var img = document.getElementById("topLayerImg"); \n\t'
                      + 'img.src = document.getElementById("topLayerYourImgLink").value; \n\t'
                      + 'document.getElementsByClassName("ui-radio-button ui-radio-button--checked")[0].setAttribute("class", "ui-radio-button"); \n\t'
                      //+ 'setStorage(); \n'
                      + '} \n';
    script.innerHTML += 'function changeLayerImgOpacity() { \n\t'
                      + 'var value = document.getElementById("topLayerOpacityValue"); \n\t'
                      + 'value.value = Math.min(Math.max(value.value, value.min), value.max); \n\t'
                      + 'var img = document.getElementById("topLayerImg"); \n\t'
                      + 'img.setAttribute("style", "opacity: " + document.getElementById("topLayerOpacityValue").value + "%;"); \n\t'
                      //+ 'setStorage(); \n'
                      + '} \n';
    script.innerHTML += 'function setStorage() { \n\t'
                      + 'localStorage.setItem("opacityValuer", document.getElementById("topLayerOpacityValue".value)); \n\t'
                      + 'localStorage.setItem("link", document.getElementById("topLayerYourImgLink").value); \n\t'
                      + 'localStorage.setItem("check", document.querySelector("input[name=\"layerImg\"]:checked").id); \n'
                      + '} \n';

    head.appendChild(script);

    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'topLayerStyles';
    style.innerHTML = '#topLayerGeneralDiv{ \n\t'
                    + 'position: fixed; \n\t'
                    + 'z-index: 990; \n\t'
                    + '/*pointer-events: none;*/ \n'
                    + '} \n';
    style.innerHTML += '#topLayerImg{ \n\t'
                     + 'top: 0; \n\t'
                     + 'left: 0; \n\t'
                     + 'width: 100%; \n\t'
                     + 'height: 100%; \n\t'
                     + 'position: fixed; \n\t'
                     + 'z-index: 995; \n\t'
                     + 'pointer-events: none; \n\t'
                     + '} \n';
    style.innerHTML += '#topLayerButtonDiv{ \n\t'
                     + 'right: 30px; \n\t'
                     + 'bottom: 30px; \n\t'
                     + 'width: 50px; \n\t'
                     + 'height: 50px; \n\t'
                     + 'position: fixed; \n\t'
                     + 'z-index: 1000; \n\t'
                     + 'background-color: white; \n\t'
                     + 'display: flex; \n\t'
                     + 'align-content: flex-start; \n\t'
                     + 'justify-content: center; \n\t'
                     + 'border: #d9f5ff 4px solid; \n\t'
                     + 'border-radius: 10px; \n'
                     + '} \n';
    style.innerHTML += '#topLayerButtonDiv:hover{ \n\t'
                     + 'background-color: #d9f5ff; \n\t'
                     + 'border: #66d6ff 2px solid; \n\t'
                     + 'border-radius: 10px; \n\t'
                     + 'outline: #66d6ff 2px solid; \n\t'
                     + 'outline-offset: 2px; \n'
                     + '} \n';
    style.innerHTML += '#topLayerButtonSwitch{ \n\t'
                     + 'font-size: 14pt; \n\t'
                     + 'font-weight: bolder; \n\t'
                     + 'font-family: "Monaco", monospace; \n'
                     + '} \n';
    style.innerHTML += '#topLayerListDiv{ \n\t'
                     + 'right: 30px; \n\t'
                     + 'bottom: 90px; \n\t'
                     + 'max-width: 1000px; \n\t'
                     + 'max-height: 300px; \n\t'
                     + 'position: fixed; \n\t'
                     + 'z-index: 1005; \n\t'
                     + 'background-color: white; \n\t'
                     + 'display: flex; \n\t'
                     + 'flex-direction: column; \n\t'
                     + 'align-content: flex-start; \n\t'
                     + 'justify-content: flex-start; \n\t'
                     + 'padding: 10px; \n\t'
                     + 'overflow-x: hidden; \n\t'
                     + 'overflow-y: auto; \n\t'
                     + 'border: #d9f5ff 4px solid; \n\t'
                     + 'border-radius: 10px; \n'
                     + '} \n';
    style.innerHTML += '#topLayerListDivHidden{ \n\t'
                     + 'visibility: hidden; \n\t'
                     + 'position: absolute; \n\t'
                     + 'pointer-events: none;\n'
                     + '} \n';
    style.innerHTML += '#topLayerListElementDiv{ \n\t'
                     + 'padding: 5px; \n'
                     + '} \n';
    style.innerHTML += '#topLayerListElementLabelUnhoverable{ \n\t'
                     + 'font-size: 12pt; \n\t'
                     + 'font-weight: bold; \n\t'
                     + 'font-family: "Monaco", monospace; \n'
                     + '} \n';
    style.innerHTML += '#topLayerListElementLabel{ \n\t'
                     + 'margin-left: 10px; \n\t'
                     + 'font-size: 12pt; \n\t'
                     + 'font-weight: bold; \n\t'
                     + 'font-family: "Monaco", monospace; \n'
                     + '} \n';
    style.innerHTML += '#topLayerListElementLabel:hover{ \n\t'
                     + 'color: #4683d9; \n'
                     + '} \n';
    style.innerHTML += '#topLayerOpacityValue{ \n\t'
                     + 'background-color: #d9f5ff; \n\t'
                     + 'border: #66d6ff 2px solid; \n\t'
                     + 'border-radius: 5px; \n\t'
                     + 'font-size: 12pt; \n\t'
                     + 'font-weight: bold; \n\t'
                     + 'font-family: "Monaco", monospace; \n'
                     + '} \n';
    style.innerHTML += '#topLayerYourImgLink{ \n\t'
                     + 'background-color: #d9f5ff; \n\t'
                     + 'border: #66d6ff 2px solid; \n\t'
                     + 'border-radius: 5px; \n\t'
                     + 'font-size: 12pt; \n\t'
                     + 'font-weight: bold; \n\t'
                     + 'font-family: "Monaco", monospace; \n'
                     + '} \n';
    style.innerHTML += '#topLayerYourImgOkButton{ \n\t'
                     + 'width: 25px; \n\t'
                     + 'height: 25px; \n\t'
                     + 'margin-left: 5px; \n\t'
                     + 'background-color: white; \n\t'
                     + 'border: #66d6ff 2px solid; \n\t'
                     + 'border-radius: 5px; \n\t'
                     + 'font-size: 12pt; \n\t'
                     + 'font-weight: bold; \n\t'
                     + 'font-family: "Monaco", monospace; \n'
                     + '} \n';
    style.innerHTML += '#topLayerYourImgOkButton:hover{ \n\t'
                     + 'border: #4683d9 2px solid; \n'
                     + '} \n';

    head.appendChild(style);

    var body = document.querySelector('body');

    var divGeneral = document.createElement('div');
    divGeneral.id = 'topLayerGeneralDiv';

    var divImg = document.createElement('div');
    divImg.id = 'topLayerImgDiv';

    var img = document.createElement('img');
    img.id = 'topLayerImg';
    img.src = layers[0][1];
    img.setAttribute("style", "opacity: 100%;");

    divImg.appendChild(img);
    divGeneral.appendChild(divImg);

    var divButton = document.createElement('div');
    divButton.id = 'topLayerButtonDiv';
    divButton.setAttribute("onclick", "layerListButton()");

    var buttonSwitch = document.createElement('button');
    buttonSwitch.id = 'topLayerButtonSwitch';
    buttonSwitch.innerHTML = '///';

    divButton.appendChild(buttonSwitch);
    divGeneral.appendChild(divButton);

    var divLayersList = document.createElement('div');
    divLayersList.id = 'topLayerListDivHidden';

    var divListElementO = document.createElement('div');
    divListElementO.id = 'topLayerListElementDiv';

    var labelOpacity = document.createElement('label');
    labelOpacity.id = 'topLayerListElementLabelUnhoverable';
    labelOpacity.setAttribute("for", "layerOpacity");
    labelOpacity.innerHTML = 'IMG Opacity %: ';

    var opacityValueInput = document.createElement('input');
    opacityValueInput.type = 'number';
    opacityValueInput.id = 'topLayerOpacityValue';
    opacityValueInput.name = 'layerOpacity';
    opacityValueInput.min = 0;
    opacityValueInput.max = 100;
    opacityValueInput.step = 10;
    opacityValueInput.setAttribute("value", "100");
    opacityValueInput.setAttribute("onchange", "changeLayerImgOpacity()");

    divListElementO.appendChild(labelOpacity);
    divListElementO.appendChild(opacityValueInput);

    divLayersList.appendChild(divListElementO);

    divLayersList.innerHTML += "</br>";

    var divListElementL = document.createElement('div');
    divListElementL.id = 'topLayerListElementDiv';

    var labelYourImg = document.createElement('label');
    labelYourImg.id = 'topLayerListElementLabelUnhoverable';
    labelYourImg.setAttribute("for", "imgLink");
    labelYourImg.innerHTML = 'Your IMG-link: ';

    var yourImgLink = document.createElement('input');
    yourImgLink.type = 'text';
    yourImgLink.id = 'topLayerYourImgLink';
    yourImgLink.name = 'imgLink';

    var buttonOk = document.createElement('button');
    buttonOk.id = 'topLayerYourImgOkButton';
    buttonOk.innerHTML = 'OK';
    buttonOk.setAttribute("onclick", "changeLayerImgByLink()");

    divListElementL.appendChild(labelYourImg);
    divListElementL.appendChild(yourImgLink);
    divListElementL.appendChild(buttonOk);

    divLayersList.appendChild(divListElementL);

    divLayersList.innerHTML += "</br>";

    var divListElementT = document.createElement('div');
    divListElementT.id = 'topLayerListElementDiv';

    var labelList = document.createElement('label');
    labelList.id = 'topLayerListElementLabelUnhoverable';
    labelList.innerHTML = 'IMG Sample: ';

    divListElementT.appendChild(labelList);

    divLayersList.appendChild(divListElementT);

    for(var i = 0; i < layers.length; i++)
    {
        var divListElement = document.createElement('div');
        divListElement.id = 'topLayerListElementDiv';

        var radioLayer = document.createElement('input');
        radioLayer.type = 'radio';
        radioLayer.name = 'layerImg';
        radioLayer.id = 'topLayerRadio' + i;
        radioLayer.value = layers[i][1];
        radioLayer.setAttribute("onchange", "changeLayerImg()");
        if(i == 0) radioLayer.checked = true;

        var label = document.createElement('label');
        label.id = 'topLayerListElementLabel';
        label.setAttribute("for", "topLayerRadio" + i);
        label.innerHTML = layers[i][0];

        divListElement.appendChild(radioLayer);
        divListElement.appendChild(label);

        divLayersList.appendChild(divListElement);
    }

    divGeneral.appendChild(divLayersList);

    body.appendChild(divGeneral);

    //setValues();
})();