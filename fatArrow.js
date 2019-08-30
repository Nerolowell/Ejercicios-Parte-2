var inc = function (x) { return x + 1; };
function Persona(edad) {
    this.edad = edad;
    this.growOld = function () {
        this.edad++;
    };
}
var persona = new Persona(1);
setTimeout(persona.growOld, 1000);
setTimeout(function () {
    console.log(persona.age);
}, 2000);
function Person(age) {
    var _this = this;
    this.age = age;
    this.growOld = function () {
        _this.age++;
    };
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () {
    console.log(person.age);
}, 2000);
var Persona2 = /** @class */ (function () {
    function Persona2(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Persona2;
}());
var persona2 = new Persona2(1);
setTimeout(persona2.growOld, 1000);
setTimeout(function () {
    console.log(persona2.age);
}, 2000);
