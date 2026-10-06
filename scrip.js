function filtrar(criterio, elementoBtn) {
    const botones = document.querySelectorAll('.btn-filtro');
    botones.forEach(btn => btn.classList.remove('active'));
    if (elementoBtn) {
        elementoBtn.classList.add('active');
    }

    const filas = document.querySelectorAll("#cuerpo-tabla tr");

    filas.forEach(fila => {
        const calificacion = parseInt(fila.children[1].textContent.trim(), 10);

        if (criterio === "todos") {
            fila.style.display = "";
        } else if (criterio === "aprobados") {
            fila.style.display = (calificacion >= 70) ? "" : "none";
        } else if (criterio === "reprobados") {
            fila.style.display = (calificacion < 70) ? "" : "none";
        }
    });
}