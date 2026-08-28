const SETTINGS = {

    // Emojis que van a caer.
    emojis:["🌙","🔆​","✨","💫​"],

    amount:18,

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

    emoji.style.animationDuration =
        random(SETTINGS.minDuration,SETTINGS.maxDuration) + "s";

    emoji.style.animationDelay =
        random(0,SETTINGS.delayMax) + "s";

    emoji.style.setProperty(
        "--emoji-opacity",
        random(SETTINGS.opacityMin,SETTINGS.opacityMax)
    );

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

/* =====================================================
   CREAR LLUVIA
===================================================== */

for(let i=0;i<SETTINGS.amount;i++){
    createEmoji();
}
