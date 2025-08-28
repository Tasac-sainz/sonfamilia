'use strict'
console.log("ready!");

const burger = document.querySelector(".burger-menu");
const menuList = document.querySelector(".list");

burger.addEventListener ("click", () => {
    menuList.classList.toggle("hidden");
})

const selectDog = document.querySelector(".select-dog_form");
const imgDog = document.querySelector(".dog-img");
const textDescrip = document.querySelector(".dog-description")


const breedDescription = 
    {"hound/ibizan":"Es el perro más inteligente del mundo", 
    "husky": "Son independientes y cantarines"};


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