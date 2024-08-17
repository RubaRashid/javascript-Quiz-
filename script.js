
alert("Javascript Quize Started \n Please select a, b, c and d \nBest of Luck");
var mcqsMarks = 0;



// var q1 = prompt("1. What is the purpose of the var keyword in JavaScript?\n a. To declare a constant variable \nb. To declare a global variable \nc. To declare a local variable\nd. To declare a function")
// if (q1 === 'c') {
//     mcqsMarks++;
// }


// var q2 = prompt("2. Which loop is used to iterate over an array in JavaScript? \na) For loop \nb) While loop \nc) Do-while loop \nd) For-in loop")
// if (q2 === 'a') {
//     mcqsMarks++;
// }


// var q3 = prompt("3. What is the correct way to declare an array in JavaScript? \na) var myArray = []; \nb) var myArray = {} \nc) var myArray = new Array(); \nd) var myArray = Array();")
// if (q3 === 'a') {

//     mcqsMarks++
// }


// var q4 = prompt("4. What is the purpose of the if-else statement in JavaScript? \na) To declare a variable \nb) To iterate over an array \nc) To make decisions based on conditions \nd) To display an alert message")
// if (q4 === 'c') {
//     mcqsMarks++;
// }



// var q5 = prompt("5. What is the difference between prompt() and alert()? \na) prompt() displays a message, while alert() gets user input \nb) prompt() gets user input, while alert() displays a message \nc) prompt() is used for loops, while alert() is used for conditional statements \nd) prompt() is used for arrays, while alert() is used for variables")
// if (q5 === 'b') {
//     mcqsMarks++;
// }



// var q6 = prompt("6. What are the rules for declaring a variable name in JavaScript? (Select all that apply) \na) Must start with a letter or underscore \nb) Must start with a number \nc) Can contain special characters \nd) Cannot contain spaces")
// if (q6 === 'a') {

//     mcqsMarks++
// }



// var q7 = prompt("7. What is the purpose of the break statement in a loop? \na) To continue the loop \nb) To exit the loop \nc) To restart the loop \nd) To pause the loop")
// if (q7 === 'b') {

//     mcqsMarks++
// }

// var q8 = prompt("8. How do you access the first element of an array in JavaScript? \na) myArray[0] \nb) myArray[1] \nc) myArray.first() \nd) myArray.last()")
// if (q8 === 'a') {
//     mcqsMarks++;
// }



// var q9 = prompt("9. What is the purpose of the typeof operator in JavaScript? \na) To declare a variable \nb) To check the data type of a variable \nc) To convert a data type \nd) To display an alert message")
// if (q9 === 'b') {
//     mcqsMarks++;
// }



// var q10 = prompt("10. What is the correct way to declare a constant variable in JavaScript? \na) var PI = 3.14; \nb) let PI = 3.14; \nc) const PI = 3.14; \nd) constant PI = 3.14;")
// if (q10 === 'c') {

//     mcqsMarks++
// }


var arrQ =["1. What is the purpose of the var keyword in JavaScript?\n a. To declare a constant variable \nb. To declare a global variable \nc. To declare a local variable\nd. To declare a function",
"2. Which loop is used to iterate over an array in JavaScript? \na) For loop \nb) While loop \nc) Do-while loop \nd) For-in loop",
"3. What is the correct way to declare an array in JavaScript? \na) var myArray = []; \nb) var myArray = {} \nc) var myArray = new Array(); \nd) var myArray = Array();",
"4. What is the purpose of the if-else statement in JavaScript? \na) To declare a variable \nb) To iterate over an array \nc) To make decisions based on conditions \nd) To display an alert message",
"5. What is the difference between prompt() and alert()? \na) prompt() displays a message, while alert() gets user input \nb) prompt() gets user input, while alert() displays a message \nc) prompt() is used for loops, while alert() is used for conditional statements \nd) prompt() is used for arrays, while alert() is used for variables",
"6. What are the rules for declaring a variable name in JavaScript? (Select all that apply) \na) Must start with a letter or underscore \nb) Must start with a number \nc) Can contain special characters \nd) Cannot contain spaces",
"7. What is the purpose of the break statement in a loop? \na) To continue the loop \nb) To exit the loop \nc) To restart the loop \nd) To pause the loop",
"8. How do you access the first element of an array in JavaScript? \na) myArray[0] \nb) myArray[1] \nc) myArray.first() \nd) myArray.last()",
"9. What is the purpose of the typeof operator in JavaScript? \na) To declare a variable \nb) To check the data type of a variable \nc) To convert a data type \nd) To display an alert message",
"10. What is the correct way to declare a constant variable in JavaScript? \na) var PI = 3.14; \nb) let PI = 3.14; \nc) const PI = 3.14; \nd) constant PI = 3.14;"];

var arrAns =['c', 'a' , 'a' , 'c' , 'b' , 'a', 'b' , 'a' , 'b' , 'c'];

for(var i=0 ; i< arrQ.length ; i++){
    var answer = prompt(arrQ[i]);
    if(answer === arrAns[i]){
        mcqsMarks++ ;
    }
}


alert("Check your Result in Console");
console.log("Your Marks is " + mcqsMarks);
if (mcqsMarks === 10 || mcqsMarks === 9 || mcqsMarks === 8) {
    console.log("** Passed **  Best Perfomance! keep it up");
}
else if (mcqsMarks === 7 || mcqsMarks === 6 || mcqsMarks === 5) {
    console.log("** Passed **   Average Perfomance! keep it up");
}
else {
    console.log("** Failed **  !Need Hard Work!");
}