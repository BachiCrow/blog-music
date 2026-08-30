const SETTINGS = {

    // Emojis que van a caer.
    emojis:["🌙","🍃​","⭐​","🍉​​​"],

    amount:50,

    minSize:18,
    maxSize:34,

    minDuration:8,
    maxDuration:16,

    opacityMin:0.20,
    opacityMax:0.65,

    driftMin:-40,
    driftMax:40,

    delayMax:10

};

/* ===================================================== */

const container = document.createElement("div");
container.id = "emoji-rain-container";
document.body.appendChild(container);

function random(min,max){
    return Math.random() * (max-min) + min;
}

function randomEmoji(){
    return SETTINGS.emojis[
        Math.floor(Math.random()*SETTINGS.emojis.length)
    ];
}

function createEmoji(){

    const emoji = document.createElement("span");
    emoji.className = "emoji-drop";

    emoji.textContent = randomEmoji();

    emoji.style.left = random(0,100) + "vw";

    emoji.style.fontSize =
        random(SETTINGS.minSize,SETTINGS.maxSize) + "px";

const finalOpacity = Math.min(
    SETTINGS.opacityMax,
    Math.max(
        SETTINGS.opacityMin,
        random(SETTINGS.opacityMin, SETTINGS.opacityMax) + opacityBoost
    )
);

emoji.style.animationDuration =
    random(SETTINGS.minDuration, SETTINGS.maxDuration) + durationBoost + "s";

emoji.style.setProperty("--emoji-opacity", finalOpacity);
emoji.style.setProperty("--emoji-blur", blur + "px");
emoji.style.setProperty("--emoji-scale", scale);
emoji.style.setProperty("--emoji-glow", glow);

    emoji.style.animationDelay =
        random(0,SETTINGS.delayMax) + "s";

    emoji.style.setProperty(
        "--drift",
        random(SETTINGS.driftMin,SETTINGS.driftMax) + "px"
    );


    emoji.addEventListener("animationend",()=>{
        emoji.remove();
        createEmoji();
    });

    container.appendChild(emoji);
}

/* =============================================
   PROFUNDIDAD DEL EMOJI
============================================= */

const depth = Math.random();

let blur;
let scale;
let glow;
let opacityBoost;
let durationBoost;

if(depth < 0.33){

    // Fondo
    blur = random(1.5,2.8);
    scale = random(0.65,0.85);
    glow = 1;
    opacityBoost = -0.15;
    durationBoost = 3;

}else if(depth < 0.66){

    // Capa media
    blur = random(0.6,1.2);
    scale = random(0.85,1.05);
    glow = 2;
    opacityBoost = 0;
    durationBoost = 1;

}else{

    // Primer plano
    blur = 0;
    scale = random(1.05,1.35);
    glow = 5;
    opacityBoost = 0.12;
    durationBoost = -1;

}

/* =====================================================
   CREAR LLUVIA
===================================================== */

for(let i=0;i<SETTINGS.amount;i++){
    createEmoji();
}
