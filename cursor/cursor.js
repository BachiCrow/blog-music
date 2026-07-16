/*======================================
        CURSOR PERSONALIZADO
======================================*/





/*======================================
        PARTÍCULAS
======================================*/

document.addEventListener("pointerdown", createStarBurst);

function createStarBurst(event){

    const totalStars = 10;

    for(let i = 0; i < totalStars; i++){

        const star = document.createElement("div");

        star.className = "click-star";

        star.textContent = "⭐";

        star.style.left = event.clientX + "px";
        star.style.top = event.clientY + "px";

        const angle = Math.random() * Math.PI * 2;

        const distance = 25 + Math.random() * 45;

        star.style.setProperty(
            "--x",
            Math.cos(angle) * distance + "px"
        );

        star.style.setProperty(
            "--y",
            Math.sin(angle) * distance + "px"
        );

        document.body.appendChild(star);

        star.addEventListener("animationend", ()=>{

            star.remove();

        });

    }

}
