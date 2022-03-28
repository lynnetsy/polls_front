# Polls Front

Este proyecto es una aplicación construida con React, cuyas 
funcionalidades son mostrar un formulario con una serie de preguntas
junto con una pantalla de estadísticas con los resultados de las encuestas
realizadas.

# Dependencias
* GIT
* NPM
* NODE
* DOCKER

## Imagen Docker
https://hub.docker.com/r/lynnete/polls_front

## Instalacion y ejecucion
1. Clonar este repositorio en local
```
git clone git@github.com:lynnetsy/polls_front.git
```
2. Instalar dependencias
```
npm install
```
3. Construir el proyecto react.
```
npm run build
```
4.Ejecutar el archivo docker-compose.yml
```
docker-compose up -d
```
5.En el navegador ir a la siguiente ruta: 
* `http://localhost:8080/` : Encuesta
* `http://localhost:8080/stats` : Estadísticas