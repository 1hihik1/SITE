//№1
const array1 = [1, 2, 3, 4, 5];
console.log(array1);

const array2 = new Array(1, 2, 3, 4, 5);
console.log(array2);

const array3 = [];
array3.push(1);
array3.push(2);
array3.push(3);
array3.push(4);
array3.push(5);
console.log(array3);
//№2
console.log("5-й элемент массива array1:", array1[4]);
array1[4] = 10; // Изменяем значение
console.log("Измененный 5-й элемент массива array1:", array1[4]);

//№3
// Заданный массив
const myArray = [10, 20, 30, 40, 50];

// Функция для вывода значения элемента по индексу
function printArrayElement(array, index) {
  if (index < array.length) {
    console.log(array[index]);
  } else {
    console.log("Индекс выходит за пределы массива");
  }
}

// Запрос индекса у пользователя
let userInput = prompt("Введите индекс элемента массива:");

// Преобразование введенного значения в число
let index = parseInt(userInput);

// Вызов функции для вывода значения элемента
printArrayElement(myArray, index);

//№4
console.log("Элементы массива array1 (с помощью цикла for):");
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

console.log("Элементы массива array1 (с помощью метода forEach):");
array1.forEach((element) => {
  console.log(element);
});

//№5
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const combinedArray = arrayA.concat(arrayB);
console.log("Объединенный массив arrayA + arrayB:", combinedArray);

//№6
const lastElement = combinedArray.pop();
console.log("Удаленный последний элемент:", lastElement);

//№7
combinedArray.unshift(0);
console.log("Обновленный массив с добавленным элементом:", combinedArray);

//№8
const inputValues = prompt("Введите значения через запятую:");
const inputArray = inputValues
  .split(",")
  .map((value) => parseFloat(value.trim()));

const sqrtArray = inputArray.map((value) => {
  const parsedValue = parseFloat(value);
  return isNaN(parsedValue)
    ? "Некорректное значение"
    : Math.sqrt(Math.abs(parsedValue));
});

console.log("Массив квадратных корней:", sqrtArray);

// 9) Получите сегодняшнюю дату и выведите ее на экран
const currentDate = new Date();
console.log(currentDate);

// 10) Выведите сегодняшнюю дату в формате 11 ноября 2016 года
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const day = currentDate.getDate();
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();
console.log(`${day} ${month} ${year} года`);

// 11) напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50
function calculateRandomProduct() {
  const randomNumber1 = Math.floor(Math.random() * 51);
  const randomNumber2 = Math.floor(Math.random() * 51);
  return randomNumber1 * randomNumber2;
}

console.log(calculateRandomProduct());
