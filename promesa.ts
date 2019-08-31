const promises = new Promise((resolve, reject) => {
  resolve(123);
});
promises.then(res => {
  console.log("I	get	called:", res === 123);
});
promises.catch(err => {});

const promise = new Promise((resolve, reject) => {
  reject(new Error("Algo	malo	ha	pasado"));
});
promise.then(res => {
  
});
promise.catch(err => {
  console.log("Tengo	una	llamada:	", err.message);
});
