console.log("1番目");

new Promise((resolve) => {
  setTimeout(() => {
    console.log("2番目");
    resolve();
  }, 1000);
}).then(() => {
  console.log("3番目");
});