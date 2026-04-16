// Selecciona el elemento con la clase "Bars" (icono del menú)
Bars = document.querySelector(".Bars");

// Asigna un evento cuando se haga clic sobre "Bars"
Bars.onclick = function() {

    // Selecciona el elemento con la clase "NavBar" (menú de navegación)
    NavBar = document.querySelector(".NavBar");

    // Agrega o quita la clase "active" al menú
    // Si no la tiene, la agrega
    // Si ya la tiene, la elimina
    NavBar.classList.toggle("active");
}