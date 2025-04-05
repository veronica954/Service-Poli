document.addEventListener("DOMContentLoaded", function () {
    const buscador = document.getElementById("buscador");
    const contenido = document.getElementById("contenido");
    const parrafos = contenido.getElementsByTagName("p");
  
    // Guardar el texto original en un atributo personalizado
    for (let p of parrafos) {
      p.dataset.original = p.innerText;
    }
  
    buscador.addEventListener("input", function () {
      const texto = buscador.value.toLowerCase();
  
      for (let p of parrafos) {
        const originalText = p.dataset.original;
        const lowerText = originalText.toLowerCase();
  
        if (texto !== "" && lowerText.includes(texto)) {
          const regex = new RegExp(`(${texto})`, "gi");
          const nuevoHTML = originalText.replace(regex, `<mark style="background-color: #d0ebff;">$1</mark>`);
          p.innerHTML = nuevoHTML;
        } else {
          p.innerHTML = originalText;
        }
      }
    });
  });
  