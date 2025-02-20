# recibos-pagos

## Descripción

Este proyecto es una aplicación para la gestión de recibos y pagos. Permite a los usuarios registrar, consultar y administrar sus transacciones financieras de manera eficiente.

## Características

- Registro de recibos y pagos
- Consulta de transacciones por fecha
- Generación de reportes financieros
- Exportación de datos a formatos CSV y PDF

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/katopuebla/recibos-pagos.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd recibos-pagos
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Inicia la aplicación:
    ```bash
    npm start
    ```
1. Abre tu navegador y navega a `http://localhost:3000`

1. Inicia en modo _debug_ la aplicación:
    ```bash
    npx ng serve --no-open --host=0.0.0. --port=8100 --configuration=development
    ```
## Deploy a Firebird

1.  Abre la terminal y navega hasta la carpeta de tu proyecto Ionic. 
1.  Compilar como producción para empaquetar optimizadamente:
    ```bash
    ionic build --prod
    ```
1.  Esto creará una carpeta "www" dentro de tu proyecto, que contiene los archivos estáticos de tu aplicación.

Configuración del hosting Firebird

Acceso al servidor:
Necesitarás acceso a tu servidor Firebird, ya sea a través de FTP, SSH o un panel de control proporcionado por tu proveedor de hosting.
Creación de la base de datos:
Si tu aplicación Ionic utiliza una base de datos Firebird, asegúrate de que esté creada y configurada correctamente en el servidor.
Configuración del servidor web:
Firebird en si, es una base de datos, no un servidor web, por lo tanto, necesitaras de un servidor web como Apache o Nginx.
Si utilizas un servidor web como Apache, debes configurar un "Virtual Host" que apunte a la carpeta "www" de tu proyecto Ionic.
Si utilizas Nginx, deberás configurar un "server block" que sirva los archivos estáticos desde la carpeta "www".
Asegúrate de que el servidor web esté configurado para manejar correctamente las rutas y los archivos de tu aplicación Ionic.
3. Despliegue de los archivos

Transferencia de archivos:
Utiliza FTP o SSH para transferir el contenido de la carpeta "www" a la ubicación configurada en tu servidor web.
Configuración de la conexión a la base de datos:
Si tu aplicación se conecta a una base de datos Firebird, asegúrate de que los datos de conexión (host, puerto, nombre de la base de datos, usuario, contraseña) estén configurados correctamente en tu aplicación.
4. Consideraciones adicionales

Rutas del lado del servidor:
Si tu aplicación Ionic utiliza rutas del lado del servidor (por ejemplo, para una API), asegúrate de que estén configuradas correctamente en tu servidor web.
Certificado SSL:
Para una mayor seguridad, considera instalar un certificado SSL en tu servidor web.
Pruebas:
Después de desplegar tu aplicación, realiza pruebas exhaustivas para asegurarte de que todo funcione correctamente.
Información adicional

Es importante tener en cuenta que Firebird es un sistema de gestión de bases de datos relacional (RDBMS), no un servicio de alojamiento web. Por lo tanto, necesitarás un servidor web (como Apache o Nginx) para alojar tu aplicación Ionic.
Si solo necesitas desplegar la parte frontal de tu aplicación Ionic, puedes usar servicios de alojamiento estático como Firebase Hosting o Netlify, los cuales son muy usados para aplicaciones Ionic.
Si tu aplicación Ionic se conecta a una API que se ejecuta en un servidor Firebird, deberás configurar correctamente las rutas y los permisos de acceso en el servidor.

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.