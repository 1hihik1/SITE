//1
function hello_user() {
  alert("Привет, пользователь!");
}
//2
function hello_user2() {
  const userName = prompt("Введите ваше имя:");
  if (userName) {
    alert(`Привет, ${userName}!`);
  }
}
//3
function min(a, b) {
  return a < b ? a : b;
}

console.log(min(5, 3));
//4
function solveQuadraticEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    return "Нет действительных корней";
  }
}

// Пример использования:
const a = 1;
const b = -3;
const c = 2;
console.log(solveQuadraticEquation(a, b, c)); // Выведет [2, 1]

//5
function solveQuadraticEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    return "Нет действительных корней";
  }
}

function getQuadraticCoefficients() {
  const a = parseFloat(prompt("Введите коэффициент a:"));
  const b = parseFloat(prompt("Введите коэффициент b:"));
  const c = parseFloat(prompt("Введите коэффициент c:"));

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "Пожалуйста, введите числовые значения для всех коэффициентов.";
  }

  const result = solveQuadraticEquation(a, b, c);
  return result;
}

// Использование
const quadraticResult = getQuadraticCoefficients();
console.log(quadraticResult);
