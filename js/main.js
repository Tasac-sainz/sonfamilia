'use strict'
console.log("ready!");

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

fetch ("/partials/_header.html").then (response => response.text()).then (html => {
    header.innerHTML=html
    const burger = document.querySelector(".burger-menu");
    const menuList = document.querySelector(".list");
    burger.addEventListener ("click", () => {
        menuList.classList.toggle("hidden");
    })
});

fetch ("/partials/_footer.html").then (response => response.text()).then (html => {footer.innerHTML=html});