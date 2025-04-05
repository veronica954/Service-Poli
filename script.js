document.addEventListener("DOMContentLoaded", function () {
    const buscador = document.getElementById("buscador");
    const contenido = document.getElementById("contenido");
    const parrafos = contenido.getElementsByTagName("p");
  
    buscador.addEventListener("input", function () {
      const texto = buscador.value.toLowerCase();
  
      for (let p of parrafos) {
        const originalText = p.textContent;
        const lowerText = originalText.toLowerCase();
  
        if (texto !== "" && lowerText.includes(texto)) {
          // Crear una nueva versión del texto con <mark> alrededor de la coincidencia
          const regex = new RegExp(`(${texto})`, "gi");
          const nuevoHTML = originalText.replace(regex, `<mark>$1</mark>`);
          p.innerHTML = nuevoHTML;
        } else {
          // Si no hay texto, restaurar el original
          p.innerHTML = originalText;
        }
      }
    });
  });
  