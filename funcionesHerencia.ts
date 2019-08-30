class Adder {
    constructor(public a: number) {}
    add = (b:string): string => {
    return this.a + b;
  };
}
class ExtendedAdder extends Adder {
  private superAdd = this.add;
  add = (a: string): string => {
    return this.superAdd(a);
  };
}
