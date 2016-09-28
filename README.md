# Color Switcher

Color Switcher is a simple solution for you website template demo. You can easily create color variations switcher, so that your potential client test and check your demo web template in various color so conveniently.

[Demo](https://obiplabon.github.io/color-switcher/)

## How

First of all add `color-swither.css` and `color-switcher.js` in proper place. And then you must add your alternative color stylesheets in the following format:

``` html
<link rel="alternate stylesheet" data-color="A" title="B" href="C">
```
- A: Color code in hexadecimal or rgb or rgba.
- B: An apprehensible and concise title.
- C: Alternative color stylesheet URL.

Make sure to add `data-color` and `title` attribute, otherwise **Color Switcher** will not recognize the alternative color stylesheet. You also have to add your default color stylesheet. Here is an example:

``` html
<!-- Default -->
<link rel="stylesheet" data-color="A" title="B" href="C">
<!-- Alternative -->
<link rel="alternate stylesheet" data-color="A" title="B" href="C">
```

## Can I?

Yes, you can use **Color Switcher** however and wherever you want.

Feel free, it is totally free...