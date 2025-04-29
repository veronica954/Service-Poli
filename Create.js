
document.getElementById("formulario-cr").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita que se recargue la página

   
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const response = await fetch("/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombres, apellidos })
    });

    if (!response.ok) {
        alert("Error al guardar el usuario. Inténtalo de nuevo.");
        return;
    }

    alert("Usuario guardado exitosamente!");
});
