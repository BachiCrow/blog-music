const playlist = [

    {
        title: "Jester Playground",
        artist: "Robert Austin Music",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/jester-creepy-circus-music.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-jester.png"
    },

    {
        title: "Browser History",
        artist: "Graham Kartna",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/browser-history.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/browser-history.gif"
    },

    {
        title: "Frutiger Aero",
        artist: "Lemons",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/lemons-frutiger-aero.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/lemons-frutiger-aero.gif"
    },

    {

        title: "Lost in the lullaby",
        artist: "Alyzea",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/lost-in-the-lullaby.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/acuario-roto.gif"
    },

    {
        title: "Mice Circus - Coraline",
        artist: "LAIKA Studios",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/mice-circus.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/carrusel.gif"
    },

    {
        title: "Photo Channel",
        artist: "SD card Photo List",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/photo-channel-sdcard-photolist.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/photo-channel.gif"
    },

    {

        title: "Lotus Water",
        artist: "Yumme2 Akki",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/yume2kki-lotus-waters.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/yume2kki-lotus-waters.gif"
    },

    {

        title: "Soundtrack Menu Music",
        artist: "Wii Party",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/wiiparty-soundtrack-menu-music.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/carpeta-arco.gif"
    },

    {

        title: "Aquatic Ambience",
        artist: "Scizzie",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/scizzie-aquatic-ambience.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/scizzie-aquatic-ambience.gif"
    }

];

const audio = document.getElementById("audio");

const cover = document.getElementById("cover");

const title = document.getElementById("song-title");

const artist = document.getElementById("song-artist");

console.log(title);
console.log(artist);

const playBtn = document.getElementById("play-song");

const prevBtn = document.getElementById("prev-song");

const nextBtn = document.getElementById("next-song");

const playIcon = document.getElementById("play-icon");

const progressBar = document.getElementById("progress-bar");

const progress = document.getElementById("progress");

const currentTime = document.getElementById("current-time");

const duration = document.getElementById("duration");

const volume = document.getElementById("volume");

const shuffleBtn = document.getElementById("shuffle-song");

// =====================
// VARIABLES
// =====================
let currentSong = 0;

let shuffleMode = false;

let isDragging = false;

// =====================
// FUNCIONES
// =====================
function loadSong(index){

    console.log("loadSong ejecutada");

    const song = playlist[index];

    console.log(song);

    title.textContent = song.title;
    
    console.log("Título después de asignarlo:", title.textContent);
    
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

}
function updatePlayIcon() {

    if (audio.paused) {

        playIcon.src = "https://bachicrow.github.io/blog-music/icons/play.svg";
        playIcon.alt = "Reproducir";

    } else {

        playIcon.src = "https://bachicrow.github.io/blog-music/icons/pause.svg";
        playIcon.alt = "Pausar";

    }

}
function nextSong() {

    currentSong++;

    if (currentSong >= playlist.length) {
        currentSong = 0;
    }

    loadSong(currentSong);

    playSong();

}
function previousSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong = playlist.length - 1;
    }

    loadSong(currentSong);

    playSong();

}
function formatTime(seconds){

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2,"0")}`;

}
// =====================
// EVENTOS DE BOTONES
// =====================
progressBar.addEventListener("click", (e) => {

    const width = progressBar.clientWidth;

    const clickX = e.offsetX;

    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;

});
shuffleBtn.addEventListener("click", () => {

    shuffleMode = !shuffleMode;

    shuffleBtn.classList.toggle("active", shuffleMode);

});

progressBar.addEventListener("mousedown", () => {
    isDragging = true;
});

document.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    const rect = progressBar.getBoundingClientRect();

    let offset = e.clientX - rect.left;

    if (offset < 0) offset = 0;
    if (offset > rect.width) offset = rect.width;

    const percent = offset / rect.width;

    progress.style.width = (percent * 100) + "%";
});

document.addEventListener("mouseup", (e) => {

    if (!isDragging) return;

    isDragging = false;

    const rect = progressBar.getBoundingClientRect();

    let offset = e.clientX - rect.left;

    if (offset < 0) offset = 0;
    if (offset > rect.width) offset = rect.width;

    const percent = offset / rect.width;

    audio.currentTime = percent * audio.duration;
});
// =====================
// EVENTOS DEL AUDIO
// =====================
audio.addEventListener("timeupdate", () => {

    currentTime.textContent = formatTime(audio.currentTime);

    const percent = (audio.currentTime / audio.duration) * 100;

    progress.style.width = percent + "%";

});

volume.addEventListener("input", () => {

    audio.volume = volume.value;

});

playBtn.addEventListener("click", togglePlay);

prevBtn.addEventListener("click", previousSong);

nextBtn.addEventListener("click", nextSong);

audio.addEventListener("loadedmetadata", () => {

    duration.textContent = formatTime(audio.duration);

});

audio.addEventListener("ended", () => {

    if (shuffleMode) {

        // Si solo hay una canción
        if (playlist.length === 1) {

            currentSong = 0;

        } else {

            let randomSong;

            do {

                randomSong = Math.floor(Math.random() * playlist.length);

            } while (randomSong === currentSong);

            currentSong = randomSong;

        }

    } else {

        currentSong++;

        if (currentSong >= playlist.length) {
            currentSong = 0;
        }

    }

    loadSong(currentSong);
    playSong();

});
// =====================
// INICIADORES
// =====================
loadSong(currentSong);

updatePlayIcon();
