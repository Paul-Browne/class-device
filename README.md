# class-mobile
An alternative way to handle responsive design

Add classes

```html
<div class="foo" class-tablet="bar" class-mobile="baz">
  
<!--
<div class="foo bar">       on tablet
<div class="foo bar baz">   on mobile
-->
```

Also remove classes

```html
<div class="foo" class-tablet="bar" class-mobile="baz /foo">
  
<!--
<div class="foo bar">       on tablet
<div class="bar baz">       on mobile
-->
```

Include the script at the end of the body

```html
  <script src="js/class-mobile.js"></script>
</body>
```

#### why do this?

Because your css looks like this!

```css
.d-flex {
  display: flex;
}

@media (min-width: 576px){
  .d-sm-flex {
    display: flex;
  }
}

@media (min-width: 768px){
  .d-md-flex {
    display: flex;
  }
}

@media (min-width: 992px){
  .d-lg-flex {
    display: flex;
  }
}

@media (min-width: 1200px){
  .d-xl-flex {
    display: flex;
  }
}
```

this is just `display: flex` and the css is already a mess



