//№0
console.log(true + false, "because 1+0=1");
console.log(
  12 / "6",
  "in arithmetic operations, strings are converted to numbers"
);
console.log("number" + 15 + 3, "js appends lines from left to right");
console.log(15 + 3 + "number", "first adds numbers and then appends strings");
console.log("1" > null, "because 1 is greater than 0");
console.log("foo" + +"bar", "++ only applies to numbers, so the error is");
console.log("true" == true, "js doesn't convert data when comparing using ==");
console.log(
  false == "false",
  "js doesn't convert data when comparing using =="
);
console.log(null == "", "js doesn't convert data when comparing using ==");

//№1
let myVariable = 42;
const variableType = typeof myVariable;

if (variableType === "number") {
  console.log("Переменная является числом.");
} else if (variableType === "string") {
  console.log("Переменная является строкой.");
} else {
  console.log("Переменная имеет другой тип данных.");
}

//№1
let zodiacSign = prompt("Введите ваш знак зодиака:");
switch (zodiacSign) {
  case "овен":
    alert("Привет овен!");
    break;
  case "телец":
    alert("Привет телец!");
    break;
  case "лев":
    alert("Привет лев!");
    break;
  case "дева":
    alert("Привет дева!");
    break;
  case "близнецы":
    alert("Привет близнецы!");
    break;
  case "рак":
    alert("Привет рак!");
    break;
  case "весы":
    alert("Привет весы!");
    break;
  case "стрелец":
    alert("Привет стрелец!");
    break;
  case "козерог":
    alert("Привет козерог!");
    break;
  case "рыбы":
    alert("Привет рыбы!");
    break;
  default:
    alert("Привет!");
}
//№2
console.log("Числа от 1 до 40 (с помощью цикла for):");
for (let i = 1; i <= 40; i++) {
  console.log(i);
}

console.log("Числа от 1 до 40 (с помощью цикла while):");
let j = 1;
while (j <= 40) {
  console.log(j);
  j++;
}

console.log("Числа от 1 до 40 (с помощью цикла do...while):");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 40);
//№4
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
let num3 = prompt("Введите третье число:");

let numbers = [num1, num2, num3];
numbers.sort(function (a, b) {
  return a - b;
});
//№5
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + "-четное");
  } else {
    console.log(i + "-нечетное");
  }
}
//№6
let num = prompt("Введите число больше 5:");
if (num > 5) {
  alert("Поздравляю!");
} else {
  while (num <= 5) {
    num = prompt("Введите число больше 5:");
    if (num > 5) {
      alert("Поздравляю!");
    }
  }
}
//№7
for (let i = 8; i <= 20; i += 2) {
  console.log(i);
}
//№8
let sum = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);
//№9
let number = prompt("Введите трехзначное число:");
let sum2 = 0;
let temp = number;
while (temp) {
  let remainder = temp % 10;
  sum2 += remainder * remainder * remainder;
  temp = Math.floor(temp / 10);
}

if (sum2 === number) {
  console.log("Число является числом Армстронга");
} else {
  console.log("Число не является числом Армстронга");
}
//№10
const height = 5;

for (let i = 1; i <= height; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
