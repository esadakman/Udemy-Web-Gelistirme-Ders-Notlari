// Dinamik Element Silme

// Her zamanki gibi öncelikle elemntimizi seçiyoruz
const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Remove Metodu

// todos[3].remove(); // remove diyerek kolayca kaldırabiliriz

// Remove Child 

//Child metoduylada silebiliriz

todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[3]);


console.log(todos);
console.log(todoList);