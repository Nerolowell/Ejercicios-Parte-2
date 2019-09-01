class Startup {
  private text: String;
  constructor(texto: String) {
    this.text = texto;
  }
  public main(): number {
    console.log(this.text);
    return 0;
  }
}
let s = new Startup("Hola	mundo");
s.main();
class Startups {
  public static main(): number {
    console.log("Hola	mundo");
    return 0;
  }
}
Startups.main();


