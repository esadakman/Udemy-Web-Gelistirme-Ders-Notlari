// let a = "Mustafa";
// let b = "Mustafa";

// if (a === b) {
//     console.log("Eşit");
// }

// let array1 = [1,2,3,4,5];
// let array2 = [1,2,3,4,5];

// referanslarda bellekte aynı adresi gösterip göstermediği sorgulanıyor
// if(array1 === array2) {
//     console.log("Eşit");
// }

// const person1 = {
//     name:"Mustafa",
//     age:25
// }
// const person2 = {
//     name:"Mustafa",
//     age:25
// }

// if(person1 === person2) {
//     console.log("Eşit");
// }


const cities = new Map();

const key = [1,2,3];

cities.set("Ankara",5);
cities.set("İstanbul",15);

cities.set(key,"Array")

console.log(cities.get("Ankara"));
