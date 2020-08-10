// 1. function call 
// 2. method call 
// 3. construct function call 
// 4. apply, call, bind call


var foo = function () {
  console.dir(this);
};

// 1. function call 
foo(); // window
// window.foo();

// 2. method call 
var obj = { foo: foo };
obj.foo(); // obj

// 3. construct function call 
var instance = new foo(); // instance

// 4. apply, call, bind call
var bar = { name: 'bar' };
foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar