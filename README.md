# TP-Laboratorio de Programación y Lenguajes del grupo "Code Of Duty"

## Integrantes: 

Alvez, Sofía.  
Maldonado, Ignacio.  
Mentoro, Facundo.  
Romero, Sergio.  


***Descripción:***  
Api desarrollada en Node.js, Express.js utilizando Middlewares, Controladores y Routes.  
El funcionamiento de la misma es controlar una base de datos, haciendo Get, Post, y Delete.
Tiene una base de carreras, donde cada carrera tiene sus materias.   
Una carrera tiene muchas materias, y cada materia solo se encuentra en una carrera.  

***Instalación:***  

1 Copia el repositorio a tu carpeta local.  
 
 bash
   git clone https://github.com/Veik1/TP-LPyL-CoD.git

2 Abre la consola y navega al directorio   

3 Instala las dependencias necesarias para el funcionamiento  
  
  npm install 


***Configuración:***   


***Uso y prueba:***  
Verbo	Recurso	Status code	Descripción
Get	/carreras	200	Obtener todas la carreras   
Get	/carreras/:id	200, 404	Obtener una carrera en particular   
Post	/carreras	201 , 400	Crear una Carrera   
Delete	/carreras/:id	200, 404	Borra una carrera en particular   
Post	/carreras/:id/materia	201, 404, 400	Crea un materia dentro de una carrera    
Get	/carreras/:id/materias	200, 404	Obtener todas la materias de una Carrera    
Get	/materias	200	Obtener todas las materias     
Get	/materias/:id	200, 404	Obtener una materia en particular     
Delete	/materias/:id	200, 404	Borra una materia en particular      








