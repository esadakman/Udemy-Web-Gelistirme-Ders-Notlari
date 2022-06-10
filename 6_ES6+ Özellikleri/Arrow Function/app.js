// const merhaba = function(){
//     console.log("Merhaba");
// }

// merhaba()

//  Arrow Function

// const merhaba = () => {
//     console.log("Merhaba");
// }

// merhaba();

//  Tek parametre varsa paranteze gerek yok

// const merhaba = firstName => { // 
//     console.log("Merhaba", firstName);
// }

// merhaba("Esad","Akman");

//  Fonksiyonda tek işlem yapıyorsak süslü parantez ede gerek yok

// const merhaba = firstName => console.log("Merhaba", firstName);

// merhaba("Esad","Akman");

// const merhaba = (firstName, lastName) => { // 
//     console.log("Merhaba", firstName, lastName);
// }

// merhaba("Esad","Akman");

// const cube = function(x){
//     return x * x* x;
// }
// console.log(cube(4));

// fonksiyonumuz returm yapıyorsa return yazmaya da gerek yok 

const cube = x => x * x* x;

console.log(cube(4));