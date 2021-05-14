// Definición de funciones
/*
function nombre(parametro1, parametro2...){
    // bloque de código
}

parámetros son los elementos listados dentro del paréntesis al momento de definir la función
argumentos son los valores que son recibidos por la función, cuando es invocada
*/

function suma(a , b){
    return a + b;
}

function cambio(){
    document.getElementById("parrafo").innerHTML = "Cambio de texto";
    document.getElementById("parrafo").style.fontSize = "40px";
}

var x = 10;
var y = 20;
var z;
z = suma(x , y);

