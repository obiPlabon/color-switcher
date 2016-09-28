;(function() {
    "use strict";

    var styleSheets, colorSheets, tempCon, colorSwitcher, controlBtn, colorSwitchs;

    styleSheets = Array.prototype.slice.call(document.styleSheets),

    colorSheets = styleSheets.filter(function(colorSheet) {
        return (colorSheet.ownerNode.dataset.color && colorSheet.title);
    });

    tempCon = document.createDocumentFragment();
    colorSwitcher = document.createElement("div");
    controlBtn = document.createElement("button");
    colorSwitchs = document.createElement("div");

    colorSwitcher.classList.add("ColorSwitcher");
    controlBtn.classList.add("ColorSwitcher__control");
    colorSwitchs.classList.add("ColorSwitcher__switchs");

    colorSheets.forEach(function(colorSheet, index) {
        var colorSwitch = document.createElement("button");

        colorSwitch.classList.add("ColorSwitcher__switch")
        colorSwitch.title = "Switch to " + colorSheet.title;
        colorSwitch.dataset.index = "s" + index;
        colorSwitch.style.backgroundColor = colorSheet.ownerNode.dataset.color;
        
        colorSwitchs.appendChild(colorSwitch);
    });

    colorSwitchs.addEventListener("click", function(event) {
        var colorSwitch, index;

        colorSwitch = event.target;

        if (colorSwitch.nodeName !== "BUTTON") {
            return;
        }

        index = colorSwitch.dataset.index;
        
        colorSheets.forEach(function(colorSheet, sheetIndex) {
            if (index === ("s" + sheetIndex)) {
                colorSheet.disabled = false;
            } else {
                colorSheet.disabled = true;
            }
        });

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