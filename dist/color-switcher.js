;(function() {
    "use strict";
    
    var sheets = Array.prototype.slice.call(document.styleSheets);
    var vSheets = sheets.filter(function(sheet) {
        return sheet.title;
    });

    var buttons = document.createDocumentFragment();
    var mainContainer = document.createElement("div");
    var controlButton = document.createElement("button");
    var container = document.createElement("div");

    mainContainer.classList.add("ColorSwitcher");
    controlButton.classList.add("ColorSwitcher__control");

    mainContainer.appendChild(controlButton);

    vSheets.forEach(function(sheet, index) {
        var button = document.createElement("button");
        button.dataset.index = "s" + index;
        button.classList.add("ColorSwitcher__switch")
        button.style.backgroundColor = sheet.title;
        buttons.appendChild(button);
    });

    container.classList.add("ColorSwitcher__switchs");
    container.appendChild(buttons);

    container.addEventListener("click", function(event) {
        if ( event.target.nodeName != "BUTTON" ) {
            return false;
        }

        var button = event.target;
        var index = button.dataset.index;
        vSheets.forEach(function(sheet, i) {
            if (index === "s"+i) {
                sheet.disabled = false;
            } else {
                sheet.disabled = true;
            }
        });
    });

    controlButton.addEventListener("click", function(event) {
        event.target.parentElement.classList.toggle("ColorSwitcher--open");
    });

    mainContainer.appendChild(container);

    document.body.appendChild(mainContainer);
})();