// function test() {
// 	// console.log("hello manishkumar!")
// 	console.log(this);
// 	this.myname = "manish";
// }
// test();
// console.log(window.myname);


// // function constructors
// function circle (radius) {
// 	// console.log(this);
// 	this.radius = radius;

// 	// this.getarea=
// 	// function () {
// 	// 	return Math.PI * Math.pow(this.radius,2);
// 	// };
// }// circle();
// circle.prototype.getArea =
// function () {
// 	return Math.PI * Math.pow(this.radius,2);
// };
// var mycircle = new circle(10);
// // console.log(mycircle);
// console.log(mycircle.getArea());

// var myothercircle = new circle(20);
// console.log(myothercircle.getArea());





// USING NEW FOR CONSTRUCTORS!
// FUNCTION CONSTRUCTORS






// object literals and "this"
// literals
// this
// var literalcircle = {
// 	radius : 10,
// 	getArea: function () {
// 		var self = this;
// 		console.log(this);

// 	var increaseradius = function () {
// 		self.radius = 20;
//       }
//       increaseradius();
//       console.log(this.radius);

// 		return Math.PI * Math.pow(this.radius,2);
// 	}
// };

// console.log(literalcircle.getArea());