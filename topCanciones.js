const fetch = require('node-fetch');
const { obtenerTokenSpotify } = require('./spotify');

// Función para obtener las 10 canciones más escuchadas
async function obtenerTopCanciones() {
    const token = await obtenerTokenSpotify(); // Obtenemos el token de Spotify

    const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data.items.map(item => ({
        nombre: item.name,
        artista: item.artists.map(artist => artist.name).join(', '),
        url: item.external_urls.spotify
    }));
}

module.exports = { obtenerTopCanciones };
