// Comentarios de una línea
/*  Comentarios
    multi
    línea
*/

/*  Sentencias
    Las sentencias de Javascript estan compuestas por:
    Valores, Operadores, Expresiones, Palabras clave y comentarios
    Las sentencias deben estar separadas por un ;
    Para asignar valores usar el signo =
    Los nombres de identificadores deben comenzar con:
    - letra (A-Z a-z)
    - Signo $
    - guión bajo _
*/
var x, y, z;
x = 1; y = 2;
z = x + y;

var nombre = "Nombre";

var _nombre = "Nombre";

// Definicion de una función
// La función se encuentra dentro de los elementos {}, permietiendo ejecutar
// múltiples sentencias en un sólo bloque de codigo.

function cambio2(){
    document.getElementById("parrafo").innerHTML = "Otro cambio de texto";
}

/* Algunos keywords
break       Finaliza un switch o un ciclo
continue    Salta al inicio del ciclo
debugger    Finaliza una ejecución de Javascript y llama a la función debuggin
do .. while 
for
function    Declara una función
if .. else  
return
switch
try .. catch    
var         Declarar una variable

*/

// Camel Case
// var nombre-alumno = "";
var nombre_alumno;
var NombreAlumno;
var nombreAlumno;

// Uso de Variables globales y locales

var alumno = "Nombre alumno";
var Alumno = "Nombre";

// es posible utilizar la variable alumno
// no es posible usar la variable carreraAlumno

function definirAlumnos(){
    var _carreraAlumno = "";
    // uso de la variable alumno 
}

// Declaración de la variable a=0
var a = 0;
function redefinir(){
    // La variable es redefinida
    var a = 2; 
     // let var b =2;
}
// El valor de a es 2

// Definición de una constante
const VALUE = "Definicion";


// Asignación de valores
// suma
var x = 10;
x += 1;

// resta
var x = 10;
x -= 1;

// multiplicación
var x = 10;
x *= 2;

// división
var x = 10;
x /= 2;

// módulo
var x = 10;
x %= 5;

// Data types
var a = 23 ;     // Number
var a = "Name";  // String
var m = {nombre:"Juan", apellido:"Pérez"}; // object

var m = null;

var valor = 12 + "string"   // concatena los valores

// Javascript evalúa los valores de izquierda a derecha
var valor = 14 + 6 + "string" // devuelve 20string

// arrays, se accede a los elementos del array a través de sus indices.
var marcas = ["Samsung", "Xiami", "LG"]

var texto = marcas[1];

// typeof
typeof "Nombre" // Retorna un string
typeof 3        // Retorna un Number

// Datos primitivos

//undefined
var teclado;

teclado = undefined;
typeof teclado; 

var mouse = "";

// boolean
var x = true;
var y = false;

/*
Strings
Caracter de scape
\b
\n
\r
\t
\v

*/
// largo
var texto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var largo = texto.length;

// indexof()

var texto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var palabra = texto.indexOf("E");

// Condicionales
// == el valor de la derecha es igual al de la izquierda
// != Valor de la izquierda es distinto al de la derecha
// ! negacion
// && and lógico
// || or lógico
var miVariable = 12;
if (miVariable <= 10){
    // codigo
    alert("El numero es menor que 10");
} else if (miVariable > 21 ){
    // codigo
    alert("Es mayor");
} else {
    alert("Se encuentra en el rango");
}

var miNumero = 15;
if (miNumero > 10 && miNumero < 20){
    alert("Se encuentra en el rango");
} else{
    alert("Se encuentra fuera del rango");
}

var matriculado = "SI";
if (matriculado == "SI"){
    alert("El alumno se encuentra matriculado");
} else {
    alert("El alumno no se encuentra matriculado");
}

var alumnoMatriculado = true;
if (alumnoMatriculado){
    alert("Matriculado = true");
} else{
    alert("Matriculado = false");
}

var dia = 4;
switch(dia){
    case 1:
        alert("Es lunes");
        break;
    case 2:
        alert("Es martes");
        break;
    case 3:
        alert("Es miercoles");
        break;
    default:
        alert("Es otro día de la semana");
}

// Bucles for y while
// for(inicialización; condicion; incremento){}

var numero = 0;
for (var i = 0; i < 6 ; i++){
   numero += 2; 
   if (numero == 4){
       numero += 5;
       continue;
   }
}

var a = 0;
var array = [10, 20, 30, 40 ,50]
for (var j = 0; j < array.length; j++){
    a += array[j];
    alert(array[j]);
    if ( array[j] == 40){
        alert("array = 40");
        break;
    }
}

var contador = 0;
while(contador < 10){

    contador++; // es importante agregar el incremento
}

var cont
do {
    cont++;
} while(contador < 10);

