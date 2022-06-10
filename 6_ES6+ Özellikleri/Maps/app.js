// Mapler - Key(Anahtar) - Value(Değer)

// let myMap = new Map(); // Map Oluşturma

// console.log(myMap);

// const Key1 = "Esad";
// const Key2 = {a:10, b:20};
// const Key3 = () => 2;

// Set

// myMap.set(Key1, "String Değer" );
// myMap.set(Key2, "Object Literal Değer");
// myMap.set(Key3, "Function Değer");


// Get

// console.log(myMap.get(Key1));
// console.log(myMap.get(Key2));
// console.log(myMap.get(Key3));

// console.log(myMap);

// Map Boyutu
// console.log(myMap.size);

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// console.log(cities);

// For Each

// cities.forEach(function(value,key){
//     console.log(key,value);
// })

// For Of

// for(let [key,value] of cities){ // Destructing
//     console.log(key,value);

// }

// Map Keys

// for(let key of cities.keys()){
//     console.log(key);
// }

// Map Values

// for(let value of cities.values()){
//     console.log(value);
// }

// Arraylerden Map Oluşturma

// const array = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);

// Maplerden Array Oluşturma

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

const array = Array.from(cities);
// [["Ankara",5],["İstanbul",15],["İzmir",4]]
console.log(array);