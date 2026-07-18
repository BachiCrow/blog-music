/* =====================================================
   CONFIGURACIÓN
===================================================== */
const SETTINGS = {

    fireflies:1,

    minSize:5,
    maxSize:10,

    minSpeed:0.3,
    maxSpeed:1.2,

    glow:true

};

/* =====================================================
   CLASE FIREFLY
===================================================== */
class Firefly {

    constructor(container) {

        this.container = container;

        // Crear el elemento HTML
        this.element = document.createElement("div");
        this.element.className = "firefly";

        this.container.appendChild(this.element);

        // Posición inicial
        this.x = 100;
        this.y = 220;

        // Destino
        this.targetX = this.x;
        this.targetY = this.y;

        // Velocidad
        this.speed = 0.02;

       // Estado
        this.waiting = false;
        this.waitTime = 0;

       // Animación del brillo
        this.glowPhase = Math.random() * Math.PI * 2;
        this.glowSpeed = 0.04 + Math.random() * 0.03;

        // Elegir el primer destino
        this.chooseTarget();

    }

    chooseTarget() {

        this.targetX = 55 + Math.random() * 90;
        this.targetY = 60 + Math.random() * 190;

    }

    move() {

        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;

        this.element.style.transform =
            `translate(${this.x}px, ${this.y}px)`;

        const distance = Math.hypot(
            this.targetX - this.x,
            this.targetY - this.y
        );

        if (distance < 3) {

            this.waiting = true;

    // Espera entre 0.5 y 2 segundos
    this.waitTime = 30 + Math.random() * 90;

}
    }

   blink() {

    this.glowPhase += this.glowSpeed;

    const glow = 0.75 + Math.sin(this.glowPhase) * 0.25;

    this.element.style.opacity = glow;

}
   
update() {

    if (this.waiting) {

        this.waitTime--;

        if (this.waitTime <= 0) {

            this.waiting = false;
            this.chooseTarget();

        }

    } else {

        this.move();

    }

    this.blink();

}

}
/* =====================================================
   GESTOR DEL FRASCO
===================================================== */
class Jar{

    constructor(){}

    createFireflies(){}

    update(){}

}

/* =====================================================
   ANIMACIÓN
===================================================== */
function animate(){

    firefly.update();

    requestAnimationFrame(animate);

}

/* =====================================================
   INICIALIZACIÓN
===================================================== */
const jar = document.getElementById("jar-container");

const firefly = new Firefly(jar);

animate();
