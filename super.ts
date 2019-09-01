class Base {
  log() {
    console.log("Hola mundo");
  }
}
class Child extends Base {
  log() {
    super.log();
  }
}

class Bases {
  
  log = () => {
    console.log("hello	world");
  };
}
class Childs extends Bases {
  logWorld() {
    this.log();
  }
}
