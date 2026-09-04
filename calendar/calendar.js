const xpCalMonths=[
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

const xpCalWeekdays=["L","M","X","J","V","S","D"];

const xpCalToday=new Date();

let xpCalCurrentMonth=xpCalToday.getMonth();
let xpCalCurrentYear=xpCalToday.getFullYear();

/* ======================================================
   INICIALIZACIÓN
====================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    const xpCalGrid=document.getElementById("xpCalendarGrid");
    const xpCalMonthLabel=document.getElementById("xpMonthYear");
    const xpCalPrevBtn=document.getElementById("xpPrevMonth");
    const xpCalNextBtn=document.getElementById("xpNextMonth");
    const xpCalStatus=document.querySelector(".xp-cal-statusbar");

    if(!xpCalGrid||!xpCalMonthLabel) return;

    /* =============================================== */

    function xpCalRender(month,year){

        xpCalGrid.innerHTML="";

        xpCalMonthLabel.textContent=
            `${xpCalMonths[month].toUpperCase()} ${year}`;

        const fragment=document.createDocumentFragment();

        /* ---------- Semana ---------- */

        xpCalWeekdays.forEach(letter=>{

            const cell=document.createElement("div");
            cell.className="xp-cal-weekday";
            cell.textContent=letter;

            fragment.appendChild(cell);

        });

        /* ---------- Primer día ---------- */

        const firstDay=(new Date(year,month,1).getDay()+6)%7;

        const daysThisMonth=new Date(year,month+1,0).getDate();
        const daysPrevMonth=new Date(year,month,0).getDate();

        /* ---------- Mes anterior ---------- */

        for(let i=firstDay-1;i>=0;i--){

            const cell=document.createElement("div");
            cell.className="xp-cal-day other-month";
            cell.textContent=daysPrevMonth-i;

            fragment.appendChild(cell);

        }

        /* ---------- Mes actual ---------- */

        for(let day=1;day<=daysThisMonth;day++){

            const cell=document.createElement("div");
            cell.className="xp-cal-day";
            cell.textContent=day;

            const isToday=
                day===xpCalToday.getDate() &&
                month===xpCalToday.getMonth() &&
                year===xpCalToday.getFullYear();

            if(isToday){
                cell.classList.add("today");
            }

            fragment.appendChild(cell);

        }

        /* ---------- Completar hasta 42 ---------- */

        const cellsCreated=firstDay+daysThisMonth;
        const remaining=42-cellsCreated;

        for(let i=1;i<=remaining;i++){

            const cell=document.createElement("div");
            cell.className="xp-cal-day other-month";
            cell.textContent=i;

            fragment.appendChild(cell);

        }

        xpCalGrid.appendChild(fragment);

        /* ---------- Barra inferior ---------- */

        const dateText=xpCalToday.toLocaleDateString("es-AR",{
            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"
        });

        if(xpCalStatus){
            xpCalStatus.textContent=`Hoy: ${dateText}`;
        }

    }

    /* =============================================== */
    /* NAVEGACIÓN */
    /* =============================================== */

    xpCalPrevBtn.addEventListener("click",()=>{

        xpCalCurrentMonth--;

        if(xpCalCurrentMonth<0){
            xpCalCurrentMonth=11;
            xpCalCurrentYear--;
        }

        xpCalRender(xpCalCurrentMonth,xpCalCurrentYear);

    });

    xpCalNextBtn.addEventListener("click",()=>{

        xpCalCurrentMonth++;

        if(xpCalCurrentMonth>11){
            xpCalCurrentMonth=0;
            xpCalCurrentYear++;
        }

        xpCalRender(xpCalCurrentMonth,xpCalCurrentYear);

    });

    /* =============================================== */

    xpCalRender(xpCalCurrentMonth,xpCalCurrentYear);

});

