const promise = new Promise((resolve, reject) => {
  reject();
})
  .then(() => {
    console.log("resolveしたよ");
  })
  .catch(() => {
    console.log("rejectしたよ");
  });