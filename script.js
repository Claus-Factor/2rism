const menu = document.querySelector(".menu");
const mobileNav = document.querySelector(".nav__mobile-list");
menu.onclick = () => {
    mobileNav.classList.toggle("none");
    document.body.classList.toggle("no-overflow");
}