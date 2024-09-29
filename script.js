const menu = document.querySelector(".menu");
const mobileNav = document.querySelector(".nav__mobile-list");
const header = document.querySelector(".header");
menu.onclick = () => {
    mobileNav.classList.toggle("none");
    document.body.classList.toggle("no-overflow");
    header.classList.toggle("shadow");
}

const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('h2-animation');
      }
    });
  });
observer.observe(document.querySelector('.h2_1'));
observer.observe(document.querySelector('.h2_2'));
observer.observe(document.querySelector('.h2_3'));
observer.observe(document.querySelector('.h2_4'));
observer.observe(document.querySelector('.h2_5'));