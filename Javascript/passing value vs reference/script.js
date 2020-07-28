// // copy by reference vs by value
// var a=7;
// var b=a;
// console.log("a: " + a);
// console.log("b: " + b);

// b=5;
// console.log("after b update: ");
// console.log("a: " + a);
// console.log("b: " + b);



// var a={x: 7 };
// var b=a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update: ");
// console.log(a);
// console.log(b);





// // pass by referencevs by value
// function changeprimitive(primvalue) {
// 	console.log("in changeprimitive...");
// 	console.log("before:");
// 	console.log(primvalue);

// 	primvalue=5;
// 	console.log("after:");
// 	console.log(primvalue);
// }
// var value=7;
// changeprimitive(value);
// console.log("after changeprimitive,orig value:")
// console.log(value);




// function changeobject(objvalue) {
// 	console.log("in changeobject...");
// 	console.log("before: ");
// 	console.log(objvalue);

// 	objvalue.x=5;
// 	console.log("after:");
// 	console.log(objvalue);
// }
// value={x: 7};
// changeobject(value);
// console.log("after changeobject,orig value:");
// console.log(value);





             //// S U M M A R Y
// * IMPORTANT! Passing by value vs . passing by reference
// * Simple rule to remember
//  . Primitive are passed/copied by value
//  . Objects are passed/copied by reference