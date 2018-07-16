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
if(a){
    console.log('hay algo dentro de a')
}
