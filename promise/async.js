const alwaysLateBoy = async (ms) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  }).then(() => {
    console.log(`${ms}mså¾ããã`);
  });
};

alwaysLateBoy(2000);