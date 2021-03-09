// // let pattern = /^a/;          // Matches the letter that has 'a' (not the last one.)

// // let pattern = /$a/;          // Matches the letter that has 'a' as last letter

// // let pattern = /\d/;          // if string has got digit

// // let pattern = /\D/;          // if string has not got digit.

// // let pattern = /[a-z]/;       // Matches the string from a-z

// // let pattern = /[0-9]/;       // Matches the number from 0-9

// // let pattern = /.a/;          // Matches the letter that has 'a' (not the first one.)

// // let pattern = /\w/;          // Matches any alphanumeric character. (not space or empty string)

// // let pattern = /\W/;          // Matches which is not any alphanumeric character like '@' or '.'. (not space or empty string)

// // let pattern = /\s/;          // Matches the whitespace characters.

// // let pattern = /g;            // Selects the global RegExp (placed at last of the RegExp)
// let pattern = /[a-z][0-9]/g;
// let text = 'shuvro1060@gmail.com';

// if (text.match(pattern)) {
//     text = text.replace(pattern, '<div style="color: red;">$&</div>')
//     document.write(text);
// } else {
//     document.write('failed');
// }


var swiper = new Swiper(".swiper-container", {
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  mousewheel: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  zoom: false,
  // effect: "fade",
  // effect: "cube",
  // effect: "flip",
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    dynamicBullets: true,
    clickable: true,
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});