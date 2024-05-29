//№1 и №2
//Способ 1 (литеральный,описание свойств в фигурных скобках)
const student1 = {
  name: "Саша",
  age: 18,
  sayName() {
    console.log(`Меня зовут ${this.name}.`);
  },
  calculateAge() {
    console.log(`Мне ${this.age} лет.`);
  },
};

console.log(student1.name);
student1.sayName();
student1.calculateAge();

//Способ 2 (используя конструктор объектов):
function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.sayName = function () {
  console.log(`Меня зовут ${this.name}.`);
};

Student.prototype.calculateAge = function () {
  console.log(`Мне ${this.age} лет.`);
};

const student2 = new Student("Ваня", 19);
console.log(student2.name);
student2.sayName();
student2.calculateAge();

//№3
function INPITStudent(name, age, group) {
  this.name = name;
  this.age = age;
  this.group = group;
}

INPITStudent.prototype.sayName = function () {
  console.log(`Меня зовут ${this.name}.`);
};

INPITStudent.prototype.calculateAge = function () {
  console.log(`Мне ${this.age} лет.`);
};

const student3 = new INPITStudent("Сергей", 20, "б1-ИФСТ-13");
console.log(student3.name);
student3.sayName();
student3.calculateAge();
console.log(student3.group);
