'use strict'
console.log("ready dog-page");

const selectDog = document.querySelector(".select-dog_form");
const imgDog = document.querySelector(".dog-img");
const textDescrip = document.querySelector(".dog-description")


const breedDescription = 
    {"hound/ibizan":"Es un perro leal, valiente y extremadamente devoto de su persona preferida. Por naturaleza bastante distante, este perro puede mostrarse leal y convertirse en un muy buen compañero si se le da mucho afecto. Puede ser receloso con otros animales o desconocidos. Dotado de un excelente olfato, voluntario e inteligente, si olfatea una pista, puede tener tendencia a fugarse. También es destacable que son perros testarudos, muy sensibles y super comunicativos, hablan con su mirada y serán el mejor compañero de quien les dé el amor que se merecen", 
    "husky": "En su fuero interno, el husky siberiano es un verdadero perro de trabajo. No obstante, es un animal sociable, dulce y despierto. Eso sí, no será el que mejor lo hará en las competiciones de obediencia, ya que es independiente y desdeña el adiestramiento, demostrando su personalidad y capacidad de tomar sus propias decisiones. El husky siberiano es activo y ágil, por tanto, es conveniente que conviva con personas dispuestas a pasear con él y darle la actividad que necesita. La mayor parte del tiempo es tranquilo, ya que no ladra. Pero sí que aúlla, y eso es algo que a la mayoría de los huskies les encanta (no tanto a sus vecinos...😂)", 
    "greyhound/indian": "Estos perros son tranquilos y sociables en interiores y pueden mostrarse bastante vagos, incluso. Son perros sensibles que pueden ser mascotas ideales si tienen el dueño adecuado. Aunque son tranquilos por naturaleza, su instinto innato de caza sigue presente; su propietario debe estar dispuesto a asumir las responsabilidades que conlleva la raza. Son cariñosos con su familia, pero suelen ser distantes con los extraños. Suelen llevarse bien con los demás perros de la casa, pero los dueños de gatos deben extremar las precauciones",
    "labrador": "Juguetones y devotos, son conocidos por su temperamento abierto y entusiasta, que pronto llegarás a adorar, siempre y cuando puedas soportar la sobrecarga de afecto, claro. Además, son inteligentes. Con un poco de paciencia, el Labrador es una raza que se entrena bien. Solo recuerda mantener ese plato de comida lejos del borde de la mesa porque es, probablemente, el perro más glotón del mundo",
    "collie/border": "El border collie es un perro con una personalidad enérgica y entusiasta; siempre está listo para trabajar, es atento, vivaracho y despierto. Crea un vínculo muy estrecho con su persona de referencia y su familia, pero, a menos que se le pueda dedicar mucho tiempo y haga mucho ejercicio, no es muy adecuado para familias con niños muy pequeños, ya que su instinto natural es seguir a cualquier cosa que se mueva... incluidos tus hijos. Son decididos y valientes, pero si no se les mantiene ocupados cometerán travesuras, ya que su cerebro está siempre activo",
    "germanshepherd": "Famoso por ser un «perro de una sola persona», el pastor alemán establece un vínculo fuerte, afectuoso y estrecho con su cuidador, y querrá permanecer en su compañía todo el tiempo que sea posible. Su lealtad es innegable. Si es bien tratado y se le respeta, es un perro seguro de sí mismo, fiel, valiente, rápido y extremadamente inteligente al que le encanta aprender y el adiestramiento (siempre en positivo). Es un  gran guardián, pero no para quedarse aislado en el exterior, ya que también le encanta estar en familia", 
    "dalmatian": "Los dálmatas son extrovertidos y amistosos, pero si no se ejercitan lo suficiente, pueden volverse hiperactivos. Los dálmatas son fieles y entregados y siempre quieren complacer; les encanta la compañía y hacer payasadas. Sin embargo, su energía y resistencia puede ser un reto demasiado exigente para algunos dueños. Los dálmatas tardan, como mínimo, dos años en sentar la cabeza, posiblemente más",
    "dane/great": "El gran danés es un perro afectuoso, especialmente adecuado para una familia activa. Puede desarrollar una gran cercanía y lealtad hacia su familia, e incluso hacia las visitas frecuentes. Avisa a la familia con rapidez si algún desconocido se acerca a su territorio, ya que es un excelente perro guardián y, en ocasiones, puede ser territorial y no demasiado hospitalario con los intrusos caninos. Al tratarse de un perro tan grande, socializarlo desde cachorro cobra especial importancia",
    "malinois": "La malinois no es una raza para aquellos que quieren «un perro y ya»: es un compañero cariñoso y fiel que protegerá su hogar y su familia y que necesita un dueño con experiencia. Como sucede con todas las razas con tendencia protectora, no es aconsejable fomentar sus instintos protectores de joven, porque podría empezar a protegerte en situaciones inadecuadas. Sus instintos protectores naturales aparecerán si es necesario y cuando sea necesario. El temperamento del pastor belga, naturalmente vigilante y enérgico, se manifestará cuando sea necesario, sin necesidad de estimularlo",
    "pitbull": "Famoso por su lealtad a sus propietarios y carácter protector, el pitbull americano crea sólidos vínculos con su familia y es un excelente perro guardián. Tanto los cachorros pitbull como los ejemplares adultos suelen llevarse bien y ser cariñosos con los humanos y, si se les sociabiliza y adiestra adecuadamente, pueden ser compañeros dulces y educados",
    "maltese": "El perro de raza maltés es pequeño, dulce y glamuroso. Este perrito no es solo una cara bonita, a veces también enseña los dientes. Siempre atento a lo que ocurre a su alrededor, puede ser muy ladrador. Pese a ser un perro pequeño, es valiente y no se echará atrás si tiene que dar un gran salto",
    "shiba": "Los perros Shiba Inu son activos, sociables y despiertos; pueden ser «librepensadores» y tienen un acusado instinto cazador. Es fundamental una pronta sociabilización con niños/as, otros perros y ganado. Un rasgo característico de la raza es el «grito shiba», una vocalización muy aguda que emite cuando está emocionado o frustrado. Si está bien sociabilizado, el shiba es un perrito divertido y capaz de todo",
    "akita": "Los perros de raza akita son fuertes, tanto físicamente como de carácter, y no se recomiendan para dueños primerizos. Hace falta experiencia en el manejo, adiestramiento y socialización, tanto inicial como continua. No obstante, son muy fieles a su familia. Son valientes y buenos guardianes y no ladran demasiado. No hay que olvidar que tiene un fuerte instinto de caza.",
    "boxer": "Los bóxers se suelen comportar como cachorros durante toda su vida, por lo que dan bastante guerra. Activos, fuertes y leales, son grandes mascotas para toda la familia, tanto para adultos como para niños, pero pueden ser bulliciosos, por lo que no son recomendables en hogares con niños muy pequeños. Son valientes y seguros de sí mismos, no se enzarzan en peleas fácilmente, pero son más que capaces de defenderse si se ven obligados. Pueden ser muy destructivos si se les deja solos en casa durante periodos de tiempo prolongados",
    "doberman": "El dóberman puede ser un perro de familia encantador. Es fiel, cariñoso y se encargará de proteger el hogar. Tiende a ser perro de una sola persona y no tolerará las provocaciones, así que los niños deben aprender a comportarse debidamente con el perro. Si no puedes dedicarle tiempo o no tienes experiencia con perros, no es la raza más adecuada para ti.",

};


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