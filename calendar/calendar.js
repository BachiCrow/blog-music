document.addEventListener("DOMContentLoaded", () => {

    const calendar = document.getElementById("calendar");

    const today = new Date();

    const month = today.getMonth();
    const year = today.getFullYear();

    const months = [
        "Enero","Febrero","Marzo","Abril",
        "Mayo","Junio","Julio","Agosto",
        "Septiembre","Octubre","Noviembre","Diciembre"
    ];

    const weekDays = [
        "L","M","X","J","V","S","D"
    ];

    function renderCalendar(){

        calendar.innerHTML = "";

        const title = document.createElement("h2");
        title.textContent = `${months[month]} ${year}`;
        title.className = "cal-title";

        calendar.appendChild(title);

        const week = document.createElement("div");
        week.className = "cal-weekdays";

        weekDays.forEach(day =>{

            const cell = document.createElement("div");
            cell.textContent = day;
            cell.className = "cal-weekday";

            week.appendChild(cell);

        });

        calendar.appendChild(week);

        const grid = document.createElement("div");
        grid.className = "cal-grid";

        const firstDay = new Date(year, month, 1);

        let start = firstDay.getDay();

        start = (start + 6) % 7;

        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for(let i=0;i<start;i++){

            const empty = document.createElement("span");
            grid.appendChild(empty);

        }

        for(let day=1;day<=daysInMonth;day++){

            const cell = document.createElement("span");

            cell.className = "cal-day";
            cell.textContent = day;

            if(
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()
            ){

                cell.classList.add("cal-today");

            }

            grid.appendChild(cell);

        }

        calendar.appendChild(grid);

    }

    renderCalendar();

});
