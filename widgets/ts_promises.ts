
const first = new Promise<number>((resolve, reject) => {
  // use resolve or reject to determine fate of promise
  if (true) {
    resolve(123);
  } else  {
    reject(new Error('failed'));
  }
  

})

const second =
  first
    .then(res => {
      // control the fate of second
      return res + 47;
    })
    .then(res => {
      return res + 50;
    })
    .then(res => {
      return res + 344;
    })
    .catch(err => {
      console.log('ERROR', err.message)
    })