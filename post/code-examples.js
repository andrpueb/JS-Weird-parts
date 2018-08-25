//object
Direccion:
  {
  Calle: 'avenida suba',
  Numero: 127,
  Apartamento:
    {
      Piso: 3,
      Numero: 202
  }
}


//Creation and Hoisting

console.log(a);
b();

var a = 'Hello World!';

function b(){
  console.log('function b called!')
}


//Execution Stack

function b(){
}

function a(){
  b();
}

a();


//Outer Environments

function b(){
  console.log(myVar);
}

function a(){
  var myVar = 2;
  b();
}

var myVar = 1;
a();

//Synchronous test

function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('finished function')
}

function clickHandler() {
  console.log('click event');
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');


//Operator_Precedence

var a = 3 + 4 * 3;

console.log(a);

//Associativity

var a = 2, b = 3, c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);

//coercion
3 > 2 > 1
true > 1
1 > 1

//Existence and booleans

var a;
//a no ha sido definida
if(a){
    console.log('hay algo dentro de a')
}

//Using Object Literal

var carro = {
  marca: 'Lamborghini',
  modelo: 'Murcielago',
  país: 'Italia'
}

//Es lo mismo que --->

var carro = new Object();
carro.marca = 'Lamborghini';
carro.modelo = 'Murcielago';
carro.pais = 'Italia';

//namesapce emulation

var ferrari = {};
var renault = {};
var nissan = {};

ferrari.puertas = 2;
renault.puertas = 5;
nissan.puertas = 3;


//Object Literal

var jugador = {
    nombre: 'James',
    apellido: 'Rodriguez',
    edad: 26
}

//JSON - Javascript object notation

{
  'nombre': 'james',
  'apellido':'Rodriguez',
  'edad': 26
}

//JSON.stringify

var myObjeto = {
  primeraPropiedad : 'un valor',
  segundaPropiedad : 'otro valor'
}

var myObjetoJSON = JSON.stringify(myObjeto)

//JSON.parse

var myJSON = {
  "unaPropiedad" : "el valor de una propiedad",
  "otraPropiedad" : "el valor de otra propiedad"
}

var myObjetoLiteral = JSON.parse(myJSON);

//by Value (primitives)

var a = 3;
var b;

b = a;

//by Reference (objects)

var a = {saludo: 'hola'};
var b;

a = b;

a.saludo = 'heyy';

console.log(a);
console.log(b);

// asignar nuevo objeto

var e = {color: 'azul'}
var f = e;

//Ahora le asignamos a 'e' un objeto diferente

e = {color: 'morado'}



//this
function a(){
  console.log(this)
}

var b = function(){
  console.log(b)
}

a()
b()

//ARRAYS

var miArray = [
  3,
  function(carro){
    console.log('yo tengo un ')
  },
  {carro: 'Porsche'}
]


//My FRAMEWORK

(function(Jq, Gl){
  var jQuery = window.jQuery;
  var myGlobal = window.global;

})(window.jQuery, window.global)
