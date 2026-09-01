/* =====================================================
   FRASES DEL DÍA
===================================================== */
const quotes = [

    {
        text: "KATAPLUM",
        author: "Tatatito"
    },

    {
        text: "Sera mejor que todos nos aceptemos, porque todos estamos más o menos",
        author: "Charales"
    },

    {
        text: "LLegaste justo Peter",
        author: "¿Para soplar la vela?"
    },
   {
        text: "THE END OF mi juventud",
        author: "Ya me truena(n) la(s) rodilla(s)"
    },
   {
        text: "No quiero ser una milanesa",
        author: "tssszzlkdppss"
    }
    
];


/* =====================================================
   CONFIGURACIÓN
===================================================== */

const SETTINGS = {

    typingSpeed: 45,
    authorDelay: 500

};


/* =====================================================
   ELEMENTOS DEL GADGET
===================================================== */

const quoteText = document.getElementById("dailyQuote");
const quoteAuthor = document.getElementById("dailyAuthor");
const quoteDay = document.getElementById("quoteDay");

/* =====================================================
   SELECCIONAR FRASE
===================================================== */

function getRandomQuote() {

    const randomIndex =
        Math.floor(Math.random() * quotes.length);

    return quotes[randomIndex];

}


/* =====================================================
   ANIMACIÓN DE ESCRITURA
===================================================== */

function typeText(text, element, speed) {

    return new Promise(resolve => {

        let index = 0;

        element.textContent = "";

        function type() {

            if (index < text.length) {

                element.textContent += text.charAt(index);

                index++;

                setTimeout(type, speed);

            } else {

                resolve();

            }

        }

        type();

    });

}


/* =====================================================
   MOSTRAR FRASE
===================================================== */

async function showQuote() {

    const quote = getRandomQuote();

    quoteText.textContent = "";
    quoteAuthor.textContent = "";

    await typeText(
        quote.text,
        quoteText,
        SETTINGS.typingSpeed
    );


    setTimeout(() => {

        quoteAuthor.textContent =
            "— " + quote.author;

    }, SETTINGS.authorDelay);

}


/* =====================================================
   INICIAR
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (!quoteText || !quoteAuthor) {
        console.error("No se encontraron los elementos del gadget.");
        return;
    }

    // Mostrar la fecha en la barra inferior.
    if (quoteDay) {
        const today = new Date();

        quoteDay.textContent = today.toLocaleDateString("es-AR", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    showQuote();

});
