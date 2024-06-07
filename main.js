
// question no 1
 let city =prompt("enter city name:")
if (city.toLowerCase()==="karachi"){
    alert("welcome to the city of lights");
}else{
    alert("welcome to "+city);
}


// question no 2
let gender =prompt("enter your gender:");
if(gender.toLowerCase()==="male"){
    alert("Good morning Sir")
}
else if (gender.toLowerCase()==="female"){
    alert("Good morning Mam");

}
else{
    alert("put a correct gender name");
}


// question no 3



// question no 4


    let remainingFuel = parseFloat(prompt("Enter the remaining fuel in litres:"));

    if (remainingFuel < 0.25) {
        alert("Please refill the fuel in your car");
    } else {
        alert("You have enough fuel in your car");
    }



// question no 5
// a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
// the answer is true

// // b
var b = 82;
if (b++ === 83){
     alert("given condition for variable b is true");
 }
// // the answer is false 
// // c

 var c = 12;
 if (c++ === 13){
    alert("condition 1 is true");
 }
// // condition 1 alert nahi dikh raha kyunk 12===13false hai 

if (c === 13){
     alert("condition 2 is true");
}
// // condition 2 alert dikh raha hai kyunki c ab 13 hai 

 if (++c < 14){
     alert("condition 3 is true");
 }
// // condition 3 alert nhi dikh raha kyunki 14 < 14false hai
 if(c === 14){
     alert("condition 4 is true");
 }
// // condition 4 alert dikh raha kyunki c ab 14 hai 
// // condition 2 is true
// // condition 4 is true
// // d
 var materialcost = 20000;
 var laborcost = 20000;
var totalcost = materialcost + laborcost;
 if(totalcost === laborcost + materialcost)
 {
     alert ("the cost equals");
 }
// // alert mai "the cost equal hoga "
// // e
if(true)
{
    alert("true");

 }
if(false){
    alert("false");
}
// // yahan cdition true alert run hoga

// //f 
 if("car" < "cat"){
    alert("car is smaller than cat");
}
// // yahan alert execute hoga condition true hai

// // question no 6

let subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1: "));
let subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2: "));
let subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3: "));
let totalMarks = parseFloat(prompt("Enter total marks for each subject: "));

let totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

let grade, remarks;

if (percentage >= 90) {
    grade = 'A+';
    remarks = 'Excellent';
} else if (percentage >= 80) {
    grade = 'A';
    remarks = 'Very Good';
} else if (percentage >= 70) {
    grade = 'B';
    remarks = 'Good';
} else if (percentage >= 60) {
    grade = 'C';
    remarks = 'Fair';
} else if (percentage >= 50) {
    grade = 'D';
    remarks = 'Satisfactory';
} else {
    grade = 'F';
    remarks = 'Fail';
}
document.write("<h1>Mark Sheet</h1>");

document.write("\nTotal Marks:", totalMarks * 3,"<br>");
document.write("Marks Obtained:", totalObtainedMarks,"<br>");
document.write("Percentage:", percentage,"<br>");
document.write("Grade:", grade,"<br>");
document.write("Remarks:", remarks,"<br>");

// // question no 7
// Generate a random secret number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
const guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the guess is correct or close enough
if (guess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, wrong guess. The correct answer was " + secretNumber);
}

// question no 8
// Get user input
const number = parseInt(prompt("Enter a number to check if it's divisible by 3:"));

// Check if the number is divisible by 3 and display the message
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}
// question no 9
// Get user input
const num = parseInt(prompt("Enter a number to check if it's even or odd:"));

// Check if the number is even or odd and display the message
if (num % 2 === 0) {
    alert(num + " is an even number.");
} else {
    alert(num + " is an odd number.");
}
// question no 10
// Get user input for temperature
document.write(" <h3>Temperature check</h3>");
const temperature = parseFloat(prompt("Enter the temperature:"));

// Check the temperature and display the appropriate message
if (temperature > 40) {
    document.write("It is too hot outside.");
} else if (temperature > 30) {
    document.write("The Weather today is Normal.");
} else if (temperature > 20) {
    document.write("Today's Weather is cool.");
} else if (temperature > 10) {
    document.write("OMG! Today's weather is so Cool.");
} else {
    document.write("It is freezing outside!","<br>");
}
// question no 11
// Get user input for numbers and operation
const firstNumber = parseFloat(prompt("Enter the first number:"));
const secondNumber = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (+, -, *, /, %):");

// Perform the calculation based on the operation


if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    if (secondNumber === 0) {
        alert("Error: Division by zero is not allowed.");
    } else {
        result = firstNumber / secondNumber;
    }
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    alert("Error: Invalid operation entered.");
}

// Display the result if it's computed
if (result !== undefined) {
alert("Result: " + result);
}
// chapter no 12 to 13
// question no 1
const input = prompt("Enter a character (number or string):");
const charCode = input.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
    alert(input + " is a number.");
} else if (charCode >= 65 && charCode <= 90) {
    alert(input + " is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
    alert(input + " is a lowercase letter.");
} else {
    alert("Invalid input.");
}
// question no 2

let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
if (num1 === num2) {
    alert("The two integers are equal.");
} else {
    if (num1 > num2) {
        alert(num1 + " is larger than " + num2);
    } else {
        alert(num2 + " is larger than " + num1);
    }
}
// question no3
let Number = parseFloat(prompt("Enter a number:"));
// Check if the number is positive, negative, or zero and display the result
if (Number > 0) {
    alert("The number is positive.");
} else if (Number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}
// question no 4
// Get user input

let character = prompt("Enter a character:");
 let lowerCaseChar = character.toLowerCase();
if (lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u') {
    document.write("<br>","The character '" + character + "' is a vowel.");
} else {
    document.write("<br>","The character '" + character + "' is not a vowel.","<br>");
}

// question no 5
let correctPassword = "mahnoor22";
let userPassword = prompt("Enter your password:");
if (userPassword === "") {
    alert("Please enter your password");
} 
else {
    if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password");
    }
     else {
        alert("Incorrect password");
    }
}

// // question no 6
let greeting;
let hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
alert(greeting);

// // question no 7

let time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));
if (time >= 0 && time < 1200) {
    document.write("Good morning");
}
 else if (time >= 1200 && time < 1800) {
    document.write("Good afternoon");
} 
else if (time >= 1800 && time < 2400) {
    document.write("Good evening");
}
 else {
    document.write("Good night");
}

// chapter no 14 to 16

// // question no 1
// // Declare an empty array to store student names

//  let studentNames1 = [];

// // // question no 2
// // // Declare an empty array using array object notation

//   let studentsNames2 = new Array();

// // // question no 3

//   let colors = ["red", "green", "blue", "yellow"];

// // // question no 3

//   let counting = [1, 2, 3, 4, 5];

// // // question no 4
//  let quiz = [True, False, True, False, True]


// // // question no 5

//   let mixedArray = ["apple", 123, true, "banana", false, 456];

// // // question no 6
//   let availability = ["apple", "banana", "orange"];
//   availability["apple"] = true;
//   availability["banana"] = false;
//  availability["orange"] = true;

// // // question no 7
  let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
  document.write("<h2>Educational Qualifications in Pakistan:</h2>");
  document.write("<ul>");
  for (var i = 0; i < qualifications.length; i++) {
     document.write("<li>" + qualifications[i] + "</li>");
 }
 document.write("</ul>");


// question no 8
let student_Names = ["Michael", "John", "Emily"];
let stuMarks = [320, 420, 350];
document.write("<h2>Students Marks and Percentage:</h2>");

for (let i = 0; i < student_Names.length; i++) {
    let name = student_Names[i];
    let marks = stuMarks[i];
    let _percentage = (marks / 500) * 100;

    document.write("Score of " + name + " is " + marks + " and percentage is " + _percentage.toFixed(2) + "%<br>");
}

// question no 9

// 1. Initial Colors Array
let colors = ["Red", "Green", "Blue", "Yellow"];
document.write("<h2>Initial Colors:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 2. Add Color to the Beginning
let colorToAddBeginning = prompt("Beginning mein add karne ke liye color batao:");
colors.unshift(colorToAddBeginning);
document.write("<h2>After Adding Color to the Beginning:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 3. Add Color to the End
let colorToAddEnd = prompt("End mein add karne ke liye color batao:");
colors.push(colorToAddEnd);
document.write("<h2>After Adding Color to the End:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 4. Add Two More Colors to the Beginning
colors.unshift("Purple", "Orange");
document.write("<h2>After Adding Two Colors to the Beginning:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 5. Delete the First Color
colors.shift();
document.write("<h2>After Deleting the First Color:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 6. Delete the Last Color
colors.pop();
document.write("<h2>After Deleting the Last Color:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 7. Add Color at User-Defined Index
let indexToAdd = parseInt(prompt("Kaunsi position par color add karna hain (index number batao):"));
let colorToAddAtIndex = prompt("Color ka naam batao:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("<h2>After Adding Color at Index " + indexToAdd + ":</h2>");
document.write(colors.join(", ") + "<br><br>");

// 8. Delete Colors at User-Defined Index
let indexToDelete = parseInt(prompt("Kaunsi position se color(s) delete karna hain (index number batao):"));
let numberOfColorsToDelete = parseInt(prompt("Kitne colors delete karne hain (number batao):"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<h2>After Deleting " + numberOfColorsToDelete + " Color(s) from Index " + indexToDelete + ":</h2>");
document.write(colors.join(", ") + "<br><br>");

// question no 10

document.write("<h3>Ques no 10</h3>")
let studentScores = [320, 230, 480, 120];
document.write("Scores of Students : " + studentScores + "<br>");
studentScores.sort((a, b) => a - b);
document.write("Ordered Scores of Students :  " + studentScores.join(", ") + "<br>");

// question no 11

document.write("<h3>Ques no 11</h3>")
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 4);
document.write("<h4>Cities List :</h4>");
document.write(cities.join(", ") + "<br>");
document.write("<h4>Selected Cities List:</h4>");
document.write(selectedCities.join(", ") + "<br>");

// Ques no 12
document.write("<h3>Ques no 12</h3>")
let multipleString = ["This", "is", "my", "cat"]
document.write("Array : " + "<br>" + multipleString + "<br>");
let singleString = multipleString.join(" ");
document.write("Single String Array : " + "<br>" + singleString + "<br>");

// question no 13

document.write("<h3>Ques no 13</h3>")
let devicesFifo = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices : " + "<br>" + devicesFifo + "<br>");
for (let i = 0; i < devicesFifo.length; i++) {
    document.write("Out : ", "<br>", devicesFifo[i], "<br>");
}

// Ques no 14
document.write("<h3>Ques no 14</h3>");
let devicesLifo = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices : " + "<br>" + devicesLifo + "<br>");
for (let i = devicesLifo.length - 1; i >= 0; i--) {
    document.write("Out : ", "<br>", devicesLifo[i], "<br>");
}

// QUESTION NO 15

document.write("<h3>Ques no 15</h3>");
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");

// CHAPTER 17 TO 20 //

// QUESTION NO 1
document.write("<h3>Ques no 1</h3>");
let multidimensionalArray = [];
document.write("Empty multidimensional array:", multidimensionalArray);

// QUESTION  no 2
document.write("<h3>Ques no 2</h3>");
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
for (let i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" ") + "<br>");
}

// QUESTION no 4
document.write("<h3>Ques no 4</h3>");
let tableNum = parseInt(prompt("Enter a Number to Show its multiplication table : "));
let tableLength = parseInt(prompt("Enter the length to Show the multiplication table : "));

if (isNaN(tableNum) || isNaN(tableLength) || tableNum <= 0 || tableLength <= 0) {
    document.write("Please enter valid positive numbers for both inputs.");
} else {
    document.write(`<h3>Multiplication Table of ${tableNum}</h3>`);
    for (let i = 1; i <= tableLength; i++) {
        document.write(`${tableNum} x ${i} = ${tableNum * i}<br>`);
    }
}

// QUESTION no 5
document.write("<h3>Ques no 5</h3>");
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
for (let i = 0; i < fruits.length; i++) {
    document.write(`element at index ${i} is ${fruits[i]}<br>`);
}

// QUESTION no 6
document.write("<h3>Ques no 6</h3>");
// a. Counting: 1 to 15
document.write("a. Counting: ");
for (let counting = 1; counting <= 15; counting++) {
    document.write(counting);
    if (counting < 15) {
        document.write(", ");
    }
}
document.write("<br>");

// b. Reverse counting: 10 to 1
document.write("b. Reverse counting: ");
for (let Reverse = 10; Reverse >= 1; Reverse--) {
    document.write(Reverse);
    if (Reverse > 1) {
        document.write(", ");
    }
}
document.write("<br>");

// c. Even: 0 to 20 (even numbers)
document.write("c. Even: ");
for (let even = 0; even <= 20; even += 2) {
    document.write(even);
    if (even < 20) {
        document.write(", ");
    }
}
document.write("<br>");

// d. Odd: 1 to 19 (odd numbers)
document.write("d. Odd: ");
for (let odd = 1; odd <= 19; odd += 2) {
    document.write(odd);
    if (odd < 19) {
        document.write(", ");
    }
}
document.write("<br>");

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("e. Series: ");
for (let series = 2; series <= 20; series += 2) {
    document.write(series + "k");
    if (series < 20) {
        document.write(", ");
    }
}

// QUESTION no 7
document.write("<h3>Ques no 7</h3>");
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter a food item to search:");
userInput = userInput.toLowerCase();
let foundIndex = false;
let found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) {
        found = true;
        foundIndex = i;
        break;
    }
}
if (found) {
    document.write(userInput + " is available at index " + foundIndex + " in the list.");
}
else {
    document.write("We are sorry " + userInput + " is not available in our bakery .");
}

// QUESTION NO 8

document.write("<h3>Ques no 8</h3>");
let L = [24, 53, 78, 91, 12];
let largestNumber = L[0];
let arrayItems = "";
for (let i = 0; i < L.length; i++) {
    arrayItems += L[i];
    if (i < L.length - 1) {
        arrayItems += ", ";
    }
    if (L[i] > largestNumber) {
        largestNumber = L[i];
    }
}
document.write("Array Items: ", arrayItems, "<br>");
document.write("The largest number in the array is: ", largestNumber);

// QUESTION NO9

document.write("<h3>Ques no 9</h3>");
let S = [24, 53, 78, 91, 12];
let smallestNumber = S[0];
let arraySmallest = "";
for (let i = 0; i < S.length; i++) {
    arraySmallest += S[i];
    if (i < S.length - 1) {
        arraySmallest += ", ";
    }
    if (S[i] < smallestNumber) {
        smallestNumber = S[i];
    }
}
document.write("Array Items: ", arraySmallest, "<br>");
document.write("The smallest number in the array is: ", smallestNumber);

// QUESTION NO 10 
document.write("<h3>Ques no 10</h3>");
for (i = 5; i <= 100; i += 5) {
    document.write(i);
    if (i < 100) {
        document.write(", ");
    }
}

// CHAPTER NO 21 TO 25
// QUESTION NO  1
let fName = prompt("Please enter your first name:");
let lName = prompt("Please enter your last name:");
let fulName = `${fName} ${lName}`;
document.write(`Hello, ${fulName}! Welcome!`);

// QUESTION NO  2
document.write("<h3>Ques no 2</h3>");
let mobile = prompt("Tell me your fav mobile model : ");
document.write("Your Favorite Mobile Model is : " + mobile + "<br>" + "Length of String is : " + mobile.length)

// QUESTION NO 3
document.write("<h3>Ques no 3</h3>");
let stringWord = "Pakistani";
document.write("string : " + stringWord + "<br>" + "Index of n : " + stringWord.indexOf('n'));

// QUESTION NO 4
document.write("<h3>Ques no 4</h3>");
let stringLast = "Hello World";
document.write("string : " + stringLast + "<br>" + "Last Index of L : " + stringLast.lastIndexOf('l'));

// QUESTION NO 5
document.write("<h3>Ques no 5</h3>");
let stringChar = "Pakistani";
document.write("string : " + stringChar + "<br>" + " Character at index 3 : " + stringChar.charAt('3'));

// QUESTION NO 6
document.write("<h3>Ques no 6</h3>");
let firstName = prompt("Enter your First name : ");
let lastName = prompt("Enter your Last name : ");
let fullName = firstName + " " + lastName;
alert("Wellcome dear " + fullName);

// QUESTION NO 7

document.write("<h3>Ques no 7</h3>");
let stringCity = "Hyderabad";
document.write("City : " + stringCity + "<br>" + " After Replacement : " + stringCity.replace("Hyder" , "Islam"));

// QUESTION NO  8
document.write("<h3>Ques no 8</h3>");
let stringMsg = "Ali and Sami are best friends. They play cricket and football together.";
let modifiedMsg = stringMsg.replace(/and/g , "&");
document.write("string : " + stringMsg + "<br>" + " Modified Message : " + modifiedMsg );

// QUESTION NO 9
document.write("<h3>Ques no 9</h3>");
let val = "472";
let valNum = parseInt(val);
document.write("Value: " + val + "<br>");
document.write("Type: " + typeof valNum + "<br>");
let value = 472;
let valStr = value.toString();
document.write("Value: " + value + "<br>");
document.write("Type: " + typeof valStr);

// QUESTION NO 10
document.write("<h3>Ques no 10</h3>");
let valUpper = prompt("Enter a word string for converting : ") ;
document.write("User Input : " + valUpper + "<br>" + "Upper Case : " + valUpper.toUpperCase());

// QUESTION NO 11
document.write("<h3>Ques no 11</h3>");
let userTitleCase = prompt("Enter some text to convert in title case : ");
let words = userTitleCase.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}
let titleCaseInput = words.join(" ");
document.write("User Input : " + userTitleCase + "<br>");
document.write("Title Case: " + titleCaseInput);

// QUESTION NO  12
document.write("<h3>Ques no 12</h3>");
let numInt = 35.36;
let numStr = numInt.toString();
let convertResult = numStr.replace('.', '');
document.write("Original Number : " + numInt + "<br>");
document.write("Convert Result : " + convertResult);

// QUESTION NO 13
document.write("<h3>Ques no 13</h3>");
let invalidChars = "@.,!";
let username = prompt("Enter a username (no special symbols [@ . , !]):");
let containsInvalidChar = false;
for (let i = 0; i < invalidChars.length; i++) {
    if (username.indexOf(invalidChars[i]) !== -1) {
        containsInvalidChar = true;
        break;
    }
}
if (containsInvalidChar) {
    alert("Invalid username! Please avoid using special symbols [@ . , !].");
} else {
    document.write("Valid username: " + username);
}

// QUESTION NO 14
document.write("<h3>Ques no 14</h3>");
let A2 = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput2 = prompt("Enter a food item to search:");
userInput2 = userInput2.toLowerCase();
let foundIndex2 = false;
let found2 = false;
for (let i = 0; i < A2.length; i++) {
    if (A2[i].toLowerCase() === userInput2) {
        found2 = true;
        foundIndex2 = i;
        break;
    }
}
if (found2) {
    document.write(userInput2 + " is available at index " + foundIndex2 + " in the list.");
}
else {
    document.write("We are sorry " + userInput2 + " is not available in our bakery .");
}

// QUESTION NO 15
document.write("<h3>Ques no 15</h3>");
let password = prompt("Enter your password:");
if (password.length < 6) {
    password = prompt("Password should be at least 6 characters long. Please enter again:");
} else if (!isNaN(password[0])) {
    password = prompt("Password shouldn't start with a number. Please enter again:");
} else if (!/[a-zA-Z]/.test(password)) {
    password = prompt("Password should contain at least one letter. Please enter again:");
} else if (!/\d/.test(password)) {
    password = prompt("Password should contain at least one number. Please enter again:");
}
alert("Password is valid!");

// QUESTION NO 16
document.write("<h3>Ques no 16</h3>");
let university = "University of Karachi";
let universityArray = university.split("");
for (let i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}

// QUESTION NO  17
document.write("<h3>Ques no 17</h3>");
let userInput3 = prompt("Enter a string:");
let lastCharacter = userInput3.charAt(userInput3.length - 1);
document.write("User Input : " + userInput3 + "<br>" + "The last character of your input is: " + lastCharacter);

// QUESTION NO 18

document.write("<h3>Ques no 18</h3>");
let sentence = "The quick brown fox jumps over the lazy dog";
let lowerCaseSentence = sentence.toLowerCase();
let word = lowerCaseSentence.split(" ");
let count = 0;
for (let i = 0; i < word.length; i++) {
    if (word[i] === "the") {
        count++;
    }
}
document.write("Text : " + sentence + "<br>" + "There are " + count + " occurences  of word 'the' .");
