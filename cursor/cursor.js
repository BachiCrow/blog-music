/*======================================
        CURSOR PERSONALIZADO
======================================*/





/*======================================
        PARTÍCULAS
======================================*/
// Partículas disponibles
const particles = [
    "⭐",
    "✨",
    "🌟"
];

// Configuración
const PARTICLE_COUNT = 10;
const MIN_DISTANCE = 25;
const MAX_DISTANCE = 70;
const MIN_SIZE = 12;
const MAX_SIZE = 24;

// Evento principal
document.addEventListener("pointerdown", createParticleBurst);

// Crear explosión
function createParticleBurst(event){

    for(let i = 0; i < PARTICLE_COUNT; i++){

        createParticle(event.clientX, event.clientY);

    }

}

// Crear una partícula
function createParticle(x, y){

    const particle = document.createElement("div");

    particle.className = "click-star";

    // Símbolo aleatorio
    particle.textContent =
        particles[Math.floor(Math.random() * particles.length)];

    // Posición
    particle.style.left = x + "px";
    particle.style.top = y + "px";

    // Tamaño aleatorio
    const size =
        MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);

    particle.style.fontSize = size + "px";

    // Dirección aleatoria
    const angle = Math.random() * Math.PI * 2;

    const distance =
        MIN_DISTANCE +
        Math.random() * (MAX_DISTANCE - MIN_DISTANCE);

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    particle.style.setProperty("--x", moveX + "px");
    particle.style.setProperty("--y", moveY + "px");

    // Rotación aleatoria
    particle.style.setProperty(
        "--rotation",
        (Math.random() * 720 - 360) + "deg"
    );

    document.body.appendChild(particle);

    particle.addEventListener("animationend", () => {

        particle.remove();

    });

}

}
