const playlist = [

    {
        title: "Jester Playground",
        artist: "Robert Austin Music",
        audio: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/jester-creepy-circus-music.mp3",
        cover: "https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-jester.png"
    },

    {
        title: "Run Rabbit",
        artist: "Mollie Elizabeth",
        audio:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/music/mollie-elizabeth-run-rabbit.mp3",
        cover:"https://raw.githubusercontent.com/BachiCrow/blog-music/main/covers/1-runrabbit.png"
    },

    {
        title: "Ballora's Music Box",
        artist: "FNAF Sister Location",
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
        title: "Steampianist Thing Feat",
        artist: "flvtter - tema",
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


let currentSong = 0;


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
progressBar.addEventListener("click", (e) => {

    const width = progressBar.clientWidth;

    const clickX = e.offsetX;

    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;

});
playBtn.addEventListener("click", togglePlay);

prevBtn.addEventListener("click", previousSong);

nextBtn.addEventListener("click", nextSong);

audio.addEventListener("loadedmetadata", () => {

    duration.textContent = formatTime(audio.duration);

});

audio.addEventListener("timeupdate", () => {

    currentTime.textContent = formatTime(audio.currentTime);

    const percent = (audio.currentTime / audio.duration) * 100;

    progress.style.width = percent + "%";

});
volume.addEventListener("input", () => {

    audio.volume = volume.value;

});

loadSong(currentSong);

updatePlayIcon();
