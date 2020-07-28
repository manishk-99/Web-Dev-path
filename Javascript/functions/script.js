// functions are FIRST CLASS DATATYPES
// functions ARE objects
function multiply(x,y) {
	return x * y;
}
// console.log(multiply(-5,4));
multiply.version = "v.1.0.0";
// console.log(multiply.toString());
console.log(multiply.version);


// FUNCTION FACTORY
function makemultiplier(multiplier) {
	var myfunc = function(x) {
		return multiplier * x;
	};
	return myfunc;
}
var multiplyby3 = makemultiplier(3);
console.log(multiplyby3(10));
var multiplyby2 = makemultiplier(2);
console.log(multiplyby2(100));


// PASSING FUNCTIONS AS ARGUMENTS
function dooperationon(x,operation) {
	return operation(x);
}
var result = dooperationon(5,multiplyby3);
console.log(result);
result = dooperationon(100,multiplyby2);
console.log(result);
