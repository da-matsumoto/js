const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise1が終わった");
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
}).then(() => {
  console.log("promise2が終わった");
});

Promise.race([promise1, promise2]).then(() => {
  console.log("どれかひとつ終わった");
});