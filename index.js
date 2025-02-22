// Importamos la clase ColaPrioridad y la función para obtener las canciones
const { ColaPrioridad } = require('./cola');
const { obtenerTopCanciones } = require('./topCanciones');

// Función principal que ejecuta la lógica del programa
async function main() {
    const cola = new ColaPrioridad(); // Creamos la instancia de la cola

    // Obtenemos las 10 canciones más escuchadas desde la API de Spotify
    const canciones = await obtenerTopCanciones();

    // Agregamos cada canción a la cola con una prioridad aleatoria entre 1 y 5
    canciones.forEach(cancion => {
        const prioridad = Math.floor(Math.random() * 5) + 1; // Generamos prioridad aleatoria
        cola.enqueue(cancion, prioridad); // Añadimos la canción con su prioridad
    });

    // Mostramos la lista de reproducción ordenada por prioridad
    console.log("🎶 Lista de reproducción con prioridad:");
    console.log(cola.mostrar().join("\n"));

    // Simulamos la reproducción de las canciones en orden de prioridad
    while (cola.elementos.length > 0) {
        const item = cola.dequeue(); // Extraemos la canción con mayor prioridad
        console.log(`▶️ Reproduciendo: ${item.cancion.nombre} - ${item.cancion.artista} (Prioridad: ${item.prioridad})`);
        console.log(`🎧 Escúchala aquí: ${item.cancion.url}\n`);
    }




    // Mensaje cuando se terminan las canciones
    console.log("✅ ¡Fin de la lista!");
}

// Ejecutamos la función principal
main();
