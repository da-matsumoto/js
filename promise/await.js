const asyncFunc = async () => {
  let x, y;
  x = await new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  y = await new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  console.log(x + y);
}

asyncFunc();