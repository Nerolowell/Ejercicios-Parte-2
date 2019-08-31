import fs = require('fs');

Promise.resolve(123)
  .then(res => {
    console.log(res);
    return 456;
  })
  .then(res => {
    console.log(res);
    return Promise.resolve(123);
  })
  .then(res => {
    console.log(res);
    return Promise.resolve(123);
  });

Promise.reject(
  new Error(
    "Algo malo ha sucedido chaval, córrele, AY PAPANTLA TUS HIJOS VUELAAAAAAAAAAAN"
  )
)
  .then(res => {
    console.log(res);
    return 456;
  })
  .then(res => {
    console.log(res);
    return Promise.resolve(123);
  })
  .then(res => {
    console.log(res);
    return Promise.resolve(123);
  })
  .catch(err => {
    console.log(err.message);
  });

Promise.reject(new Error("Algo malo ha pasado tío, joder."))
  .then(res => {
    console.log(res);
    return 456;
  })
  .catch(err => {
    console.log(err.message);
    return Promise.resolve(123);
  })
  .then(res => {
    console.log(res);
  });

Promise.resolve(123)
  .then(res => {
    throw new Error("Algo malo ha pasado");
    return 456;
  })
  .then(res => {
    console.log(res);
    return Promise.resolve(789);
  })
  .catch(err => {
    console.log(err.message);
  });

function iReturnPromiseAfter1Second(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("Hola mundo flipao tío"), 1000);
  });
}
Promise.resolve(123)
  .then(res => {
    return iReturnPromiseAfter1Second();
  })
  .then(res => {
    console.log(res);
  });


function readFileAsync(filename: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function loadJSONAsync(filename: string): Promise<any> {
  return readFileAsync(filename).then(function(res) {
    return JSON.parse(res);
  });
}

loadJSONAsync("good.json")
  .then(function(val) {
    console.log(val);
  })
  .catch(function(err) {
    console.log("good.json	error", err.message);
  })

  .then(function() {
    return loadJSONAsync("absent.json");
  })
  .then(function(val) {
    console.log(val);
  })
  .catch(function(err) {
    console.log("absent.json	error", err.message);
  })

  .then(function() {
    return loadJSONAsync("bad.json");
  })
  .then(function(val) {
    console.log(val);
  })
  .catch(function(err) {
    console.log("bad.json	error", err.message);
  });
