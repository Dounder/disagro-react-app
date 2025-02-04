# Descripción del proyecto

Este es el Frontend de la prueba técnica de la empresa [**_Disagro_**](https://www.disagro.com.gt/), el cual fue desarrollado en [**React.js**](https://react.dev/). El proyecto consiste en una aplicación web que permite hacer la confirmación de asistencia a un evento con un inicio de sesión con credenciales enviadas por email.

# Instalación

1. Clona el repositorio
2. Copia el archivo [`.env.template`](.env.template) a `.env` y completa las variables de entorno requeridas para el frontend
3. Copia el archivo [`.env.backend.template`](.env.backend.template) a `.env.backend` y completa las variables de entorno requeridas para backend y base de datos, asegúrate de que el host en `DATABASE_URL` sea el nombre del servicio de la base de datos en el archivo [`compose.backend.yml`](compose.backend.yml)
4. Ejecuta `bun install` para instalar las dependencias
5. Ejecuta `docker compose -f compose.backend.yml up -d` para iniciar los contendores del backend y base de datos
6. Ejecuta `bun dev` para iniciar el servidor de desarrollo
7. Abre tu navegador en [`http://localhost:5173`](http://localhost:5173)

# Docker

La imagen de Docker se encuentra en [Docker Hub](https://hub.docker.com/repository/docker/drglasdou/disagro_react), la imagen tiene en duro la url de la API que se encuentra en el archivo `.env` de la raíz del proyecto. Esto se debe al funcionamiento de las variables de entorno en [Vite](https://vitejs.dev/). Por lo que si se desea cambiar la url de la API, se debe hacer un build de la imagen con la nueva url.

Para ejecutar la imagen de Docker, se debe ejecutar el siguiente comando:

```bash
docker run -d -p 5173:3000 --name disagro_react drglasdou/disagro_react:latest
```

# Tecnologías

- [React.js](https://react.dev/) - Biblioteca de JavaScript para construir interfaces de usuario interactivas
- [Bun](https://bun.sh/) - Runtime de JavaScript y empaquetador/servidor de desarrollo
- [Vite](https://vitejs.dev/) - Herramienta de desarrollo web con enfoque en velocidad y simplicidad
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitario para estilizar rápidamente componentes
- [Axios](https://axios-http.com/) - Cliente HTTP para realizar peticiones a la API
- [Tanstack Query](https://tanstack.com/query/latest) - Biblioteca para gestión de estado y caché de datos asíncronos
- [Tanstack Router](https://tanstack.com/router/v1) - Enrutador moderno y tipo seguro para React
