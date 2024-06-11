# Desafío Guiado, Módulo VIII - Collage de Imágenes.

## Descripción del proyecto

En este desafío se debe crear un servidor con Express y el paquete express-fileupload para almacenar las imágenes que estarán dentro de un collage.

1. Integrar express-fileupload a Express.
2. Definir que el límite para la carga de imágenes es de 5MB.
3. Responder con un mensaje indicando que se sobrepasó el límite especificado.
4. Crear una ruta POST /imagen que reciba y almacene una imagen en una carpeta pública del servidor. Considerar que el formulario envía un payload con una propiedad “position”, que indica la posición del collage donde se deberá mostrar la imagen.
5. Crear una ruta DELETE /imagen/:nombre que reciba como parámetro el nombre de una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes. Considerar que esta interacción se ejecuta al hacer click en alguno de los números del collage. 

## Prerrequisitos o Dependencias
- Windows, Mac, Linux.
- Javascript, Node.js, GitHub.
- Visual Studio Code.
- Postman

### Para inicializar el programa se requiere:

- Instalar las dependencias Express y Express-fileupload, e instalarlas con el comando `npm i express express-fileupload`.

### Ejemplos de uso:

Ruta para la página:
URL: http://localhost:3000/

- Agregar Imagen; presionar botón `Choose File` y elegir archivo, elegir posicion y click en `Subir Imagen`:

![Imagen](/screenshots/agregar.png)

- Subir más imágenes; HAcer clic en `Subir otra imagen`:

![Imagen](/screenshots/agregar_mas.png)

- Eliminar Imagen; hacer click en el número de imagen que se necesita borrar:

![Imagen](/screenshots/borrar.png)

## Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE.md](LICENSE) para detalles

------------------------------------------------------------------------------------------------------------------------------------

## Eric Arancibia (https://github.com/ericarancibia) - G68 Desarrollo Aplicaciones Full Stack JavaScript. Talento Digital - Academia Desafío Latam