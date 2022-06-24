//imprimir en consola
console.log("HOLA MUNDO");

//alertas en pantalla
alert("HOLA MUNDO");

//MANEJAR EL DOM 
document.querySelector("body").innerHTML = "hola mundo";
document.querySelector("body").innerHTML = '<div><h1>hola mundo</h1></div><div><p>hi, this space is empty if you want you can complete this part<p></div>';

//declarar una variable
var nombre;

//asignar 
nombre = "alexander";

var edad = 20;

var precio = 12.5;

//mala practica para declarar una variable
canal = "YouTube";

//imorimir una variable 
console.log(precio);

//concatenar 
document.querySelector("body").innerHTML = "hola" + nombre;

//duck typing
var edad = 20;
edad++;

var punto_flotantes = 12.5;
console.log(edad + punto_flotantes);

/*
Esta es la forma de comentar todo un bloque 

Operadores aritmeticos
Division = /
Multiplicacion = *
Suma = +
Resta = -
Modulo = %
*/

function es_par(numero){
    if (numero % 2 == 0){
        return true;
    }
    return false;
}

//hacer operaciones mas complejas
console.log(Math.pow(2,2));

console.log(Math.round(0.9));

console.log(Math.ceil(0.2));

console.log(Math.floor(0.8));

console.log(Math.pi);

console.log(Math.random());

//Tipo de comillas
var nombre = "alex";

var cadena = 'hola ' + nombre;

var resultado = cadena.indexOf(alex);

console.log(cadena.length);

console.log(resultado);

//<----------------------------------------------------------------->

var nombre = "alex"

if(nombre.indexOf("andres") !=-1){
    console.log("ERES EL AUTOR")
}else{
    console.log("NO ERES EL AUTOR");
}
