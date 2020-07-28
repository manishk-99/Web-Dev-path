// C L O S U R E S
function makemultiplier (multiplier) {
	// var multiplier = 2;
	// function b() {
	// 	console.log("Multiplier is : " + multiplier)
	// }
	// b();
	
	return (
		function(x) {
			return multiplier * x;
		}
	);
}
var doubleall = makemultiplier(2);
console.log(doubleall(100));