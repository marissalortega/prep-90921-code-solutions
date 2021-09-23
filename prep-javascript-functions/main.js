function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log(sum);

function ConvertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = ConvertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return ('Hello ' + name + '!');
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Answer = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Answer);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Answer = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Answer);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersAnswer = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersAnswer);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return (firstName + ' ' + lastName);
}

var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var cubeAnswer = cube(5);
console.log(cubeAnswer);
