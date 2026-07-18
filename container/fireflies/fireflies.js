/* =====================================================
   CONFIGURACIÓN
===================================================== */

const SETTINGS = {

    fireflies: 1,

    minSize: 5,
    maxSize: 10,

    minSpeed: 0.3,
    maxSpeed: 1.2,

    glow: true

};

const JAR = {

    flightArea: {

        left: 55,
        right: 145,
        top: 60,
        bottom: 250

    }

};


/* =====================================================
   CLASE FIREFLY
===================================================== */

class Firefly {

    constructor(container) {

        this.container = container;

        // Crear elemento
        this.element = document.createElement("div");
        this.element.className = "firefly";

        this.glow = document.createElement("div");
        this.glow.className = "firefly-glow";

        this.core = document.createElement("div");
        this.core.className = "firefly-core";

        this.element.appendChild(this.glow);
        this.element.appendChild(this.core);

        this.container.appendChild(this.element);

        // Posición inicial
        this.x = 100;
        this.y = 220;

        // Destino
        this.targetX = this.x;
        this.targetY = this.y;

        // Movimiento
        this.speed = 0.05;

        // Espera
        this.waiting = false;
        this.waitTime = 0;

        // Brillo
        this.glowPhase = Math.random() * Math.PI * 2;
        this.glowSpeed = 0.04 + Math.random() * 0.03;

        // Primer destino
        this.chooseTarget();

    }

    chooseTarget() {

        this.targetX =
            JAR.flightArea.left +
            Math.random() *
            (JAR.flightArea.right - JAR.flightArea.left);

        this.targetY =
            JAR.flightArea.top +
            Math.random() *
            (JAR.flightArea.bottom - JAR.flightArea.top);

    }

    move() {

        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;

        const distance = Math.hypot(

            this.targetX - this.x,
            this.targetY - this.y

        );

        if (distance < 3) {

            this.waiting = true;
            this.waitTime = 30 + Math.random() * 90;

        }

    }

    blink() {

        this.glowPhase += this.glowSpeed;

        const pulse = (Math.sin(this.glowPhase) + 1) / 2;

        const scale = 0.95 + pulse * 0.15;

        const glowSize = 10 + pulse * 12;

        this.element.style.transform =
            `translate(${this.x}px, ${this.y}px) scale(${scale})`;

        this.element.style.boxShadow =
            `0 0 6px #FFD84D,
             0 0 ${glowSize}px #FFD84D,
             0 0 ${glowSize * 2}px rgba(255,216,77,.8)`;

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
   ANIMACIÓN
===================================================== */

function animate() {

    firefly.update();

    requestAnimationFrame(animate);

}


/* =====================================================
   INICIALIZACIÓN
===================================================== */

const jar = document.getElementById("jar-container");

const firefly = new Firefly(jar);

animate();
