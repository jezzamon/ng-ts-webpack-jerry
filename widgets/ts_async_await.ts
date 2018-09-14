async function foofoo() {
  return 123;
}

foofoo().then(value => {
  console.log(value);
})

const notAPromise = 456;

const promiseThatWillResolve = new Promise(res => res(123));

const promiseThatWillReject = new Promise((res, rej) => rej(new Error('Hello')));

async function foo() {
  const res1 = await notAPromise;
  console.log({ forNotAPromse: res1});

  const res2 = await promiseThatWillResolve;
  console.log({ forPromiseThatWillResolve: res2});

  try {
    const res3 = await promiseThatWillReject;
    console.log("I will never get called as error is thrown in previous line");
  }
  catch(e) {
    console.log({forPromiseThatWillReject: e.message})
  }

}

foo();

async function waiting() {
  console.log('Waiting 5 seconds');
  await new Promise(resolve => setTimeout(resolve => resolve(123), 5000));
  console.log('Done waiting')
}

waiting();



/********************************************** */
// an async function to simulate loading an item from some server
function loadItem(id: number): Promise<{ id: number }> {
  return new Promise((resolve) => {
      console.log('loading item', id);
      setTimeout(() => { // simulate a server delay
          resolve({ id: id });
      }, 1000);
  });
}

// Chaining
let item1, item2;
loadItem(1)
  .then((res) => {
      item1 = res;
      return loadItem(2);
  })
  .then((res) => {
      item2 = res;
      console.log('done');
  }); // overall time will be around 2s

// Parallel
Promise.all([loadItem(1), loadItem(2)])
  .then((res) => {
      [item1, item2] = res;
      console.log('done');
  }); // overall time will be around 1s