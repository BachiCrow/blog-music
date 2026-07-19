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

    flightAreas:[

        {

            top:40,
            bottom:80,

            left:70,
            right:100

        },

        {

            top:80,
            bottom:180,

            left:50,
            right:120

        },

        {

            top:180,
            bottom:250,

            left:60,
            right:110

        }

    ]

};

function isInsideJar(x, y){

    // No permitir entrar en la tapa
    if(y < 48){
        return false;
    }

    // Cuello
    if(y < 78){
        return x > 67 && x < 103;
    }

    // Parte superior del cuerpo
    if(y < 120){
        return x > 48 && x < 122;
    }

    // Cuerpo central
    if(y < 225){
        return x > 35 && x < 135;
    }

    // Base redondeada
    if(y < 270){
        return x > 42 && x < 128;
    }

    return false;

}

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

    let x;
    let y;

    do{

        x = Math.random() * 170;
        y = Math.random() * 286;

    }while(!isInsideJar(x, y));

    this.targetX = x;
    this.targetY = y;

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

const layer = document.getElementById("fireflies-layer");

const firefly = new Firefly(layer);

animate();
