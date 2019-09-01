function* generator() {
  console.log("Ejecución iniciada");
  yield 0;
  console.log("Ejecución continuada");
  yield 1;
  console.log("Ejecución continuada");
}
var iterator = generator();
console.log("Starting	iteration");
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());