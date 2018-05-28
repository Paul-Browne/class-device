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
<div class="foo" class-tablet="bar" class-mobile="baz" class-mobile-remove="foo">
  
<!--
<div class="foo bar">       on tablet
<div class="bar baz">       on mobile
-->
```
