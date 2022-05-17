Este es un frontend realizado en React.js para la empresa Kruger.

Se encuentra un archivo db.json el cual funcionaba con json-sever para simular un backend.

Para el desarrollo se empezo con las historias de usuario del administrador la cuales estan terminada en su totalidad :
1. Como Administrador requiere registrar, editar, listar y eliminar a los empleados.
Criterios de aceptación:
a. Registrar la siguiente información del empleado.
○ Cédula.
○ Nombres.
○ Apellidos.
○ Correo electrónico.
b. Los campos deben contener validaciones de acuerdo al tipo de dato:
○ Todos los campos son requeridos.
○ Cédula válida. (Incluir un valor numérico y único de 10 dígitos)
○ Correo electrónico válido.
○ Nombres y apellidos no deben contener números o caracteres especiales.
c. Al dar de alta un empleado se debe generar un usuario y contraseña para el empleado.

3. Como Administrador se requiere filtrar el listado de los empleados por los siguientes criterios.
Criterios de aceptación:
a. Filtrar por estado de vacunación.
b. Filtrar por tipo de vacuna.
c. Filtrar por rango de fecha de vacunación.


Y de segundo se empezo a trabajar en el login para poder identificar al usuario

El frontende de la segunda historia de usuario se encuentras realizado pero no sus funcionalidades:

2. Como Empleado requiero ingresar al sistema para visualizar y actualizar mi información.
Criterios de aceptación:
a. Completar la siguiente información:
● Fecha de nacimiento.
● Dirección de domicilio.
● Teléfono móvil.
● Estado de vacunación: Vacunado / No Vacunado.
● Si el empleado está en estado vacunado, se debe pedir la siguiente información
requerida:
○ Tipo de vacuna: Sputnik, AstraZeneca, Pfizer y Jhonson&Jhonson
○ Fecha de vacunación.
○ Número de dosis.
