/* =====================================================
   FRASES DEL DÍA
===================================================== */

const quotes = [

    {
        text: "Cree que puedes y ya habrás recorrido la mitad del camino.",
        author: "Theodore Roosevelt"
    },

    {
        text: "Sé tú mismo. Todos los demás ya están ocupados.",
        author: "Oscar Wilde"
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

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");


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

    showQuote();

});
