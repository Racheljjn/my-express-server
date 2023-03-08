function sum(a, b) {
  return new Promise((resolve, reject) => {
    
      resolve(a + b);
    
  });
}

Promise.any([Promise.reject("hello"), sum(1, 2), sum(3, 4), sum(5, 6)]).then(
  (r) => console.log(r)
);
