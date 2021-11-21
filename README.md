# Prueba Técnica SouthernMinds - Back-End

La prueba consiste en hacer un formulario de alta de mascotas. Para cada mascota que se de de alta se deberá registrar su nombre, raza, sexo y edad.

## Información
Este repositorio corresponde al back-end de la aplicación.
Repositorio del front-end de la aplicación: [https://github.com/LeanAHG/pruebaTecnicaFront](https://github.com/LeanAHG/pruebaTecnicaFront)

## Instalación
Para el uso de esta aplicación es necesario tener previamente instalado [MongoDB](https://www.mongodb.com/)

- Clonar repositorio: 
```bash
git clone https://github.com/LeanAHG/pruebaTecnicaBack.git
```
- En una terminal usa este comando para instalar todas las dependencias:
```bash
npm install
```
## Uso

### MongoCompass
Conectarse al puerto local y proceder con el paso 3

### Consola de comandos
- 1- En una consola de comandos inicializar mongoDB con el comando:
 ```cmd
mongod
```
- 2- Y en otra consola de comandos realizar la conexión al puerto con: 
 ```cmd
mongosh
```
- 3- Finalmente en una terminal usar este comando para inicializar la aplicación:
```bash
npm run develop
```
## Agregar razas desde Strapi
<div>
 <hr/>
    <br/>
      Regístrate en Strapi para acceder al de administrador y una vez registrado ingresar a la coleción de razas. 
    <br/>
    <div align="center">
     <img src="https://prnt.sc/209jgk3" width="800px"/> 
    </div>
    
    <br/>
       Clickear en agregar y finalmente insertar en el campo name el nombre que desee ingresar.
    <br/>
    <div align="center">
     <img src="https://prnt.sc/209w8ti" width="800px"/> 
    </div>
</div>
    
## Rutas activas
- ### GET razas
http://localhost:1337/races

- ### POST una nuava mascota
http://localhost:1337/dogs

## Tecnologías
- #### MongoDB
<p align = "left"> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt = "mongodb" width = "60" height = "60" /> </ a > </p>


- #### Strapi.io
<p align = "left"> <a href="https://strapi.io/" target="_blank" rel="noreferrer"> <img src = "https://strapi.io/assets/strapi-logo-light.svg" alt = "strapi" width = "70" height = "70" /> </ a > </p>
