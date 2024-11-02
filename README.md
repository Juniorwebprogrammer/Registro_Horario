# TuregistrohorarioApp

Bienvenidos al repositorio de Turegistrohorario, una aplicación full stack desarrollada con un frontend de nextjs, un backend de node con express y una base de datos mysql.

El objetivo de este proyecto es ser desplegado en local para gestionar las entradas y salidas de los distintos usuarios ( empleados, asistentes de un congreso ... ).

1. Instalación

   -Descargar el repositorio

   -Descomprimir el repositorio

   -Entrar en la carpeta servidor y rellenar el archivo.env ( podrá obtener los datos desde su servicio mysql )
   
   -Ejecute npm install para instalar las dependencias

   -Ejecuta npm start para poder tener la primera vista (aún debe ejectuar los scripts mysql)
   
   ![image](https://github.com/Juniorwebprogrammer/Registro_Horario/assets/95927731/834a49e8-3b6a-4599-ba98-64febe64c767)
   
   -Entrar en la carpeta TuregistoHorario
   
   -Ejecutar npm install
   
   -Iniciarlo con el comando npm start
   
   ![Captura frontend](https://github.com/Juniorwebprogrammer/Registro_Horario/assets/95927731/2b9ede1f-449b-4f70-838f-4fef4968e65b)
   ![Captura frontend 2](https://github.com/Juniorwebprogrammer/Registro_Horario/assets/95927731/3e6b0ede-2824-41ee-8833-846107d58e48)

3. Mysql

   Para poder utilizar las funcionalidades de la app deben tener un servidor mysql local, recomiendo instalar la versión visual de workbench https://www.mysql.com/products/workbench/

   Una vez instalado debe entrar en la carpeta scriptSQL y utilizar el documento 'registrohorarioscript' y seguir los pasos que describimos a continuación

   Hacemos click sobre localhost para abrir la base de datos que tenemos creada con la instalación si el usuario es root la contraseña es root

   ![Captura 1](https://github.com/Juniorwebprogrammer/Registro_Horario/assets/95927731/36d028d3-512f-4ba9-aa52-44507c1e27e6)


   Luego sobre el icono de la carpeta para añadir el script

   ![Captura 3](https://github.com/Juniorwebprogrammer/Registro_Horario/assets/95927731/fdded9ee-15db-45cc-bcc9-e74a7101ad79)

   Y ejecutamos con el símbolo del rayo y tendremos la base de datos creada

   ![Captura 4](https://github.com/Juniorwebprogrammer/Registro_Horario/assets/95927731/745b6438-be91-4292-932e-1efa8d9dcdf5)

   Es muy importante que la base de datos tenga el mismo nombre, usuario root y la contraseña root además del localhost:3000 en caso contrario deberá realizar los siguientes pasos:

      -Entrar en la carpeta servidor

      -Con cualquier editor de texto o editor de código ponga los datos que le solicita

4. Instalación guiada

   Si desea puede obtener una insatalación guiada a través de una solicitud en nuestra página web ( https://turinconweb.vercel.app/ ) con el asunto Turegistrohorario o siguiendo el tutorial que dejaremos en nuestro canal de youtube, todos los link están en el perfil de github.

5. Mejoras e implementaciones

   La app no está al 100% terminada esto quiere decir que faltan muchas funciones de uso diario e implementaciones para cada entorno en concreto por ello iremos actualizando este repositorio además de avisarles por nuestras redes sociales

5.1 Implementaciones versión 1.1.0

   En esta pequeña actualización hemos realizado mejoras e implementaciones

   - En la aplicación de frontend hemos mejorado las llamadas a las apis e implementado pequeñas mejoras técnicas

   - En la aplicación de backend hemos generado un sistema de administración básico para mejorar la experiencia de usuario y la posterior personalización, este administrador está ejecutado sobre handlebars ( un motor de plantillas ) y estilado con bootstrap 5. Nuestra idea con este administrador es intentar dejarlo lo más simple posible para no interferir con la personalización del usuario por ello, se optó por fondos blancos y ningún tipo de detalle.
     
   ![index_servidor](https://github.com/Juniorwebprogrammer/Registro_Horario/assets/95927731/3550c60c-2397-4d6c-808d-dd68a5c35825)
   
   ![consultas_servidor](https://github.com/Juniorwebprogrammer/Registro_Horario/assets/95927731/230fac57-0097-4b7c-8272-6ceadfdb647e)

   - Hemos implementado un sistema de variables de entorno para una inicialización más sencilla a nivel de usuario

   - Un sistema de login propio el cual está aún pendiente de testear en entornos de producción iremos dando soporte del mismo en próximos parches
     
   ![Login_Servidor](https://github.com/Juniorwebprogrammer/Registro_Horario/assets/95927731/6eb6dc2d-5c87-4ec8-a185-adcd95b75da2)

   - Respecto a los scripts de SQL que utilizamos para poder trabajar sobre la base de datos hemos introducido pequeñas modificaciones para poder trabajar con sistema de sesiones además de facilitar un script, con el encriptamiento que estamos implementando en nuestro login, para poder introducir con mayor facilidad administradores a nuestro sistema.

5.2 Futuras implementaciones

   - Introducción de suits de test para facilitar el desarrollo de las funcionalidades

   - Subida de archivos jpg para mejorar la experiencia frontend usuario

6. Gracias

   Gracias por utilizar y confiar en este proyecto lo seguiremos actualizando para así obtener una mejora del mismo
   


   

  


  

