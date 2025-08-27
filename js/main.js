'use strict'
console.log("ready!");

const burger = document.querySelector(".burger-menu");
const menuList = document.querySelector(".list");

burger.addEventListener ("click", () => {
    menuList.classList.toggle("hidden");
})
