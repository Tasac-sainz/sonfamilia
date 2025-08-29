'use strict'
console.log("ready vet-page");

/* PÁGINA VETE_PAGE */

const vetCardContainer = document.querySelector(".vets");


const vets = [
    {name:"Home Vets", url: "https://media.v2.siweb.es/uploaded_thumb_small/b53d701788f2aec074f342d04ff697a2/logo_2.png" ,descrip:"Destaca por su honradez, grandes profesionales con servicio integral veterinario", direction: "Cotos de Monterey"},
    {name: "Las 4 Huellas", url:"https://www.las4huellas.es/data/6457/modulos/2555207/las_4_huellas.png", descrip: "Buen trato y empatía hacia los animales y referentes, especilidades poco comunes como la Terapia Hormonal Sustitutiva", direction: "San Agustín del Guadalix"},
    {name: "Sirio", url:"https://lh5.googleusercontent.com/proxy/rAG81O67GQoSlAXuMjKPGselzwVOE2Dk5tx8KJqNvb0vh7WbIGUwGXzdjAzkZ3JQMQrVq8rNhB5SAOT1Z-nybcEckFRpgnSQS4s9QZG-hdVtgwauFocmouGc", descrip: "Amabilidad y trato respetuoso, personal encantador con servicio de peluquería", direction: "Pedrezuela"}
]

vets.forEach ((vet) => {
    const cardVet =
         `<div class="vets-card">
            <h3 class="vets-card_title">${vet.name}</h3>
            <img class="vets-card_img" src="${vet.url}"/>
             <p class="vets-card_descrip">${vet.descrip}</p>
            <p class="vets-card_direction">${vet.direction}</p>
        </div>`
    vetCardContainer.innerHTML += cardVet;
})