const playlist = [

    {
        title: "Jester Playground",
        artist: "Robert Austin Music",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/jester-creepy-circus-music.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-jester.png"
    },

    {
        title: "Ballora's Music Box",
        artist: "Scott Cawthon",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/fnafsl-ballora-music-box.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-ballora.png"
    },

    {
        title: "Mice Circus - Coraline",
        artist: "LAIKA Studios",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/mice-circus.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-mice-circus.png"
    },

    {
        title: "Thing",
        artist: "Steampianist",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/steampianist-thing-feat.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-steampianist.png"
    },

    {
        title: "3 Koopa Kingz",
        artist: "aNTOJE",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/antoje-3-koopa-kingz.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-antoje.png"
    }

];


const audio = document.getElementById("audio");

const cover = document.getElementById("cover");

const title = document.getElementById("song-title");

const artist = document.getElementById("song-artist");

const playBtn = document.getElementById("play-song");

const prevBtn = document.getElementById("prev-song");

const nextBtn = document.getElementById("next-song");

const playIcon = document.getElementById("play-icon");

const progressBar = document.getElementById("progress-bar");

const progress = document.getElementById("progress");

const currentTime = document.getElementById("current-time");

const duration = document.getElementById("duration");

const volume = document.getElementById("volume");


let currentSong = 0;


function loadSong(index){

    const song = playlist[index];

    title.textContent = song.title;

    artist.textContent = song.artist;

    cover.src = song.cover;

    audio.src = song.audio;

}
function playSong() {

    audio.play();

    updatePlayIcon();

}
function pauseSong() {

    audio.pause();

    updatePlayIcon();

}
function togglePlay() {

    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
        
}
function updatePlayIcon() {

    if (audio.paused) {

        playIcon.src = "https://bachicrow.github.io/blog-music/icons/play.svg";
        playIcon.alt = "Reproducir";

    } else {

        playIcon.src = "https://bachicrow.github.io/blog-music/icons/pausa.svg";
        playIcon.alt = "Pausar";

    }

}

playBtn.addEventListener("click", togglePlay);
audio.addEventListener("ended", () => {

    updatePlayIcon();

});
    
loadSong(currentSong);

updatePlayIcon();
