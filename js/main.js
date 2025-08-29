'use strict'
console.log("ready!");

const burger = document.querySelector(".burger-menu");
const menuList = document.querySelector(".list");
const menuLinks = document.querySelectorAll(".list a");

burger.addEventListener ("click", () => {
    menuList.classList.toggle("hidden");
});

menuLinks.forEach((link) => {
    link.addEventListener ("click", (event) => {
    menuList.classList.add("hidden");
})});


