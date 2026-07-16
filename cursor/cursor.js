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
const MAX_SIZE = 22;

// Crear partículas al hacer clic
document.addEventListener("pointerdown", createStarBurst);

function createStarBurst(event){

    for(let i = 0; i < PARTICLE_COUNT; i++){

        const particle = document.createElement("div");

        particle.className = "click-star";

        // Partícula aleatoria
        particle.textContent =
            particles[Math.floor(Math.random() * particles.length)];

        // Posición
        particle.style.left = event.clientX + "px";
        particle.style.top = event.clientY + "px";

        // Tamaño aleatorio
        const size =
            MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);

        particle.style.fontSize = size + "px";

        // Dirección
        const angle = Math.random() * Math.PI * 2;

        const distance =
            MIN_DISTANCE +
            Math.random() * (MAX_DISTANCE - MIN_DISTANCE);

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        particle.style.setProperty("--x", x + "px");
        particle.style.setProperty("--y", y + "px");

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
