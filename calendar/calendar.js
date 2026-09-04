/* ==============================================
   CALENDARIO XP v2.0 - ETAPA 2
============================================== */

const XP_MONTHS=[
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

const XP_WEEKDAYS=["L","M","X","J","V","S","D"];

const today=new Date();
let currentMonth=today.getMonth();
let currentYear=today.getFullYear();

const xpMonthLabel = document.getElementById("xpMonthYear");
const xpGrid = document.getElementById("xpCalendarGrid");
const xpPrevBtn = document.getElementById("xpPrevMonth");
const xpNextBtn = document.getElementById("xpNextMonth");

function renderCalendar(month,year){

  xpGrid.innerHTML="";

  xpMonthLabel.textContent=`${XP_MONTHS[month]} ${year}`;

  XP_WEEKDAYS.forEach(day=>{

    const weekday=document.createElement("div");
    weekday.className="xp-cal-weekday";
    weekday.textContent=day;

    xpGrid.appendChild(weekday);

  });

  const firstDay=(new Date(year,month,1).getDay()+6)%7;
  const daysInMonth=new Date(year,month+1,0).getDate();
  const daysPrevMonth=new Date(year,month,0).getDate();

  for(let i=firstDay-1;i>=0;i--){

    const day=document.createElement("div");
    day.className="xp-cal-day other-month";
    day.textContent=daysPrevMonth-i;

    xpGrid.appendChild(day);

  }

  for(let dayNum=1;dayNum<=daysInMonth;dayNum++){

    const day=document.createElement("div");
    day.className="xp-cal-day";
    day.textContent=dayNum;

    xpGrid.appendChild(day);

  }

  const totalCells=grid.children.length;
  const remaining=42-(totalCells-7);

  for(let i=1;i<=remaining;i++){

    const day=document.createElement("div");
    day.className="xp-cal-day other-month";
    day.textContent=i;

    xpGrid.appendChild(day);

  }

}

xpPrevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

xpNextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});
