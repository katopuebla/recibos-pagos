# recibos-pagos
# Despliegue en subcarpetas (producción y desarrollo)

## ¿Cómo funciona?
El workflow despliega la app en dos ubicaciones:
- Producción: `/recibos-pagos/` (push a main)
- Desarrollo: `/recibos-pagos/dev/` (push a develop)

## Configuración recomendada en Angular/Ionic

1. **Ajusta el `base-href` en el build:**
   - Producción: `--base-href=/recibos-pagos/`
   - Desarrollo: `--base-href=/recibos-pagos/dev/`

2. **Configura rutas absolutas en tu app:**
   - Usa rutas relativas para assets y navegación, o prepende el `base-href` si usas rutas absolutas.

3. **Configura el entorno en `src/environments/environment.ts` y `environment.prod.ts`:**
   - Puedes agregar una variable, por ejemplo:
     ```ts
     // environment.ts
     export const environment = {
       production: false,
       baseHref: '/recibos-pagos/dev/'
     };
     // environment.prod.ts
     export const environment = {
       production: true,
       baseHref: '/recibos-pagos/'
     };
     ```

   - Úsala para construir rutas en servicios/componentes si necesitas acceder a recursos externos o APIs.

4. **Verifica que los assets y rutas funcionen en ambos entornos:**
   - Si usas rutas absolutas, asegúrate de incluir el `baseHref`.
   - Ejemplo en un servicio:
     ```ts
     import { environment } from 'src/environments/environment';
     const apiUrl = environment.baseHref + 'api/endpoint';
     ```

## Prueba tu app
- Accede a producción: `https://katopuebla.github.io/recibos-pagos/`
- Accede a desarrollo: `https://katopuebla.github.io/recibos-pagos/dev/`

---
Si necesitas ayuda para ajustar rutas específicas en tu app, dime qué componente o servicio quieres adaptar.

## Descripción

Este proyecto es una aplicación para la gestión de recibos y pagos. Permite a los usuarios registrar, consultar y administrar sus transacciones financieras de manera eficiente.

## Características

- Registro de recibos y pagos
- Consulta de transacciones por mes, meses, casas

## Pre-Instalación

1. Instalar Node Js si no se tiene ya instalado
    1. Descargar nodeJs desde la página https://nodejs.org/es/download e instalar el ejecutable.
    1. En una terminal de windows PowerShell:
    ```windows
    # Download and install fnm:
    winget install Schniz.fnm

    # Download and install Node.js:
    fnm install 22

    # Verify the Node.js version:
    node -v # Should print "v22.XX.0".

    # Verify npm version:
    npm -v # Should print "X.X.X".
    ```
    1. Linux o terminal bash:
    ```bash
    # Download and install fnm:
    curl -o- https://fnm.vercel.app/install | bash

    # Download and install Node.js:
    fnm install 22

    # Verify the Node.js version:
    node -v # Should print "v22.14.0".

    # Verify npm version:
    npm -v # Should print "10.9.2".
    ```
1. Instala las ionic cli:
    ```bash
    npm install -g @ionic/cli
    ```
## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/katopuebla/recibos-pagos.git
    ```
1. Navega al directorio del proyecto:
    ```bash
    cd recibos-pagos
    ```
1. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Inicia la aplicación con Ionic:
    ```bash
    ionic serve
    ```
   Abrirá automaticamente tu navegador en el puerto 8100 para navegar en `http://localhost:8100`

1. Inicia la aplicación tipo Angular:
    ```bash
    npm run start
    ```
1. Abre tu navegador y navega a `http://localhost:4200`

1. Inicia en modo _debug_ la aplicación:
    ```bash
    npx ng serve --no-open --host=0.0.0.0 --port=8100 --configuration=development
    ```
## Deploy a GitHub

GitHub Pages

1. Hacer Pull Request al branch main, y github actions automaticamente compilará, validará y deployará la aplicación en la página de github.
1. Abrir la página: https://katopuebla.github.io/recibos-pagos

Servidor Web

1.  Abre la terminal y navega hasta la carpeta de tu proyecto Ionic.
1.  Compilar como producción para empaquetar optimizadamente:
    ```bash
    ionic build --prod -- --base-href=/recibos-pagos/
    ```
1.  Esto creará una carpeta "www" dentro de tu proyecto, que contiene los archivos estáticos de tu aplicación.

1. Copiar el contenio a tu repositorio web.

1. Despliegue de los archivos

    Transferencia de archivos:
    Utiliza FTP o SSH para transferir el contenido de la carpeta "www" a la ubicación configurada en tu servidor web.
    Configuración de la conexión a la base de datos:
    Si tu aplicación se conecta a una base de datos Firebird, asegúrate de que los datos de conexión (host, puerto, nombre de la base de datos, usuario, contraseña) estén configurados correctamente en tu aplicación.

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
