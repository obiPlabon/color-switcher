# Color Switcher

Color Switcher is a simple solution for you website template demo. You can easily create color variations switcher, so that your potential client test and check your demo web template in various color so conveniently.

[Demo](https://obiplabon.github.io/color-switcher/)

## How

First of all add `color-switcher.css` and `color-switcher.js` in proper place. And then pass a stylesheet array of objects to `ColorSwitcher.init()` method. Here is an example stylesheet array format:

```javascript
var colorSheets = [
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
```

So, lets see how we can initialize

```javascript
var colorSheets = [
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

ColorSwitcher.init(colorSheets);
```

## Can I?

Yes, you can use **Color Switcher** however and wherever you want.

Feel free, it is totally free...