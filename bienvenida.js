// --- Mostrar u ocultar los submenús al hacer clic en cada título ---
const titulos = document.querySelectorAll('.menu-titulo');

titulos.forEach(titulo => {
    titulo.addEventListener('click', () => {
        const submenu = titulo.nextElementSibling;
        const expanded = submenu.style.display === 'block';

        // Mostrar u ocultar el submenú
        submenu.style.display = expanded ? 'none' : 'block';

        // Cambiar el ícono del botón ▾ ↔ ▸
        titulo.textContent = titulo.textContent.replace(expanded ? '▾' : '▸', expanded ? '▸' : '▾');
    });
});

// --- Botón hamburguesa para colapsar el menú lateral ---
const toggleMenu = document.querySelector('.toggle-menu-bv'); // Botón ☰
const aside = document.querySelector('.menu-lateral-bv'); // Menú lateral
const menuContent = document.getElementById('menuContent-bv'); // Contenido que se oculta

toggleMenu.addEventListener('click', () => {
    // Alternar clase de colapsado del aside (opcional, si quieres colapsar el ancho)
    aside.classList.toggle('collapsed');

    // Alternar visibilidad del contenido del menú
    menuContent.classList.toggle('hidden');

    // Cambiar ícono del botón hamburguesa (☰ ↔ ☰)
    if (menuContent.classList.contains('hidden')) {
        toggleMenu.textContent = '☰'; // Menú cerrado
    } else {
        toggleMenu.textContent = '☰'; // Menú abierto
    }
});


