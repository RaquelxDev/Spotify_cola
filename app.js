const { ColaPrioridad } = require('./cola');
const { obtenerTopCanciones } = require('./topCanciones');

const cola = new ColaPrioridad(); // Instancia de la cola

// Evento para cargar las canciones en la interfaz
document.getElementById("cargar-canciones").addEventListener("click", async () => {
    const canciones = await obtenerTopCanciones(); // Obtenemos canciones de Spotify

    canciones.forEach(cancion => {
        const prioridad = Math.floor(Math.random() * 5) + 1;
        cola.enqueue(cancion, prioridad);
    });

    mostrarCola(); // Actualizamos la lista en pantalla
});

// Evento para "reproducir" la siguiente canción de la lista
document.getElementById("reproducir-siguiente").addEventListener("click", () => {
    const siguiente = cola.dequeue();
    if (siguiente) {
        alert(`🎵 Reproduciendo: ${siguiente.cancion.nombre} - ${siguiente.cancion.artista}`);
        mostrarCola();
    } else {
        alert("✅ No hay más canciones en la cola.");
    }
});

// Función para mostrar la lista de canciones en la página
function mostrarCola() {
    const lista = document.getElementById("lista-canciones");
    lista.innerHTML = cola.mostrar().map(item => `<li>${item}</li>`).join("");
}
