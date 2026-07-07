const canciones=[

{

titulo:"3 Koopa Kingz - aNTOJE",

audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/antoje-3-koopa-kingz.mp3",

portada:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-antoje.png"

},

{

titulo:"Ballora's Music Box",

audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/fnafsl-ballora-music-box.mp3",

portada:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-ballora.png"

},

{

titulo:"Mice Circus - Coraline",

audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/mice-circus.mp3",

portada:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-mice-circus.png"

},

{

titulo:"Steampianist Thing Feat",

audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/steampianist-thing-feat.mp3",

portada:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-steampianist.png"

},

{

titulo:"Jester Creepy Circus",

audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/jester-creepy-circus-music.mp3",

portada:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-jester.png"

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
