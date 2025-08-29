'use strict'
console.log("ready cat-page");

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


const kittenData_1= {
    nameKitten: "Zape",
    raceKitten: "(Europeo Común Naranja)",
    descripKitten: "Es un gato muy cariñoso y familiar que se reconoce por su gran capacidad comunicativa, ya que es un gato muy hablador y exigente, a veces casi tirano con las personas con las que vive. Sin embargo, es también el gato más amoroso del mundo. Fiel a sus rutinas y hábitos, es el compañero perfecto.",
    imageKitten: "https://img.freepik.com/fotos-premium/gato-comun-europeo-naranja-mirando-adelante-descansando-retrato-animal_470418-1079.jpg"
}

const kittenData_2= {
    nameKitten: "Frida",
    raceKitten: "(Europeo Común)",
    descripKitten: "Es una gata muy cariñosa pero recelosa de personas desconocidas y precavida. Le encanta comer y el aire libre, es cariñosa pero tiene un caracter fuerte que impide que otros animales puedan aprovecharse de ella o que sus humanas no respeten sus exigencias ya que para ella, son muy pocas para que se cumplan a <i>rajatabla</i>",
    imageKitten: "https://www.qanimals.com/wp-content/uploads/2024/10/pexels-river-augustin-1370012990-28934371.jpg"
}

const kittenData_3= {
    nameKitten: "Yoko",
    raceKitten: "(Bombay)",
    descripKitten: "Es una gata elegante pero fuerte; tiene una naturaleza curiosa, activa y muy afectuosa. Le gusta pasar tiempo con sus dueños y es muy sociable con las personas. Tan extrovertida como un perro, el gato de raza Bombay, conocido por su pelaje negro intenso, tiene el pelo corto y liso.",
    imageKitten: "https://nfnatcane.es/blog/wp-content/uploads/2020/02/gato-Bombay-jugando.jpg"
}
const kittenData_4= {
    nameKitten: "Trufa",
    raceKitten: "(Tricolor)",
    descripKitten: "Esta gata se caracteriza por ser sigilosa y precavida, le cuesta tener confianza pero cuando lo hace, es cariñosa e incluso, un poco dependiente, busca el contacto con su persona de referencia y le encanta jugar.",
    imageKitten: "https://wamiz.es/media/cache/upload_original-size/article/images/WAMIZ%20MX/2021-AGOSTO/gata%20tricolor.jpg",
}
const kittenData_5= {
    nameKitten: "Pancho",
    raceKitten: "(Siamés)",
    descripKitten: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asia al menos hace 500 años, donde tuvo su origen muy posiblemente.",
    imageKitten: "https://dev.adalab.es/gato-siames.webp",
}
const kittenData_6= {
    nameKitten: "Wild",
    raceKitten: "(Chausie)",
    descripKitten: "Este gato enorme y de apariencia salvaje se considera un híbrido de gatos domésticos y gatos de la jungla. Son muy activos y juguetones. Es un animal muy cariñoso y apegado a su familia pero no es un gato tranquilo, sino todo lo contrario y eso, unido a su gran inteligencia y curiosidad, puede hacer que se escape de casa para conocer el mundo de su alrededor.",
    imageKitten: "https://www.tiendanimal.es/articulos/wp-content/uploads/2022/07/chausie.jpg"
};
const kittenData_7= {
    nameKitten: "Cielo",
    raceKitten: "(Maine Coon)",
    descripKitten: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
    imageKitten: "https://dev.adalab.es/maine-coon-cat.webp",
}

const kittenData_8= {
    nameKitten: "Benni",
    raceKitten: "(Toyger)",
    descripKitten: "El gato Toyger es una raza que busca parecerse lo más posible a un tigre en miniatura. Tiene un llamativo pelaje corto, le encanta perseguir a los miembros de la familia por la casa, acurrucarse a su lado y demandar atención. El Toyger repartirá su cariño por igual con todos los habitantes del hogar. Como curiosidad, a los gatitos Toyger les encanta el agua!, nadar y chapotear es de sus mayores aficiones.",
    imageKitten: "https://www.tiendanimal.es/articulos/wp-content/uploads/2022/02/Toyger-640x427.jpg"
    };

const kittenData_9= {
    nameKitten: "Dalí",
    raceKitten: "(Azul Ruso)",
    descripKitten: "Es un gato grande, de pelaje suave totalmente gris y ojos verdes. Son temperamentales, muy inteligentes y con mucho apego hacia sus personas referentes, son muy mimosos y moderadamente activos, pero es mejor tenerle entretenido para que ni la líe... Debido a que es un gato muy apegado, es conveniente que conviva con otro gato para que no se sienta solo",
    imageKitten: "https://www.zooplus.es/magazine/wp-content/uploads/2017/10/Gato-azul-ruso.webp"
    };


const catList = [kittenData_1, kittenData_2, kittenData_3, kittenData_4, kittenData_5, kittenData_6, kittenData_7, kittenData_8, kittenData_9];

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
