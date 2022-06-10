//  console.log(this); // Global Scope - Üzerinde bulunduğumuz objeyi gösteriyor

//  const emp1 = { // Object Literal (basit objeler)
//      name:"esad",
//      age:25,
//      showInfos:function() {console.log("Bilgiler Gösteriliyor:");}
//  };
//  const emp2 = {
//      name:"ali",
//      age:25
//  }
 
//  emp1.salary = 4000 // Objemize yeni değer ekliyoruz

//  emp1.showInfos();

//  console.log(emp1);


// Constructor Functions - Yapıcı Fonksiyonlar

// Yapıcı fonksiyonumuzu yazdıktan sonra ondan objelerimizi üretebiliyoruz
// function Employee(){ // Yapıcı Fonksiyon
//     this.name = "Mustafa";

// }

// const emp1 = new
// const date = new Date();
// const date2 = new Date();

// const emp1 = new Employee();
// const emp2 = new Employee();

// console.log(emp1);
// console.log(emp2);


// function Employee(name,age,salary){ // Constructor Functions
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     this.showInfos = function(){
//         console.log(this.name,this.age,this.salary);
//     }

//     // console.log(this); // This şu an yapıcı fonksiyonumuzun içinde olduğu için objemizi bize verdi, globalde olsaydı window'u verirdi

// }

// const emp1 = new Employee("Esad",25,4000);
// const emp2 = new Employee("Murat",27,5000);

// emp1.showInfos();
// emp2.showInfos();

// console.log(emp1);
