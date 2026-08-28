/* =====================================================
   CALENDARIO LUNAR 1.0
   Proyecto Blog Nocturno ✨
===================================================== */

const MOON_CYCLE = 29.530588853;

/* Luna nueva conocida
   21 enero 2023 - 20:53 UTC */
const KNOWN_NEW_MOON = new Date("2023-01-21T20:53:00Z");

/* URL BASE DE TUS SVG EN GITHUB */
const SVG_PATH =
"https://TU-USUARIO.github.io/container/moon/assets/";

/* =====================================================
   FASES LUNARES
===================================================== */

const PHASES = [

    {
        name:"Luna Nueva",
        file:"Luna-Nueva.svg",
        limit:1.84566
    },

    {
        name:"Luna Creciente",
        file:"Creciente.svg",
        limit:5.53699
    },

    {
        name:"Cuarto Creciente",
        file:"Cuarto-creciente.svg",
        limit:9.22831
    },

    {
        name:"Gibosa Creciente",
        file:"Gibosa-Creciente.svg",
        limit:12.91963
    },

    {
        name:"Luna Llena",
        file:"Luna-Llena.svg",
        limit:16.61096
    },

    {
        name:"Gibosa Menguante",
        file:"Gibosa-Menguante.svg",
        limit:20.30228
    },

    {
        name:"Cuarto Menguante",
        file:"Cuarto-Menguante.svg",
        limit:23.99361
    },

    {
        name:"Luna Menguante",
        file:"Menguante.svg",
        limit:27.68493
    },

    {
        name:"Luna Nueva",
        file:"Luna-Nueva.svg",
        limit:29.53059
    }

];

/* =====================================================
   CALCULAR EDAD LUNAR
===================================================== */

function getMoonAge(date){

    const diff = date - KNOWN_NEW_MOON;

    const days = diff / (1000 * 60 * 60 * 24);

    let age = days % MOON_CYCLE;

    if(age < 0){
        age += MOON_CYCLE;
    }

    return age;

}

/* =====================================================
   BUSCAR FASE SEGÚN LA EDAD
===================================================== */

function getMoonPhase(age){

    return PHASES.find(phase => age < phase.limit);

}

/* =====================================================
   FORMATEAR FECHA EN ESPAÑOL
===================================================== */

function formatDate(date){

    return date.toLocaleDateString("es-AR",{

        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"

    });

}

/* =====================================================
   ACTUALIZAR GADGET
===================================================== */

function updateMoonWidget(){

    const today = new Date();

    const age = getMoonAge(today);

    const phase = getMoonPhase(age);

    document.getElementById("moon-image").src =
        SVG_PATH + phase.file;

    document.getElementById("moon-image").alt = phase.name;

    document.getElementById("moon-phase").textContent = phase.name;

    document.getElementById("moon-date").textContent = formatDate(today);

}

updateMoonWidget();
