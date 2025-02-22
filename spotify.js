require('dotenv').config(); // Cargar variables de entorno
const fetch = require('node-fetch');

// Función para obtener un token de acceso de Spotify
async function obtenerTokenSpotify() {
    const authString = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${authString}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
}

module.exports = { obtenerTokenSpotify };
