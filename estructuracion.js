function rest(first, second) {
    var Otros = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Otros[_i - 2] = arguments[_i];
    }
    console.log(Otros);
}
rest("foo", "bar"); //	[]
rest("foo", "bar", "bas", "qux"); //	['bas','qux']
