//console.log(document.title);

//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
let titulo1 = document.getElementById("gen-1");
titulo1.innerHTML="Generasión 1 Pokimon";

//Cambia el color de fondo de la primera generación de Pokimon.
let gen1 = document.getElementsByClassName("infocard");
for (let i = 0; i< 151; i++){
    gen1[i].style.backgroundColor = "yellow";
}

//OPCION B Cambia el color de fondo de la primera generación de Pokimon.
/*let gen1div = document.getElementsByClassName("infocard-list infocard-list-pkmn-lg");
gen1div[0].style.backgroundColor = "yellow";*/


//Imprime por consola la URL de la página.
const urlWebPokimon = window.location.href;
console.log(urlWebPokimon);

//Imprime por consola el dominio de la página.
const domainlWebPokimon = window.location.host;
console.log(domainlWebPokimon);

//Imprime todos los nodos de imagen.
const imgNodes = document.querySelectorAll("img");
console.log(imgNodes);

//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

for (let i =  0; i<imgNodes.length; i++){
    imgNodes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
};

