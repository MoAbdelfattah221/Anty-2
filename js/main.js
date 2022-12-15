// Menu Function
let menuIcon = document.querySelector(".icon");
let cancelIcon = document.querySelector(".cancel");
let menu = document.querySelector(".menu");
menuIcon.onclick = () => {
    menu.classList.toggle("active");
    cancelIcon.onclick = () => {
        menu.classList.toggle("active");
    };
}

// Swiper Library
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  