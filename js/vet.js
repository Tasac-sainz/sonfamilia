'use strict'
console.log("ready vet-page");

/* PÁGINA VETE_PAGE */

const vetCardContainer = document.querySelector(".vets");


const vets = [
    {name:"Home Vets", descrip:"Destaca por su honradez, grandes profesionales con servicio integral veterinario", direction: "Cotos de Monterey"},
    {name: "Las 4 Huellas", descrip: "Buen trato y empatía hacia los animales y referentes, especilidades poco comunes como la Terapia Hormonal Sustitutiva", direction: "San Agustín del Guadalix"},
    {name: "Sirio", descrip: "Amabilidad y trato respetuoso, personal encantador con servicio de peluquería", direction: "Pedrezuela"}
]

vets.forEach ((vet) => {
    const cardVet =
         `<div class="vets-card">
            <h3 class="vets-card_title">${vet.name}</h3>
            <img class="vets-card_img"/>
             <p class="vets-card_descrip">${vet.descrip}</p>
            <p class="vets-card_direction">${vet.direction}</p>
        </div>`
    vetCardContainer.innerHTML += cardVet;
})