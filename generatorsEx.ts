function* generator() {
  try {
    yield "FUAAAAAAA";
    throw Error("prueba");
  } catch (err) {
    console.log(err.message);
  }
}
var iterator = generator();
var foo = iterator.next();
console.log(foo.value);
var	foo	=	iterator.next();