const menu = document.querySelector(".menu");
const mobileNav = document.querySelector(".nav__mobile-list");
const header = document.querySelector(".header");
menu.onclick = () => {
    mobileNav.classList.toggle("none");
    document.body.classList.toggle("no-overflow");
    header.classList.toggle("shadow");
}