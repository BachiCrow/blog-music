const canciones=[

{

titulo:"Opening",

audio:"https://raw.githubusercontent.com/TUUSUARIO/TUREPOSITORIO/main/musica/opening.mp3",

portada:"https://raw.githubusercontent.com/TUUSUARIO/TUREPOSITORIO/main/portadas/opening.jpg"

},

{

titulo:"Ending",

audio:"https://raw.githubusercontent.com/TUUSUARIO/TUREPOSITORIO/main/musica/ending.mp3",

portada:"https://raw.githubusercontent.com/TUUSUARIO/TUREPOSITORIO/main/portadas/ending.jpg"

},

{

titulo:"Piano",

audio:"https://raw.githubusercontent.com/TUUSUARIO/TUREPOSITORIO/main/musica/piano.mp3",

portada:"https://raw.githubusercontent.com/TUUSUARIO/TUREPOSITORIO/main/portadas/piano.jpg"

}

];

let indice=0;

const audio=document.getElementById("audio");

const cover=document.getElementById("cover");

const title=document.getElementById("title");

function cargarCancion(){

audio.src=canciones[indice].audio;

cover.src=canciones[indice].portada;

title.innerHTML=canciones[indice].titulo;

}

audio.addEventListener("ended",()=>{

indice++;

if(indice>=canciones.length){

indice=0;

}

cargarCancion();

audio.play();

});

cargarCancion();
