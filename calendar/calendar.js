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

    calendar.innerHTML = "";

    createHeader();

    createWeekdays();

    createGrid();

}

        /*==================================================
        =            GENERAR ENCABEZADO
        ==================================================*/
function createWeekdays(){

    const week = document.createElement("div");

    week.className = "cal-weekdays";

    weekDays.forEach(day =>{

        const cell = document.createElement("div");

        cell.textContent = day;

        cell.className = "cal-weekday";

        week.appendChild(cell);

    });

    calendar.appendChild(week);

}
    
function createHeader(){

    const title = document.createElement("h2");

    title.textContent = `${months[currentMonth]} ${currentYear}`;

    title.className = "cal-title";

    calendar.appendChild(title);

}
        const title = document.createElement("h2");

        title.textContent = `${months[currentMonth]} ${currentYear}`;

        title.className = "cal-title";

        calendar.appendChild(title);


        /*==================================================
        =            GENERAR DÍAS DE LA SEMANA
        ==================================================*/
function createGrid(){
        const week = document.createElement("div");

        week.className = "cal-weekdays";

        weekDays.forEach(day =>{

            const cell = document.createElement("div");

            cell.textContent = day;

            cell.className = "cal-weekday";

            week.appendChild(cell);

        });

        calendar.appendChild(week);
}

        /*==================================================
        =            GENERAR CUADRÍCULA
        ==================================================*/

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
=            NOMBRES DE MESES Y DÍAS
==================================================*/



/*==================================================
=            FUNCIÓN PRINCIPAL
==================================================*/



/*==================================================
=            GENERAR ENCABEZADO
==================================================*/



/*==================================================
=            GENERAR DÍAS DE LA SEMANA
==================================================*/



/*==================================================
=            GENERAR CUADRÍCULA
==================================================*/



/*==================================================
=            EVENTOS
==================================================*/
    renderCalendar();

});
