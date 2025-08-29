'use strict'
console.log("ready dog-page");

const burger = document.querySelector(".burger-menu");
const menuList = document.querySelector(".list");
const menuLinks = document.querySelectorAll(".go-to");

burger.addEventListener ("click", () => {
    menuList.classList.toggle("hidden");
});

menuLinks.forEach((link) => {
    link.addEventListener ("click", (event) => {
    menuList.classList.add("hidden");
})});


const selectDog = document.querySelector(".select-dog_form");
const imgDog = document.querySelector(".dog-img");
const textDescrip = document.querySelector(".dog-description")


const breedDescription = 
    {"hound/ibizan":"Es el perro más inteligente del mundo", 
    "husky": "Son independientes y cantarines", "labrador": "Los labradores son perros juguetones y amigables"};


const buildImg = (url) => {
     fetch ("https://dog.ceo/api/breeds/image/random")          /* Este fetch pinta una imagen aleatoria cada vez que se carga la página */
    .then ((response) => {
        return response.json()})
    .then ((data) => {
        imgDog.src = data.message
        })
    .catch((error) => {
    console.log("Se ha producido un error:", error);
    });
}
buildImg();

const showSelectDog = (selectBreed) => {
    fetch (`https://dog.ceo/api/breed/${selectBreed}/images/random`)
    .then ((response) => {
        return response.json()})
    .then ((data) => {
        imgDog.src = data.message
        })
    .catch((error) => {
    console.log("Se ha producido un error:", error);
    });
}

const showDescripDog = (breed) => {
    textDescrip.classList.remove("quote");
    const descr = breedDescription[breed];
    if (descr) {
        textDescrip.innerHTML = descr
    }};

const handleClickSelectDog = (event) => {
    const selectBreed = event.target.value;
    showSelectDog(selectBreed);
    showDescripDog (selectBreed);
}

selectDog.addEventListener("change", handleClickSelectDog);