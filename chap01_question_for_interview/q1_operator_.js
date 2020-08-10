//  == : Equality operator.
// === : Identity operator.


// if (2 == ??)               // true

// 1. Number(2)
// 2. Number(2).valueOf()
// 3. Number(2).toString()
// 4. 2.valueOf()           // false
// 5. 2.toString()


// How to work (1) '==', '===', 

//             (2) valueOf(), toString()

//             (3) SyntaxError:
//                 TypeError:

a = { a: 1 }
b = a
b.a = 2
// a.a = ??    // 2
b === a        // true

