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
