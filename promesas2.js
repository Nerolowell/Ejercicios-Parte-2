"use strict";
exports.__esModule = true;
var fs = require("fs");
Promise.resolve(123)
    .then(function (res) {
    console.log(res);
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
});
Promise.reject(new Error("Algo malo ha sucedido chaval, córrele, AY PAPANTLA TUS HIJOS VUELAAAAAAAAAAAN"))
    .then(function (res) {
    console.log(res);
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})["catch"](function (err) {
    console.log(err.message);
});
Promise.reject(new Error("Algo malo ha pasado tío, joder."))
    .then(function (res) {
    console.log(res);
    return 456;
})["catch"](function (err) {
    console.log(err.message);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
});
Promise.resolve(123)
    .then(function (res) {
    throw new Error("Algo malo ha pasado");
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(789);
})["catch"](function (err) {
    console.log(err.message);
});
function iReturnPromiseAfter1Second() {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Hola mundo flipao tío"); }, 1000);
    });
}
Promise.resolve(123)
    .then(function (res) {
    return iReturnPromiseAfter1Second();
})
    .then(function (res) {
    console.log(res);
});
function readFileAsync(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, result) {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}
function loadJSONAsync(filename) {
    return readFileAsync(filename).then(function (res) {
        return JSON.parse(res);
    });
}
loadJSONAsync("good.json")
    .then(function (val) {
    console.log(val);
})["catch"](function (err) {
    console.log("good.json	error", err.message);
})
    .then(function () {
    return loadJSONAsync("absent.json");
})
    .then(function (val) {
    console.log(val);
})["catch"](function (err) {
    console.log("absent.json	error", err.message);
})
    .then(function () {
    return loadJSONAsync("bad.json");
})
    .then(function (val) {
    console.log(val);
})["catch"](function (err) {
    console.log("bad.json	error", err.message);
});
