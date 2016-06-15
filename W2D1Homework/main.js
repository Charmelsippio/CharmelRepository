//Problem 1
var num1 = 10;
var num2 = 23;
function adding() {
	alert(num1 + num2);
}
adding();

var string1 = "Four for you, Glen Coco!";
var string2 = "You go, Glen Coco!"
function strings() {
	alert(string1 + " " + string2);
}
strings();
//I realized I am having difficulty when it comes to combining function with var and how those two things can be nested together, how to properly call and keep track of one over the other, and how to ensure syntax stays intact. 

//DRY version Problem 1
//I'm not sure how I would fit "console.log" to get this to return a figure w/o having to call the function.
function adding1 (num1, num2) {
	document.write(num1 + num2);
	console.log(num1 + num2);
}
adding1(3, 4);

function strings1 (strng1, strng2) {
	console.log(strng1 + " " + strng2);
}

strings1("Four for you Glen Coco!", "You go, Glen Coco!");

//---------------------------------------------------------------

//Problem 2
var tennis = ["serve", "return", "love", "fault"];
console.log(tennis.slice(0, 3));

//---------------------------------------------------------------

//Problem 3
function lessThan() {
	if (lessThan > 10) {
		alert("Your number is less than 10");
	} else {
		alert("Your number is greater than 10");
	}
}
lessThan(20);
//When I run this I get an error "Maximum call stack size exceeded". I am trying to tell JS that if a number greater than 10 is entered, then show the user that number. Even if I use a number less than 10 it throws the same error. Not sure what I did wrong. 
//If I remove the "()" around the else return "lessThan" then it returns the entire function instead of returning a number. I think I am missing a step.
//I fixed it by adding a string statement to the else return (I think...?)
//---------------------------------------------------------------

//Problem 6
function enterName() {
	var name = prompt ("Enter your name in the box");
	confirm ("Your name, " + name + ", was entered");
	console.log(name);
}
enterName();
//I wanted to get this to return in the confirm box the person's name, but I couldn't figure out how to do that. 
//---------------------------------------------------------------


//Optional Problem
var userPicks = prompt ("Enter Door 1, Door 2, Door 3");
var theDoors = function () {
	if (userPicks == "Door 1") {
		alert ("You win a 1972 Chevy Nova!");
	}
	else if (userPicks == "Door 2") {
		alert ("You win a big glass of air!");
	} 
	else if (userPicks == "Door 3") {
		alert ("You win an all-expenses-paid trip to North Korea!! Congrats, Commrade!");
	}
};
theDoors();
//I am not sure why, once a door is entered, the alert is not popping up for re: the corresponding door. 