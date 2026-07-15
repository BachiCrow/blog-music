/*==================================================
=            CALENDAR 1.0
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
    =            ELEMENTOS DEL DOM
    ==================================================*/

    const calendar = document.getElementById("calendar");


    /*==================================================
    =            VARIABLES DEL CALENDARIO
    ==================================================*/

    const today = new Date();

    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

const importantDates = {

    "2026-01-01":{
        color:"#4CAF50",
        title:"Año Nuevo"
    },

    "2026-02-14":{
        color:"#F06292",
        title:"San Valentín"
    },

    "2026-07-20":{
        color:"#4FC3F7",
        title:"Vacaciones"
    },

    "2026-12-25":{
        color:"#E53935",
        title:"Navidad"
    }

};
    /*==================================================
    =            NOMBRES DE MESES Y DÍAS
    ==================================================*/

    const months = [
        "Enero","Febrero","Marzo","Abril",
        "Mayo","Junio","Julio","Agosto",
        "Septiembre","Octubre","Noviembre","Diciembre"
    ];

    const weekDays = [
        "L","M","X","J","V","S","D"
    ];


    /*==================================================
    =            FUNCIÓN PRINCIPAL
    ==================================================*/

    function renderCalendar(){

const dateKey =
`${currentYear}-${String(currentMonth+1).padStart(2,"0")}-${String(dayNumber).padStart(2,"0")}`;
if(importantDates[dateKey]){
    day.classList.add("important");
}
        
        calendar.innerHTML = "";

        createHeader();

        createWeekdays();

        createGrid();

    }

    /*==================================================
    =            GENERAR ENCABEZADO
    ==================================================*/

function createHeader(){

    const header = document.createElement("div");

    header.className = "cal-header";


    const prevBtn = document.createElement("button");

    prevBtn.className = "cal-nav-btn";

    prevBtn.textContent = "◀";

    prevBtn.addEventListener("click", previousMonth);

    const title = document.createElement("h2");

    title.className = "cal-title";

    title.textContent = `${months[currentMonth]} ${currentYear}`;


    const nextBtn = document.createElement("button");

    nextBtn.className = "cal-nav-btn";

    nextBtn.textContent = "▶";

    nextBtn.addEventListener("click", nextMonth);

    header.appendChild(prevBtn);

    header.appendChild(title);

    header.appendChild(nextBtn);

    calendar.appendChild(header);

}


    /*==================================================
    =            GENERAR DÍAS DE LA SEMANA
    ==================================================*/

    function createWeekdays(){

        const week = document.createElement("div");

        week.className = "cal-weekdays";

        weekDays.forEach(day =>{

            const cell = document.createElement("div");

            cell.className = "cal-weekday";

            cell.textContent = day;

            week.appendChild(cell);

        });

        calendar.appendChild(week);

    }


    /*==================================================
    =            GENERAR CUADRÍCULA
    ==================================================*/

    function createGrid(){

        const grid = document.createElement("div");

        grid.className = "cal-grid";

        const firstDay = new Date(currentYear, currentMonth, 1);

        let start = firstDay.getDay();

        start = (start + 6) % 7;

        const daysInMonth = new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();

        for(let i = 0; i < start; i++){

            const empty = document.createElement("div");

            grid.appendChild(empty);

        }

        for(let day = 1; day <= daysInMonth; day++){

            const cell = document.createElement("div");

            cell.className = "cal-day";

            cell.textContent = day;

            if(

                day === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()

            ){

                cell.classList.add("cal-today");

            }

            grid.appendChild(cell);

        }

        calendar.appendChild(grid);

    }
    
/*==================================================
=            NAVEGACIÓN ENTRE MESES
==================================================*/
function previousMonth(){

    animateCalendar("previous", ()=>{

        currentMonth--;

        if(currentMonth < 0){

            currentMonth = 11;
            currentYear--;

        }

        renderCalendar();

    });

}
    
function nextMonth(){

    animateCalendar("next", ()=>{

        currentMonth++;

        if(currentMonth > 11){

            currentMonth = 0;
            currentYear++;

        }

        renderCalendar();

    });

}
    
/*==================================================
=            ANIMATION
==================================================*/
function animateCalendar(direction, callback){

    const grid = document.querySelector(".cal-grid");

    const exitClass = direction === "next"
        ? "slide-left"
        : "slide-right";

    const enterClass = direction === "next"
        ? "from-right"
        : "from-left";

    grid.classList.add(exitClass);

    setTimeout(()=>{

        callback();

        grid.classList.remove(exitClass);

        grid.classList.add(enterClass);

        requestAnimationFrame(()=>{

            requestAnimationFrame(()=>{

                grid.classList.remove(enterClass);

            });

        });

    },250);

}
    
/*==================================================
=            EVENTOS
==================================================*/

    renderCalendar();

});
