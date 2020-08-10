console.log('global');

function exContext1 () {
  console.log("ex Context 1")
}

function exContext2 () {
  exContext1();
  console.log("ex Context 2")
}

exContext2();


// global
// ex Context 1
// ex Context 2