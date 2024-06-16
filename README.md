# TP - Laboratorio de Programación y Lenguajes 2024
### Grupo **"Code of Duty"**

### Integrantes:
```
• Mentoro Facundo
• Alvez Sofia
• Maldonado Ignacio
• Romero Sergio
```

## Guía de Instalación:

### Opción 1 - Clonación de Repositorio (HTTPS).  

Desde la terminal Git Bash ir al directorio donde se desea clonar el proyecto. Escribir el siguiente comando para clonar el repositorio

```git clone https://github.com/Veik1/TP-LPyL-CoD.git```

### Opción 2 - Descarga de Repositorio.

Desde el boton <**Code**> elegir la opción Download ZIP para descargar el repositorio. Descomprimirlo en el directorio donde se va a desplegar el proyecto.

Una vez que se tenga el proyecto en el directorio deseado, en el Símbolo de Sistema (CMD) ir hasta el proyecto y abrir VSCode (code .)

## Instalación de Dependencias e Inicio del Proyecto
En la terminal de VSCode, correr el siguiente comando para instalar todas las dependencias necesarias para iniciar correctamente el proyecto

	npm install

Luego que se instalen todas las dependencias, para iniciar el servidor del proyecto correr el siguiente comando:

	npm run dev


## Uso y Pruebas en Postman
Una vez instalado y ya corriendo el proyecto en el entorno local:

- Abrir Postman.

- Ir al botón ubicado la parte superior izquierda de Postman, y seleccionar **File>Import...**

- Buscar el archivo ya descargado **“CRUD Testing.postman_collection”** dentro del proyecto para arrastrarlo o poder seleccionarlo desde **Choose Files**

- Haga click en **Import** para tener el archivo importado.

## El proyecto posee esta estructura:

![DIAGRAMA](DER.png)


## Los resultados de las pruebas deben ser los siguientes: 

|Verbo|Recurso|Status code|Descripción|
|-----|-------|-----------|-----------|
|POST|/carreras|201, 400, 500|Crear una Carrera|
|GET|/carreras|200, 500|Obtener todas las carreras|
|GET|/carreras/:id|200, 404, 500|Obtener una carrera en particular|
|PUT|/carreras/:id|200, 404, 500|Modificar una carrera en particular|
|DELETE|/carreras/:id|200, 404, 500|Borrar una carrera en particular|
|POST|/carreras/:id/materia|201, 404, 400, 500|Crear una materia dentro de una carrera|
|GET|/carreras/:id/materias|200, 404, 500| Obtener todas las materias de una Carrera
|GET|/materias|200, 500|Obtener todas las materias|
|GET|/materias/:id|200, 404, 500|Obtener una materia en particular|
|PUT|/materias/:id|200, 404, 500|Modificar una materia en particular|
|DELETE|/materias/:id|200, 404, 500|Borrar una materia en particular|



  
