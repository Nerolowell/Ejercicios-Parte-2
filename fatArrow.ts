var inc = x => x + 1;
function Persona(edad) {
  this.edad = edad;
  this.growOld = function() {
    this.edad++;
  };
}
var persona = new Persona(1);
setTimeout(persona.growOld, 1000);
setTimeout(function() {
  console.log(persona.age);
}, 2000);

function Person(age) {
  this.age = age;
  this.growOld = () => {
    this.age++;
  };
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function() {
  console.log(person.age);
}, 2000);

class Persona2 {
  constructor(public age: number) {}
  growOld = () => {
    this.age++;
  };
}
var persona2 = new Persona2(1);
setTimeout(persona2.growOld, 1000);
setTimeout(function() {
  console.log(persona2.age);
}, 2000);
