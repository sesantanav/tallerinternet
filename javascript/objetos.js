// Declarar objetos
var alumno = {
    // atributos o propiedades
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    estudios: {
        carrera: "Informática",
        año: "2021"
    },
    // métodos del objeto
    getnombre: function(){
        var mensaje = "El nombre es: " + this.nombre;
        window.alert(mensaje)
    },
    setnombre: function(pnombre){
        this.nombre = pnombre;
    },
    setalumno: function(_nombre, _apellido, _edad){
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.edad = _edad;
    }
};

var constructor = function() {
    var estudiante = {
        nombre: "Juan",
        edad: 20,
        getNombre: function(){
            alert(this.nombre);
        },
        cambiarNombre: function(nombreNuevo){
            this.nombre = nombreNuevo
        }
    };
    return estudiante;

};

var estudiante1 = constructor();
estudiante1.getNombre(); // Juan


var constructorEstudiante = function(nombreEstudiante, edadEstudiante) {
    var estudiante = {
        nombre: nombreEstudiante, 
        edad: edadEstudiante,
        getNombre: function(){
            alert(this.nombre);
        },
        cambiarNombre: function(nombreNuevo){
            this.nombre = nombreNuevo
        }
    };
    return estudiante;
};

var estudiante3 = constructorEstudiante("Seba");
estudiante3.getNombre();

// miObjeto.curso = "Taller";

// var mensaje = "El nombre es: " + miObjeto.nombre + "\n";
// mensaje += "Apellido: \t\t " + miObjeto["apellido"] + "\n"; 
// mensaje += "Taller: " + miObjeto.curso +  "\n";
// mensaje += "Carrera: " + miObjeto.estudios.carrera;
// alert(mensaje);
// 
// alert("Carrera " + miObjeto.estudios.carrera)

var nombre = "Luis";
var apellido = "Perez";
var edad = 20;

alumno.setalumno(nombre, apellido, edad)
alumno.getnombre();


// palabra clave this
