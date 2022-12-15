// Menu Function
let menuIcon = document.querySelector(".icon");
let cancelIcon = document.querySelector(".cancel");
let menu = document.querySelector(".menu");
menuIcon.onclick = () => {
    menu.classList.toggle("active");
    cancelIcon.onclick = () => {
        menu.classList.toggle("active");
    };
};
