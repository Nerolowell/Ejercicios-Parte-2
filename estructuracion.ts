function rest(first, second, ...Otros) {
  console.log(Otros);
}
rest("foo", "bar"); //	[]
rest("foo", "bar", "bas", "qux"); //	['bas','qux']
