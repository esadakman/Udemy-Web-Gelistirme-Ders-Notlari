// const object = new Object(); // Object Literal
// const object2 = new Object();

// object.name="Mustafa";
// console.log(object);

/* function Employee(name,age){
    this.name = name;
    this.age = age;

    this.showInfos = function(){
        console.log("Bilgiler Gösteriliyor...");
    }
    this.toString = function(){
        console.log("Bu bir Employee Objesi");
    }
    
}

const emp1 = new Employee ("Mustafa",25)
console.log(emp1);


console.log(emp1.toString()); */

// ==============Prototype 2=================

function Employee(name,age){
    this.name = name;
    this.age = age;

    // ==== this.showInfos metodumuz constructorumuzda yer aldığı için her obje eklendiğinde bellekte ekstra yer kaplayacaktır. Bunu engellemek için metodumuzu prototipimizin içine yazmalıyız çünkü her objemizde prototip yer alır ve bu sayede tek bir metod kullanmış oluruz.
    /* this.showInfos = function(){
        console.log("İsim: " + this.name + " Yaş: " + this.age);
    } */

}

// === Aşağıdaki yöntem sayesinde metodumuzu prototipimize yazıyoruz ve objelerimiz bu prototipe sahip olduğu için otomatik olarak bu metodada sahip olmuş olacaklar
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}

const emp1 = new Employee("Esad", 25)
const emp2 = new Employee("Ali", 26)

emp2.showInfos();
console.log(emp1);
console.log(emp2);