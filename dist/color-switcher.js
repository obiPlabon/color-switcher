;(function() {
    "use strict";

    var styleSheets, colorSheets, tempCon, colorSwitcher, controlBtn, colorSwitchs, linkHolderHtml, linkHolder;

    colorSheets = [
        {
            color: "#ff8400",
            title: "Switch to Default",
            href: "./css/color-default.css"
        },
        {
            color: "#ff463a",
            title: "Switch to Red",
            href: "./css/color-red.css"
        },
        {
            color: "#4bda28",
            title: "Switch to Green",
            href: "./css/color-green.css"
        },
        {
            color: "#4650dc",
            title: "Switch to Blue",
            href: "./css/color-blue.css"
        },
        {
            color: "#f41c54",
            title: "Switch to Magenta",
            href: "./css/color-magenta.css"
        }
    ];

    
    

    tempCon = document.createDocumentFragment();
    colorSwitcher = document.createElement("div");
    controlBtn = document.createElement("button");
    colorSwitchs = document.createElement("div");
    linkHolderHtml = document.createElement("link");
    linkHolderHtml.rel = "stylesheet";
    linkHolderHtml.id = "ColorSwitcherLinkHolder";
    document.head.appendChild(linkHolderHtml);
    linkHolder = document.getElementById("ColorSwitcherLinkHolder");



    colorSwitcher.classList.add("ColorSwitcher");
    controlBtn.classList.add("ColorSwitcher__control");
    colorSwitchs.classList.add("ColorSwitcher__switchs");

    colorSheets.forEach(function(colorSheet, index) {
        var colorSwitch = document.createElement("button");

        colorSwitch.classList.add("ColorSwitcher__switch")
        colorSwitch.title = colorSheet.title;
        colorSwitch.dataset.index = index;
        colorSwitch.style.backgroundColor = colorSheet.color;
        
        colorSwitchs.appendChild(colorSwitch);
    });

    colorSwitchs.addEventListener("click", function(event) {
        var colorSwitch, index;

        colorSwitch = event.target;

        if (colorSwitch.nodeName !== "BUTTON") {
            return;
        }

        index = colorSwitch.dataset.index;

        linkHolder.href = colorSheets[index].href

        return false;
    });

    controlBtn.addEventListener("click", function(event) {
        event.target.parentElement.classList.toggle("ColorSwitcher--open");

        return false;
    });

    colorSwitcher.appendChild(controlBtn);
    colorSwitcher.appendChild(colorSwitchs);
    tempCon.appendChild(colorSwitcher);
    document.body.appendChild(tempCon);
})();