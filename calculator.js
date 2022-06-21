var welcome = alert("Welcome to Calculator");
var plus = "+";
var minus = "-";
var times = "*";
var division = "/"
var operation = prompt("Please type in the math operation you would like to complete: + for addition, - for subtraction, * for multiplication, / for division");
var number_1 = prompt("Please enter the first number:");
var number_2 = prompt("Please enter the second number:");

if (operation == "+") {
     alert(number_1 + number_2)
}
else if (operation == "-") {
     alert(number_1 - number_2)
}

else if (operation == "*") {
     alert(number_1 * number_2)
}

else if (operation == "/") {
     alert(number_1 / number_2)
}

else { alert("You have not typed  a valid operator, please run the program again.") }



// OR
var welcome = console.log("Welcome to Calculator");
var plus = "+";
var minus = "-";
var times = "*";
var division = "/"
var operation = prompt("Please type in the math operation you would like to complete: + for addition, - for subtraction, * for multiplication, / for division");
var number_1 = prompt("Please enter the first number:");
var number_2 = prompt("Please enter the second number:");

if (operation == "+") {
     console.log(number_1 + number_2)
}
else if (operation == "-") {
     console.log(number_1 - number_2)
}

else if (operation == "*") {
     console.log(number_1 * number_2)
}

else if (operation == "/") {
     console.log(number_1 / number_2)
}

else { alert("You have not typed  a valid operator, please run the program again.") }

