const alwaysLateBoy = async (ms) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  }).then(() => {
    console.log(`${ms}ms待たせた`);
  });
};

alwaysLateBoy(2000);