// // STRING CONCATICATION
// var string="hello";
// string +="world";
// console.log(string + "!");



// // REGULAR MATH OPERATORS: +, -, *, /
// console.log((5+4)/3);
// console.log(undefined / 5);
// function test1(a)
// {
// 	console.log(a/5);
// }
// test1(3.1345);




  // // EQUALITY
  // var x=4,y=4;
  // if(x==y)
  // {
  // 	console.log("x=4 is equal to y=4");
  // }
  // x="4";
  // if(x==y)
  // {
  // 	console.log("x='4' is equal to y=4");
  // }


            // IT IS TYPE COERCION






 // // STRICT EQUALITY
 // var x=4,y=4;
 // x="4";
 // if(x===y)
 // {
 // 	console.log("strict: x='4' is equal to y=4")
 // }
 // else 
 // {
 // 	console.log("strict: x='4' is not equal to y=4")
 // }




 // // IF statement (all false)
 // if(null || undefined || "" || 0 || NaN)
 // {
 // 	console.log("this line wont ever execute");
 // }
 // else 
 // {
 // 	console.log("all false");
 // }

 // // IF statement (all true)
 // if(true && 1 && -1 && "hello" && "false")
 // {
 // 	console.log("all true");
 // }








 // // BEST PRACTISE FOR {} STYLE
 // // Curly braces on the same or next line...
 // // Is It just a STYLE?
 // function a()
 // {
 // 	return
 // 	{
 // 		name: "manish"
 // 	};
 // }
 // function b() {
 // 	return {
 // 		name: "hitesh"
 // 	};
 // }
 // console.log(a());
 // console.log(b());





 // FOR LOOP
 var i=0,sum =0;
 for (i=0;i<10;i++)
 {
 	console.log(i);
 	sum+=i;
 }
 console.log("sum of 0 through 9 is :" + sum);
