var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hola,	" + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("Mundo");
var button = document.createElement("button");
button.textContent = "Di hola ;) ";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
