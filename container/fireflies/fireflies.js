console.log("Firefly Widget cargado correctamente.");

const jar = document.getElementById("jar-container");

console.log("Jar encontrada:", jar);

if (jar) {

    const firefly = document.createElement("div");
    firefly.className = "firefly";
    jar.appendChild(firefly);

    let x = 100;
    let y = 230;

    function animate() {

        x += (Math.random() - 0.5) * 3;
        y += (Math.random() - 0.5) * 3;

firefly.style.transform = `translate(${x}px, ${y}px)`;

        console.log(x, y);

        requestAnimationFrame(animate);
    }

    animate();
}
