const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(`dog`);
  }, 1000);
});

myPromise.then((result) => {
  console.log(`Promise: `, result);
});

const myObservable = rxjs.observable((observer) => {
  setTimeout(() => {
    observer.next(`dog`);
  }, 1000);
});

myObservable.subscribe((result) => {
  console.log(`Observable: `, result);
});
