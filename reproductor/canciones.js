console.log("El archivo canciones.js se cargó correctamente");

const canciones = [
{
titulo:"Prueba",
audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/mice-circus.mp3",
portada:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-mice-circus.png"
}
];

const audio=document.getElementById("audio");
const cover=document.getElementById("cover");
const title=document.getElementById("song-title");

title.textContent=canciones[0].titulo;
audio.src=canciones[0].audio;
cover.src=canciones[0].portada;
