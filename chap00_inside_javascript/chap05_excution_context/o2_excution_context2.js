function exContext3 (param1, param2) {
  var a = 100, b = 200;
  
	function func () {
		return a + b;

    }

	return param1 + param2 + func();
}

console.log(exContext3(300, 400));

//             exContext3

// 1. Activation Object (= Variable Object)       * It can be accessed from inside the engine, but not from the user.                                     

// 2. arguments        ->      param1, param2

// 3. [[ Scope ]]      ->      List (: Scope Chain)                       

// 4. param1 : value           param2 : value     * This process only creates a variable(; instantiation) or internal function in memory! Initialization does not take place until the expression corresponding to each variable or function is executed! Thus, variables a and b are assigned undefined, and the execution of the expression begins after the variable object is created.
//    a : undefined            b : undefined
//    func             ->      Function Object    

// 5. this             ->      Object             * A value that uses 'this' keyword is assigned. If there is no object referenced by 'this', refer to the global object.
