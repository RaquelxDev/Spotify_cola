# Proyecto Spotify Cola 🎶

Este proyecto es una aplicación que simula una lista de reproducción basada en una **cola de prioridad**. La idea es obtener las 10 canciones “más escuchadas” (top tracks) de Spotify, asignarles una prioridad aleatoria y luego reproducirlas en orden de prioridad. 🚀

> **Nota Importante:**  
> El proyecto utiliza el **Client Credentials Flow** para obtener un token de Spotify. Sin embargo, el endpoint para obtener los top tracks (https://api.spotify.com/v1/me/top/tracks) requiere autorización de usuario (Authorization Code Flow) para acceder a información privada. Por lo tanto, si ejecutas el proyecto, es probable que veas un error, ya que el token obtenido no permite acceder a los "top tracks" reales del usuario. Este proyecto se creó con fines académicos y de demostración, y se recomienda implementar el flujo de autorización de usuario para una funcionalidad completa. 🔐

---

## Funcionamiento del Proyecto 📁

- **Manejo de la Cola de Prioridad:**  
  Se implementa una clase que gestiona una cola de prioridad para las canciones. Cada canción se agrega con un valor de prioridad (del 1 al 5) y la cola se ordena de manera que la canción con la mayor prioridad sea la primera en reproducirse. Esto permite simular una lista de reproducción ordenada según la importancia asignada a cada canción.

- **Obtención de Canciones de Spotify:**  
  Se realiza una solicitud a la API de Spotify para obtener las 10 canciones “más escuchadas”. Sin embargo, dado que se utiliza el Client Credentials Flow (que solo otorga acceso a datos públicos), la petición al endpoint de top tracks no funcionará correctamente para obtener datos privados del usuario. Para obtener estos datos, se debe implementar el Authorization Code Flow, que permite que el usuario autorice el acceso a su información.

- **Ejecución Principal:**  
  La aplicación inicia creando una instancia de la cola de prioridad, obtiene las canciones de Spotify, les asigna una prioridad aleatoria y las agrega a la cola. Luego, se simula la reproducción de las canciones en orden de prioridad, mostrando en la terminal el proceso de “reproducción” de cada canción.

- **Interfaz Visual:**  
  Además de la ejecución en consola, se ha creado una interfaz web sencilla. La página HTML permite:
  - Cargar las canciones a través de un botón, lo que llena la lista visual de reproducción.
  - Reproducir la siguiente canción de la lista mediante otro botón, lo que simula la reproducción y actualiza la lista en pantalla.
  
  La interfaz se encuentra estilizada con CSS, dándole un look similar al de Spotify (colores, tipografía, etc.).

## 🖼️ Vista de la Interfaz HTML 

A continuación se muestra una captura de la interfaz de la aplicación:

<p align="center">
  <img src="https://github.com/user-attachments/assets/4480e7df-a83e-4e2b-8ebd-a9278197f42c" alt="Vista de la Interfaz HTML" height="400">
</p>

---

## Variables de Entorno y Configuración 🔧

Para que el proyecto funcione correctamente, es necesario configurar las variables de entorno con las credenciales de Spotify:

- **CLIENT_ID:**  
  Tu identificador de cliente proporcionado por Spotify.

- **CLIENT_SECRET:**  
  Tu clave secreta de cliente para acceder a la API de Spotify.

Estas variables se configuran en un archivo `.env` ubicado en la raíz del proyecto. Sin embargo, recuerda que el token obtenido con estas credenciales se utiliza únicamente para el Client Credentials Flow, lo que limita el acceso a datos públicos y no permite obtener los top tracks reales de un usuario.

---

## Consideraciones Finales 📌

- **Cola de Prioridad:**  
  Permite gestionar y reproducir canciones en función de la prioridad asignada, simulando una lista de reproducción ordenada.

- **Autenticación con Spotify:**  
  Actualmente se utiliza el Client Credentials Flow, que es suficiente para obtener datos públicos, pero no para acceder a información privada del usuario. Para obtener datos como los top tracks reales, se debería implementar el Authorization Code Flow, donde el usuario autoriza la aplicación.

- **Interfaz y Conexión:**  
  La aplicación integra tanto una parte de consola como una interfaz web sencilla. Esto facilita la demostración de la funcionalidad de la cola y la conexión entre la lógica de la aplicación y la experiencia visual.

Gracias.
