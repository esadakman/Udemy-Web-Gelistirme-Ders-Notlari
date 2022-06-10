// Syntactic Sugar

// Ecmascript olmadan bu şekilde yazılıyor
// function Employee(salary, age, salary) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
// }
// Employee.prototype.showInfos = function () {
//   console.log(
//     "İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
//   );
// };
// const emp = new Employee("Mustafa",25,4000);

// console.log(emp);

// Ecmascriptle birlikte aşağıdaki şekilde yazabiliyoruz
class Employee {
  constructor(name, age, salary) { // Constuctor
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  showInfos() {
    console.log(
      "İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
    );
  }
}

const emp = new Employee("Esad", 26, 4000);

// console.log(emp);

emp.showInfos()


