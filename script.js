document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll(".section");

    // Oculta todas las secciones menos la primera
    sections.forEach(section => section.classList.remove("active"));
    document.querySelector("#intro").classList.add("active");

    // Añade evento a cada enlace del menú
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evita la recarga de la página

            // Obtener la sección correspondiente del atributo data-section
            const sectionID = link.getAttribute("data-section");

            // Ocultar todas las secciones
            sections.forEach(section => section.classList.remove("active"));

            // Mostrar solo la sección seleccionada
            document.getElementById(sectionID).classList.add("active");

            // Resaltar la pestaña activa (opcional)
            links.forEach(link => link.classList.remove("highlighted"));
            link.classList.add("highlighted");
        });
    });
});
