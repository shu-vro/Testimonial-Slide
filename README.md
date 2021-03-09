# Testimonial-Slide

Testimonial Slide &lt;HTML> {CSS} (JavaScript)

Goto [Swiper js](https://swiperjs.com) For The library.
## Intro

Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.

Swiper is not compatible with all platforms, **it is a modern touch slider which is focused only on modern apps/platforms to bring the best experience and simplicity.**

Swiper, along with other great components, is a part of Framework7 - a fully-featured framework for building iOS & Android apps. Swiper is also a default slider component in the Ionic Framework.

### Features: 
- Library Agnostic
- 1:1 Touch movement
- Mutation Observer
- Rich API
- Full True RTL Support
- Multi Row Slides Layout
- Transition Effects
- Two-way Control
- Full Navigation Control
- Flexbox Layout
- Most Flexible Slides Layout Grid
- Parallax Transitions
- Images Lazy Loading
- Virtual Slides

To find more, Goto [Swiper js](https://swiperjs.com)

### Installation

*** In HTML, Include 

``` html 
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<div class="swiper-container">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
```

In StyleSheet, 

```css
.swiper-container {
  width: 600px;
  height: 300px;
}
```

In JavaScript,

```js
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
```

For Basic Starter. 

To Find out more animation, Goto [demos](https://swiperjs.com/demos)
