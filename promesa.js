var promises = new Promise(function (resolve, reject) {
    resolve(123);
});
promises.then(function (res) {
    console.log("I	get	called:", res === 123);
});
promises["catch"](function (err) { });
var promise = new Promise(function (resolve, reject) {
    reject(new Error("Algo	malo	ha	pasado"));
});
promise.then(function (res) {
});
promise["catch"](function (err) {
    console.log("Tengo	una	llamada:	", err.message);
});
