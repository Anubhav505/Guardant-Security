// NAVBAR BACKGROUNG COLOR
const nav = document.querySelector("nav");
function handleScroll() {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// MENU HIDE UNHIDE
const menu = document.querySelector(".menu");
const menuOptions = document.querySelector(".menu-options");
const menu2 = document.querySelector(".menu2");
let isMenuOpen = false;
menu2.style.display = "none";
function toggleMenu() {
  if (isMenuOpen) {
    menuOptions.classList.remove("visible");
    menu.style.display = "block";
    menu2.style.display = "none";
  } else {
    menuOptions.classList.add("visible");
    menu.style.display = "none";
    menu2.style.display = "block";
  }
  isMenuOpen = !isMenuOpen;
}

menu.addEventListener("click", toggleMenu);
menu2.addEventListener("click", toggleMenu);

var apple = document.querySelector("#services");
apple.addEventListener("click", function() {
    menuOptions.classList.remove("visible");
    menu.style.display = "block";
    menu2.style.display = "none";
})