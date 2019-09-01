class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hola,	" + this.greeting;
  }
}
let greeter = new Greeter("Mundo");
let button = document.createElement("button");
button.textContent = "Di hola ;) ";
button.onclick = function() {
  alert(greeter.greet());
};
document.body.appendChild(button);
