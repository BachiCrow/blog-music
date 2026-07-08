const canciones=[

{
title:"Jester Playground",
artist:"Robert Austin Music"
audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/jester-creepy-circus-music.mp3",
cover:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-jester.png"
},

{
title:"Ballora's Music Box",
artist:"Scott Cawthon"
audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/fnafsl-ballora-music-box.mp3",
cover:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-ballora.png"
},

{
title:"Mice Circus - Coraline",
artist:"LAIKA Studios"
audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/mice-circus.mp3",
cover:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-mice-circus.png"
},

{
title:"Steampianist Thing Feat",
artist:"flvtter - topic"
audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/steampianist-thing-feat.mp3",
cover:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-steampianist.png"
},

{
title:"3 Koopa Kingz",
artist:"aNTOJE"
audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/antoje-3-koopa-kingz.mp3",
cover:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-antoje.png"
}

];

let indice=0;

const audio=document.getElementById("audio");
const cover=document.getElementById("cover");
const title=document.getElementById("song-title");
const prevBtn=document.getElementById("prev-song");
const nextBtn=document.getElementById("next-song");

function cargarCancion(){

audio.src=canciones[indice].audio;
cover.src=canciones[indice].portada;
title.textContent=canciones[indice].titulo;

}

audio.addEventListener("ended",()=>{

indice++;

if(indice>=canciones.length){

indice=0;

}

cargarCancion();

audio.play();

});
prevBtn.addEventListener("click",()=>{

    indice--;

    if(indice<0){

        indice=canciones.length-1;

    }

    cargarCancion();

    audio.play();

});

nextBtn.addEventListener("click",()=>{

    indice++;

    if(indice>=canciones.length){

        indice=0;

    }

    cargarCancion();

    audio.play();

});
cargarCancion();
