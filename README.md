# Descripción del proyecto

Este es el Frontend de la prueba técnica de la empresa [**_Disagro_**](https://www.disagro.com.gt/), el cual fue desarrollado en **React.js**. El proyecto consiste en una aplicación web que permite hacer la confirmación de asistencia a un evento con un inicio de sesión con credenciales enviadas por email.

# Instalación

1. Clona el repositorio
2. Copia el archivo `.env.template` a `.env` y completa las variables de entorno requeridas para el frontend
3. Copia el archivo `.env.backend.template` a `.env.backend` y completa las variables de entorno requeridas para backend y base de datos, asegúrate de que el host en `DATABASE_URL` sea el nombre del servicio de la base de datos en el archivo `compose.backend.yml`
4. Ejecuta `bun install` para instalar las dependencias
5. Ejecuta `docker compose -f compose.backend.yml up -d` para iniciar los contendores del backend y base de datos
6. Ejecuta `bun dev` para iniciar el servidor de desarrollo
7. Abre tu navegador en `http://localhost:5173`
