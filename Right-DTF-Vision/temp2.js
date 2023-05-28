// ==UserScript==
// @name         Right DTF Vision
// @namespace    http://tampermonkey.net/
// @version      0.3
// @author       ogampot | https://t.me/ogampotik | https://dtf.ru/u/15036-ogampot-fanat-static-dress
// @description  Истинный вид дтф.
// @match        https://dtf.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dtf.ru
// ==/UserScript==

(function() {
    function openNewTab(evt, tabId) {

    }

    let layers = [
        ["None", "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="],
        ["Right vision", "https://images2.imgbox.com/ff/d0/9zjWbFvg_o.png"],
        ["Right vision (vertical)", "https://images2.imgbox.com/af/12/iPl5OfgT_o.png"],
        ["Порвался? Жаль", "https://images2.imgbox.com/19/77/D4BHUUlj_o.png"],
        ["Порвался? Жаль (с котом)", "data:image/jpeg;base64,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"],
        ["Райан Гослинг", "https://img.redbull.com/images/c_crop,w_1172,h_585,x_0,y_86,f_auto,q_auto/c_scale,w_1200/redbullcom/2016/05/20/1331795954995_2/райан-гослинг.jpg"],
        ["Райан Гослинг (Да поебать нам)", "https://stickerpacks.ru/wp-content/uploads/2023/04/nabor-stikerov-da-poebat-mne-dlja-telegram-4.webp"],
        ["Райан Гослинг (Барби)", "https://img.championat.com/s/735x490/news/big/c/g/foto-rajan-gosling-v-obraze-kena-dlya-filma-barbi_16553112791320986632.jpg"],
        ["Райан Гослинг (Бегущий по лезвию 2049)", "https://www.soyuz.ru/public/uploads/files/2/7113247/20170810090017e9ea62cca9.jpg"],
        ["Билли Харрингтон", "https://phonoteka.org/uploads/posts/2022-09/thumbs/1664032873_2-phonoteka-org-p-gachimuchi-oboi-na-rabochii-stol-instagram-2.jpg"],
        ["Филл Спенсер", "https://ixbt.online/live/images/original/16/95/46/2022/12/11/11580e0872.webp"],
        ["Тодд Говард", "https://cdn.igromania.ru/mnt/articles/e/e/6/9/2/9/32021/preview/144cfcd11a46aedc_1920xH.jpg"],
        ["XBox", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/XBOX_logo_2012.svg/2560px-XBOX_logo_2012.svg.png"],
        ["PS", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/PlayStation_logo_and_wordmark.svg/2560px-PlayStation_logo_and_wordmark.svg.png"],
        ["Nintendo", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1024px-Nintendo.svg.png"],
        ["PC", "https://static.vecteezy.com/system/resources/previews/003/747/223/original/pc-logo-monogram-with-slash-style-design-template-free-vector.jpg"],
    ];

    var head = document.querySelector('head');

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'topLayerScript';
    script.innerHTML = `
    function valuesOnLoad()
    {
        var img = document.getElementById("topLayerImg");
        img.setAttribute("style", "opacity: " + document.getElementById("topLayerOpacityValue").value + "%;");

        var link = document.getElementById("topLayerYourImgLink");
        if((link.value != null || link.value != "") && img.src == link.value)
        {
            document.getElementsByClassName("ui-radio-button ui-radio-button--checked")[0].setAttribute("class", "ui-radio-button");
        }
        else
        {
            document.getElementsByClassName("ui-radio-button ui-radio-button--checked")[0].setAttribute("class", "ui-radio-button");
            var spanElement = document.querySelector('input[name="layerImg"]:checked').parentNode;
            if(spanElement != null) spanElement.setAttribute("class", "ui-radio-button ui-radio-button--checked");
        }
    }

    function layerListButton() {
        var div = document.getElementById("topLayerPanelDiv");
        if(div != null) {
            if(div.getAttribute("style") == "opacity: 100%; pointer-events: all;")
            {
                div.setAttribute("style", "opacity: 0%; pointer-events: none;");
            }
            else {
                div.setAttribute("style", "opacity: 100%; pointer-events: all;");
            }
        }
    }
    function changeLayerImg() {
        var img = document.getElementById("topLayerImg");
        img.src = document.querySelector('input[name="layerImg"]:checked').value;
        setStorage();
    }
    function changeLayerImgByLink() {
        var img = document.getElementById("topLayerImg");
        var link = document.getElementById("topLayerYourImgLink");
        if (link.value != "" && link.value != null && link.value.length > 0)
        {
            img.src = document.getElementById("topLayerYourImgLink").value;
            var spanElement = document.getElementsByClassName("ui-radio-button ui-radio-button--checked")[0];
            if(spanElement != null) spanElement.setAttribute("class", "ui-radio-button");
        }
        else
        {
            document.getElementById("topLayerRadio0").checked = true;
            img.src = document.querySelector('input[name="layerImg"]:checked').value;
            console.log(document.querySelector('input[name="layerImg"]:checked').parentNode);
            var spanElement = document.querySelector('input[name="layerImg"]:checked').parentNode;
            spanElement.setAttribute("class", "ui-radio-button ui-radio-button--checked");
        }
        setStorage();
    }
    function changeLayerImgOpacity() {
        var value = document.getElementById("topLayerOpacityValue");
        value.value = Math.min(Math.max(value.value, value.min), value.max);
        var img = document.getElementById("topLayerImg");
        img.setAttribute("style", "opacity: " + document.getElementById("topLayerOpacityValue").value + "%;");
        setStorage();
    }
    function opacityValueChangeByButtons(n) {
        var value = document.getElementById("topLayerOpacityValue");
        value.value = parseInt(value.value) + n;
        value.value = Math.min(Math.max(value.value, value.min), value.max);
        var img = document.getElementById("topLayerImg");
        img.setAttribute("style", "opacity: " + document.getElementById("topLayerOpacityValue").value + "%;");
        setStorage();
    }

    function setStorage() {
        localStorage.setItem("opacityValue", document.getElementById("topLayerOpacityValue").value);
        localStorage.setItem("link", document.getElementById("topLayerImg").src);
        localStorage.setItem("linkInput", document.getElementById("topLayerYourImgLink").value);
        localStorage.setItem("check", document.querySelector('input[name="layerImg"]:checked').id);
    }
    function setValues() {
        var currentOpacity = localStorage.getItem('opacityValue');
        var currentLink = localStorage.getItem('link');
        var currentLinkInput = localStorage.getItem('linkInput');
        var currentCheck = localStorage.getItem('check');

        if(currentOpacity == null) currentOpacity = 100;
        if(currentLink == null) currentLink = "";
        if(currentLinkInput == null) currentLinkInput = "";
        if(currentCheck == null) currentCheck == "topLayerRadio0";

        if(document.getElementById('topLayerOpacityValue') != null) document.getElementById('topLayerOpacityValue').value = currentOpacity;
        if(document.getElementById('topLayerImg') != null) document.getElementById('topLayerImg').src = currentLink;
        if(document.getElementById('topLayerYourImgLink') != null) document.getElementById('topLayerYourImgLink').value = currentLinkInput;
        if(document.getElementById(currentCheck) != null) document.getElementById(currentCheck).checked = true;

        valuesOnLoad();
    }

    document.addEventListener('click', (e) => {
        var divList = document.getElementById("topLayerPanelDiv");
        var divButton = document.getElementById("topLayerButtonDiv");
        if(divList != null && divButton != null) {
            var withinBoundariesList = e.composedPath().includes(divList);
            var withinBoundariesButton = e.composedPath().includes(divButton);
            if (!withinBoundariesList && !withinBoundariesButton) {
                if(divList.getAttribute("style") == "opacity: 100%; pointer-events: all;")
                {
                    divList.setAttribute("style", "opacity: 0%; pointer-events: none;");
                }
            }
        }
    });
    `;

    head.appendChild(script);

    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'topLayerStyles';
    style.innerHTML = `
    #topLayerGeneralDiv {
        position: fixed;
        z-index: 990;
    }
    #topLayerImg {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 995;
        pointer-events: none;
    }
    #topLayerButtonDiv {
        right: 30px;
        bottom: 30px;
        width: 50px;
        height: 50px;
        position: fixed;
        z-index: 1000;
        background-color: white;
        display: flex;
        align-content: flex-start;
        justify-content: center;
        border-radius: 10px;
        border: #d9f5ff 4px solid;
        outline: #d9f5ff 0px solid;
        outline-offset: 0px;
        transition: 0.1s;
    }
    #topLayerButtonDiv:hover {
        background-color: #d9f5ff;
        border: #66d6ff 2px solid;
        outline: #66d6ff 2px solid;
        outline-offset: 2px;
    }
    #topLayerButtonSwitch {
        font-size: 14pt;
        font-weight: bolder;
        font-family: "Monaco", monospace;
        transform: rotate(90deg);
        letter-spacing: -2px;
    }
    #topLayerPanelDiv {
        right: 30px;
        bottom: 90px;
        max-width: 1000px;
        max-height: 300px;
        position: fixed;
        z-index: 1005;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: flex-start;
        padding: 10px;
        overflow-x: hidden;
        overflow-y: auto;
        border: #d9f5ff 4px solid;
        border-radius: 10px;
        transition: 0.15s;
    }
    #topLayerPanelDiv::-webkit-scrollbar {
        width: 10px;
    }
    #topLayerPanelDiv::-webkit-scrollbar-track {
        background: #d9f5ff;
        border: white 3px solid;
        border-radius: 10px;
    }
    #topLayerPanelDiv::-webkit-scrollbar-thumb {
        background: #66d6ff;
        border-radius: 6px;
    }
    #topLayerListElementDiv {
        padding: 5px;
        display: flex;
        align-items: center;
    }
    #topLayerListElementLabelUnhoverable {
        font-size: 12pt;
        font-weight: bold;
        font-family: "Monaco", monospace;
        margin-right: 10px;
    }
    #topLayerListElementLabel {
        margin-left: 10px;
        font-size: 12pt;
        font-weight: bold;
        font-family: "Monaco", monospace;
    }
    #topLayerListElementLabel:hover {
        color: #4683d9;
    }
    #topLayerOpacityValue {
        background-color: #d9f5ff;
        border: #66d6ff 2px solid;
        border-radius: 5px;
        font-size: 12pt;
        font-weight: bold;
        font-family: "Monaco", monospace;
    }
    #topLayerOpacityValue::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
    }
    #topLayerOpacityButtonsDiv {
        width: 50px;
        height: 25px;
        margin-left: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: white;
        border: #66d6ff 2px solid;
        border-radius: 5px;
        font-size: 15pt;
        font-weight: bold;
        font-family: "Monaco", monospace;
    }
    #topLayerOpacityValueButtons {
        width: 25px;
        border-radius: 2px;
        outline: 1px solid #66d6ff;
    }
    #topLayerOpacityValueButtons:active {
        background-color: #66d6ff;
    }
    #topLayerYourImgLink {
        background-color: #d9f5ff;
        border: #66d6ff 2px solid;
        border-radius: 5px;
        font-size: 12pt;
        font-weight: bold;
        font-family: "Monaco", monospace;
    }
    #topLayerYourImgOkButton {
        width: 25px;
        height: 25px;
        margin-left: 5px;
        background-color: white;
        border: #66d6ff 2px solid;
        border-radius: 5px;
        font-size: 12pt;
        font-weight: bold;
        font-family: "Monaco", monospace;
    }
    #topLayerYourImgOkButton:active {
        background-color: #66d6ff;
    }
    #topLayerDefaultLayersList {
        max-height: 100px;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        border: #d9f5ff 4px solid;
        border-radius: 10px;
    }
    #topLayerDefaultLayersList::-webkit-scrollbar {
        width: 10px;
    }
    #topLayerDefaultLayersList::-webkit-scrollbar-track {
        background: #d9f5ff;
        border: white 3px solid;
        border-radius: 10px;
    }
    #topLayerDefaultLayersList::-webkit-scrollbar-thumb {
        background: #66d6ff;
        border-radius: 6px;
    }
    #topLayerSeparator {
        border-top: #d9f5ff 3px dashed;
        border-radius: 10px;
        margin: 10px 0px 10px 0px;
    }
    #topLayerPanelTabsDiv {
        margin-bottom: 5px;
        border-bottom: 3px solid #d9f5ff;
    }
    #topLayerTab {
        padding: 5px 10px;
        background-color: #d9f5ff78;
        font-size: 12pt;
        font-weight: bold;
        font-family: "Monaco", monospace;
    }
    #topLayerTab:hover {
        /*background-color: #d9f5ff;
        border-top: #66d6ff solid 1px;
        border-right: #66d6ff solid 1px;
        border-left: #66d6ff solid 1px;*/
        box-shadow: inset #d9f5ff 0px 0px 8px 2px;
    }
    #topLayerTabActive {
        padding: 5px 10px;
        background-color: #d9f5ff;
        font-size: 12pt;
        font-weight: bold;
        font-family: "Monaco", monospace;
    }
    `;

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
    buttonSwitch.innerHTML = '|||';

    divButton.appendChild(buttonSwitch);
    divGeneral.appendChild(divButton);

    var divLayersPanel = document.createElement('div');
    divLayersPanel.id = 'topLayerPanelDiv';
    divLayersPanel.setAttribute("style", "opacity: 0%; pointer-events: none;");

    var divLayersPanelTabs = document.createElement('div');
    divLayersPanelTabs.id = 'topLayerPanelTabsDiv';

    var buttonTab1 = document.createElement('button');
    buttonTab1.id = 'topLayerTab';
    buttonTab1.innerHTML = 'Tab 1';
    buttonTab1.setAttribute("onclick", "");

    var buttonTab2 = document.createElement('button');
    buttonTab2.id = 'topLayerTab';
    buttonTab2.innerHTML = 'Tab 2';
    buttonTab2.setAttribute("onclick", "");

    divLayersPanelTabs.appendChild(buttonTab1);
    divLayersPanelTabs.appendChild(buttonTab2);

    divLayersPanel.appendChild(divLayersPanelTabs);

    var divListElementO = document.createElement('div');
    divListElementO.id = 'topLayerListElementDiv';

    var labelOpacity = document.createElement('label');
    labelOpacity.id = 'topLayerListElementLabelUnhoverable';
    labelOpacity.setAttribute("for", "layerOpacity");
    labelOpacity.innerHTML = 'Image Opacity %: ';

    var opacityValueInput = document.createElement('input');
    opacityValueInput.type = 'number';
    opacityValueInput.id = 'topLayerOpacityValue';
    opacityValueInput.name = 'layerOpacity';
    opacityValueInput.min = 0;
    opacityValueInput.max = 100;
    opacityValueInput.setAttribute("value", "100");

    var divOpacityButtons = document.createElement('div');
    divOpacityButtons.id = 'topLayerOpacityButtonsDiv';

    var buttonPlus = document.createElement('button');
    buttonPlus.id = 'topLayerOpacityValueButtons';
    buttonPlus.innerHTML = '+';
    buttonPlus.setAttribute("onclick", "opacityValueChangeByButtons(10)");

    var buttonMinus = document.createElement('button');
    buttonMinus.id = 'topLayerOpacityValueButtons';
    buttonMinus.innerHTML = '-';
    buttonMinus.setAttribute("onclick", "opacityValueChangeByButtons(-10)");

    divOpacityButtons.appendChild(buttonPlus);
    divOpacityButtons.appendChild(buttonMinus);

    divListElementO.appendChild(labelOpacity);
    divListElementO.appendChild(opacityValueInput);
    divListElementO.appendChild(divOpacityButtons);

    divLayersPanel.appendChild(divListElementO);

    divLayersPanel.innerHTML += '<div id="topLayerSeparator"></div>';

    var divListElementL = document.createElement('div');
    divListElementL.id = 'topLayerListElementDiv';

    var labelYourImg = document.createElement('label');
    labelYourImg.id = 'topLayerListElementLabelUnhoverable';
    labelYourImg.setAttribute("for", "imgLink");
    labelYourImg.innerHTML = 'Your Image-link: ';

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

    divLayersPanel.appendChild(divListElementL);

    divLayersPanel.innerHTML += '<div id="topLayerSeparator"></div>';

    var divListElementT = document.createElement('div');
    divListElementT.id = 'topLayerListElementDiv';

    var labelList = document.createElement('label');
    labelList.id = 'topLayerListElementLabelUnhoverable';
    labelList.innerHTML = 'Image Sample: ';

    divListElementT.appendChild(labelList);

    divLayersPanel.appendChild(divListElementT);

    var divListDefaultLayers = document.createElement('div');
    divListDefaultLayers.id = 'topLayerDefaultLayersList';

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

        divListDefaultLayers.appendChild(divListElement);
    }

    divLayersPanel.appendChild(divListDefaultLayers);

    divGeneral.appendChild(divLayersPanel);

    var bodyScript = document.createElement('script');
    bodyScript.id = 'topLayerBodyScript';
    bodyScript.innerHTML = 'setValues()';

    divGeneral.appendChild(bodyScript);

    body.appendChild(divGeneral);
})();