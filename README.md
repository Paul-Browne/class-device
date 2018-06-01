# class-device
An alternative way to handle responsive design

Add classes (desktop first)

```html
<div class="foo" class-tablet="bar" class-mobile="baz">
  
<!--
<div class="foo bar">       on tablet
<div class="foo bar baz">   on mobile
-->
```

Also remove classes (desktop first)

```html
<div class="foo" class-tablet="bar" class-mobile="baz /foo">
  
<!--
<div class="foo bar">       on tablet
<div class="bar baz">       on mobile
-->
```

Add classes (mobile first)

```html
<div class="foo" class-tablet="bar" class-laptop="baz">
  
<!--
<div class="foo bar">           on tablet
<div class="foo bar baz">       on laptop
-->
```

Also remove classes (mobile first)

```html
<div class="foo" class-tablet="bar" class-laptop="baz /foo">
  
<!--
<div class="foo bar">   on tablet
<div class="bar baz">   on laptop
-->
```

##### Include the script at the end of the body

```html
  <script src="js/class-device-desktop-first.min.js"></script>
  <!-- or -->
  <script src="js/class-device-mobile-first.min.js"></script>
</body>
```

#### whats the difference between desktop-first and mobile-first?

as their names suggest, they will inherit in their specific direction. 

Eg. on **mobile first** `class-tablet="foo"` will add `class="foo"` on all screen sizes **greater** than 720px

Eg. on **desktop first** `class-tablet="foo"` will add `class="foo"` on all screen sizes **less** than 1000px


#### How do I set the breakpoints?

In the script (desktop first)

```js
var dims = {
    "laptop": 1520, 			    // 95em
    "tablet": 1280, 			    // 80em
    "tablet-portrait": 1000, 	// 62.5em
    "mobile": 720, 				    // 45em
    "mobile-portrait": 440 		// 27.5em
};
```

In the script (mobile first)

```js
var dims = {
    "mobile-landscape": 440,    // 27.5em
    "tablet": 720,              // 45em
    "tablet-landscape": 1000,   // 62.5em
    "laptop": 1280,             // 80em
    "desktop": 1520             // 95em
};
```


#### why do this? Is this really the answer?

Maybe... Is your css a mess? Do you have dozens of @media query breakpoints? Some of them (min-width), some of them (max-width) and some of them both? **class-device** works well with atomic/utility css like tailwind or tachyons.

Having the breakpoints defined in the HTML makes it more intuitive to see whats happening eg. (desktop-first) 

```html
<div class="flex p-3 text-xl font-bold" class-tablet-portrait="flex-col /p-3 p-2" class-mobile="/text-xl /p-2 p-1" >
```

if your css is consistantly well structured, eg 

```css
.p-3 { padding:3rem }
.p-2 { padding:2rem }
.p-1 { padding:1rem }
```

then you wouldn't need to write `class-tablet-portrait="/p-3"` since `p-2` would override `p-3`

It's good to structure your css depending on your workflow, eg if you prefer desktop first development then write your css descending, like above. if you prefer mobile first, then do the opposite.
