// Definimos una clase para manejar la Cola de Prioridad
class ColaPrioridad {
    constructor() {
        this.elementos = []; // Lista donde se almacenarán las canciones
    }

    // Método para agregar una canción con prioridad
    enqueue(cancion, prioridad) {
        this.elementos.push({ cancion, prioridad }); // Agregamos la canción y su prioridad
        // Ordenamos la cola en orden descendente por prioridad (mayor prioridad primero)
        this.elementos.sort((a, b) => b.prioridad - a.prioridad);
    }

    // Método para sacar la canción con mayor prioridad
    dequeue() {
        return this.elementos.shift(); // Extrae el primer elemento (mayor prioridad)
    }

    // Método para mostrar la lista de canciones en la cola
    mostrar() {
        return this.elementos.map((item, index) =>
            `${index + 1}. ${item.cancion.nombre} - ${item.cancion.artista} (Prioridad: ${item.prioridad})`
        );
    }
}

// Exportamos la clase para poder usarla en otros archivos
module.exports = { ColaPrioridad };
