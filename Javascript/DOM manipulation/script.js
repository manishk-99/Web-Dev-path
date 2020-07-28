// // // DOM manipulation
// // console.log(document.getElementById("title"));
// // console.log(document instanceof HTMLDocument);
// function sayhello() {
// 	var name = document.getElementById("name").value;
// 	var message = "<h2>Hello " + name + "!</h2>";
// 	// document.getElementById("content").textContent = message;
// 	document.getElementById("content").innerHTML = message;

// 	if(name === "student") {
// 		var title = document.querySelector("#title").textContent;
// 		title += " & Lovin' it!";
// 		document.querySelector("#title").textContent = title;	
// 	}
// };





// Event handling
document.addEventListener ("DOMContentLoaded",
	function (event) {
		function sayhello(event) {
	 // console.log(event);
	this.textContent = "Said it!";
	var name = document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>";
	// document.getElementById("content").textContent = message;
	document.getElementById("content").innerHTML = message;

	if(name === "student") {
		var title = document.querySelector("#title").textContent;
		title += " & Lovin' it!";
		document.querySelector("#title").textContent = title;	
	}
};

// Unobstrusive event binding
// document.querySelector("button").addEventListener("click",sayhello);


document.querySelector("button")
.onclick=sayhello;
document.querySelector("body")
.addEventListener("mousemove",
	function(event) {
		if(event.shiftKey === true) {
			console.log("x:" + event.clientX);
			console.log("y:" + event.clientY);
		}
       }
	);
}
);