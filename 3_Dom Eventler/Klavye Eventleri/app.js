// Klavye Eventleri


// keypress sadece harf ve rakamlar gözükür keypressde
// document.addEventListener("keypress",run);

// function run(e){
//     console.log(e.which); // bu özellikle basılan karakterin ascii değerinide bascaktır
//     console.log("e.key"); // sadece harf ve rakamları gösterir
    // console.log("Naber");
// }
 
// keydown burda ise bütün tuşlar gözükür
// document.addEventListener("keydown",run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }

// keyup

// document.addEventListener("keyup",run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    // console.log(e.key); // basılan tuş consolda çıktı
    // console.log(e.target); // işlem yapılan yeri consolda yazar


    // console.log(e.target.value); // event içindeki yazılanları toplu şekilde consola çıkarır
    // header.textContent = e.target.value; // inputa yazılanlar header.textcontenti güncelliyor
    e.preventDefault();

}