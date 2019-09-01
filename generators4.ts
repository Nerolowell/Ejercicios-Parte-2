function getFirstName() {
  setTimeout(function() {
    gen.next("Katy");
  }, 1000);
}
function getSecondName() {
  setTimeout(function() {
    gen.next("Perry");
  }, 1000);
}
function* sayHello() {
  var a = yield getFirstName();
  var b = yield getSecondName();
  console.log(a, b);
}
var	gen	=	sayHello();
gen.next();