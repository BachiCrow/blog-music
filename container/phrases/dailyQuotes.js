
const QUOTES = [
    {
        text:"Cada día es una nueva oportunidad para comenzar algo maravilloso.",
        author:"Anónimo"
    },
    {
        text:"Las estrellas también necesitan la noche para poder brillar.",
        author:"Anónimo"
    },
    {
        text:"Las pequeñas cosas también construyen grandes sueños.",
        author:"Anónimo"
    },
    {
        text:"Haz espacio para la magia de los días tranquilos.",
        author:"Anónimo"
    },
    {
        text:"Todo gran proyecto comienza con un pequeño paso.",
        author:"Anónimo"
    },
    {
        text:"Descansar también es parte de avanzar.",
        author:"Anónimo"
    },
    {
        text:"Confía en el proceso, incluso cuando vaya lento.",
        author:"Anónimo"
    },
    {
        text:"Nunca dejes de sentir curiosidad por el mundo.",
        author:"Anónimo"
    },
    {
        text:"Los sueños crecen cuando los cuidas un poquito cada día.",
        author:"Anónimo"
    },
    {
        text:"Siempre hay una pequeña luz esperando ser encontrada.",
        author:"Anónimo"
    }
];

/* =====================================================
   FRASE DEL DÍA
===================================================== */

function showDailyQuote(){

    const today = new Date();

    // Día del año (0 - 365)
    const start = new Date(today.getFullYear(),0,0);

    const diff = today - start;

    const dayOfYear = Math.floor(diff / 86400000);

    // Elegir frase según el día
    const quote = QUOTES[dayOfYear % QUOTES.length];

    document.getElementById("dailyQuote").textContent =
        `"${quote.text}"`;

    document.getElementById("dailyAuthor").textContent =
        `— ${quote.author}`;

}

showDailyQuote();

