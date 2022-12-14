let myPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
      const x = Math.random();
      if (x > 0.5) {
          resolve('Success');            
      }
      else {
          reject('Failed')
      }
  }, 1000)
})


myPromise.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
}).then(() => {
  console.log("Complete");
});