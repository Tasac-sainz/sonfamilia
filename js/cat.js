'use strict'
console.log("ready cat-page");


const kittenData_1= {
    nameKitten: "Zape",
    raceKitten: "Europeo Común Naranja",
    descripKitten: "Es un gato muy cariñoso y familiar que se reconoce por su gran capacidad comunicativa, ya que es un gato muy hablador y exigente, a veces casi tirano con las personas con las que vive. Sin embargo, es también el gato más amoroso del mundo. Fiel a sus rutinas y hábitos, es el compañero perfecto.",
    imageKitten: "https://img.freepik.com/fotos-premium/gato-comun-europeo-naranja-mirando-adelante-descansando-retrato-animal_470418-1079.jpg"
}

const kittenData_2= {
    nameKitten: "Frida",
    raceKitten: "Europeo Común",
    descripKitten: "Es una gata muy cariñosa pero recelosa de personas desconocidas y precavida. Le encanta comer y el aire libre.",
    imageKitten: "https://www.qanimals.com/wp-content/uploads/2024/10/pexels-river-augustin-1370012990-28934371.jpg"
}

const kittenData_3= {
    nameKitten: "Dalí",
    raceKitten: "British Shorthair",
    descripKitten: "Este imponente gato de gran tamaño y pelaje suave totalmente gris, es de naturaleza tranquilo y apacible.",
    imageKitten: "https://upload.wikimedia.org/wikipedia/commons/c/c0/British_shorthair_Irina_AEA.JPG"
}
const kittenData_4= {
    nameKitten: "Pancho",
    raceKitten: "Siamés",
    descripKitten: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asia al menos hace 500 años, donde tuvo su origen muy posiblemente.",
    imageKitten: "https://dev.adalab.es/gato-siames.webp",
}
const kittenData_5= {
    nameKitten: "Wild",
    raceKitten: "Chausie",
    descripKitten: "Este gato enorme y de apariencia salvaje se considera un híbrido de gatos domésticos y gatos de la jungla. Son muy activos y juguetones. Es un animal muy cariñoso y apegado a su familia pero no es un gato tranquilo, sino todo lo contrario y eso, unido a su gran inteligencia y curiosidad, puede hacer que se escape de casa para conocer el mundo de su alrededor.",
    imageKitten: "https://www.tiendanimal.es/articulos/wp-content/uploads/2022/07/chausie.jpg"
}
const kittenData_6= {
    nameKitten: "Cielo",
    raceKitten: "Maine Coon",
    descripKitten: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
    imageKitten: "https://dev.adalab.es/maine-coon-cat.webp",
};
const kittenData_7= {
    nameKitten: "Benni",
    raceKitten: "Toyger",
    descripKitten: "El gato Toyger es una raza que busca parecerse lo más posible a un tigre en miniatura. Tiene un llamativo pelaje corto, le encanta perseguir a los miembros de la familia por la casa, acurrucarse a su lado y demandar atención. El Toyger repartirá su cariño por igual con todos los habitantes del hogar. Como curiosidad, a los gatitos Toyger les encanta el agua!, nadar y chapotear es de sus mayores aficiones.",
    imageKitten: "https://www.tiendanimal.es/articulos/wp-content/uploads/2022/02/Toyger-640x427.jpg"
}

const kittenData_8= {
    nameKitten: "Fiona",
    raceKitten: "Sphynx",
    descripKitten: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…, hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
    imageKitten: "https://dev.adalab.es/sphynx-gato.webp"
    };

const catList = [kittenData_1, kittenData_2, kittenData_3, kittenData_4, kittenData_5, kittenData_6, kittenData_7, kittenData_8];

const catContainer = document.querySelector(".cat-container");

catList.forEach ((cat) => {
    const catCard = `
        <div class="kitten-card">
            <img class="kitten-image" src="${cat.imageKitten}" alt="Foto de ${cat.nameKitten}"/>
            <h3 class="kitten-name">${cat.nameKitten}</h3>
            <p class="kitten-race">${cat.raceKitten}</p>
            <p class="kitten-description">${cat.descripKitten}</p>
        </div>`;
    catContainer.innerHTML += catCard
})
