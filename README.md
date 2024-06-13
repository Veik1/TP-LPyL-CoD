# TP - Laboratorio de Programación y Lenguajes del grupo "Code of Duty"

## Integrantes: 
Alvez, Sofía.  
Maldonado, Ignacio.  
Mentoro, Facundo.  
Romero, Sergio.  

## Descripción: 

Api desarrollada en Node.js y Express.js utilizando Middlewares, Controladores, Schemas, Migrations Models y Routes.  
El objetivo y funcionamiento de la misma es controlar una base de datos, haciendo Get, Post, y Delete.
Tiene una base de carreras, donde cada carrera tiene sus materias.   
Una carrera tiene muchas materias, y cada materia solo se encuentra en una carrera.  

## Instalación:

### 1 Copia el repositorio a tu carpeta local.  
 
 bash
   git clone https://github.com/Veik1/TP-LPyL-CoD.git


###  2 Abre la consola y navega al directorio   

### 3 Instala las dependencias necesarias para el funcionamiento corriendo el siguiente codigo: 


**npm i express**    
**npm i -D nodemon**  
**npm i joi**   
**npm i sequelize**  
**npm i sqlite3**   
**npm i -D sequelize-cli**     

 
 
## Uso y prueba.  

Una vez instalado en tu entorno local: abrir POSTMAN, y hacer las siguientes pruebas  

**Get**	     /carreras	              Resultado: 200	Obtener todas la carreras   
**Get**	     /carreras/:id	          Resultado: 200, 404	Obtener una carrera en particular   
**Post**	    /carreras	              Resultado:201 , 400	Crear una Carrera   
**Delete**	  /carreras/:id	          Resultado:200, 404	Borra una carrera en particular   
**Post**	    /carreras/:id/materia	  Resultado:201, 404, 400	Crea un materia dentro de una carrera    
**Get**	     /carreras/:id/materias 	Resultado:200, 404	Obtener todas la materias de una Carrera    
**Get**	     /materias	              Resultado:200	Obtener todas las materias     
**Get**	     /materias/:id	          Resultado:200, 404	Obtener una materia en particular     
**Delete**	  /materias/:id          	Resultado:200, 404	Borra una materia en particular      
