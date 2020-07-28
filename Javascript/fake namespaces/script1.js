(function (window) {
	 var manishgreeter = {};
 	 manishgreeter.name = "Manish";
 	 var greeting = "Hello! ";
	 manishgreeter.myname = function () {
  	 console.log(greeting + manishgreeter.name);
   }
   window.manishgreeter = manishgreeter;
})(window);
 // sayHello();