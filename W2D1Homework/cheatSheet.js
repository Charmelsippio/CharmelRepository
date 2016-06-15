//Variables Example
//Varialbes allow you to give a name to values, and use said names to substitue the for the code. Variables are case sensitive.

var x = 10;
var y = 55;
console.log (x + y);
//output: 65

//Debugging Examples
	//Alerts
	x + y;
	alert("You did math!")
	//output: popup window with statment "You did math!"

	//Comments
	//This is an inactive comment only the devloper can see. Double slashes indicate a comment.

	//The console
	//The console allows you to run js script in the brower environment to review how it will behave without having to reload the browser page. In Chrome, you access the console by right clicking and choosing "Inspector".

//Different Data Types
	//String
	//A string is text or numbers set inside of quotes (either double or single). "This is 1 type of string." Numbers displayed as a string are not considered to have numeric value, but are simply text.

	//Numbers
	//A number is a numeric value entered WITHUOT quotes. Numbers can be positive or negative and be intergers and decimals. These are numbers: (4, 5, 2.4).

	//Booleans
	//Booleans are values set to either true or false. They are logic operators. (true)/(false)

//Arrays
//Arrays are variable lists of grouped items. You must define an array with a "var" tag and enter values in brackets '[]', add quotes for text, and seperate individual value with a comma outside of the quotes.

var dogs = ["german sheep dog", "collie", "golden retriver", "boxer"]

//Testing
//Testing allows you to see if your js is executing properly. You can test lines of js using console.log().
console.log(x/y);

//Logic
//Logic in js is used to test if something is true or false using logical operators, such as booleans, &&(andand), ||(or), !(not), as well as comparison operators, such as <= (less than), >= (greater than), == (equal to), etc. 
(20 > 5)
(true)

//Functions
//Functions tell the computer what to do and in what order, or steps, to do it in. 
function dayOfWeek(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) {

}
dayOfWeek(Monday); //Pretty sure this is wrong. 

//F1
function count() {
}
console.log(count(1 * 2));

//When I define a function, i.e. count(1, 2, 3) I'm not sure of the reason for doing this/what is the purpose (see dayOfTheWeek)?

//F2
var numbers = function choose() {
	if(numbers >3)
	return ("Your number is greater than 3"); {
		else {
			return ("Your number is less than 3");
		}
	}
}

choose(7); //My "if else" statements seem to always be broken. I all ways get the "Unexpected token else" error. 

//F3
function 