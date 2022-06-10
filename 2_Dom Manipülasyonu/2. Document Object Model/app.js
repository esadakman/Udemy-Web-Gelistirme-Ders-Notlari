// value = document;

// value = document.scripts;
// value = document.scripts.length;
// value = document.scripts[1];

// value = document.links;
// value = document.links.length;
// value = document.links[0];
// value = document.links[document.links.length - 1];
// value = document.links[document.links.length - 1].getAttribute("href");
// value = document.links[document.links.length - 1].getAttribute("class");
// value = document.links[document.links.length - 1].className;
// value = document.links[document.links.length - 1].classList;

// //  Formlar

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];

// value = document.forms["form"];
// value = document.forms[0].id;
// value = document.getElementById("todo-form");

// value = document.forms[0].getAttribute("name");
// value = document.forms[0].method;
// console.log(value);

// ! Element Seçme =====================================
//  ! ID

// let element;

// element = document.getElementById("todo-form");
// element = document.getElementById("tasks-title");

// ! Element class'a göre seçme

// element = document.getElementsByClassName("list-group-item");
// element = document.getElementsByClassName("list-group-item")[0];

// element = document.getElementsByClassName("card-header");

// Element Tag'e Göre Seçme

// element = document.getElementsByTagName("div");
// element = document.getElementsByTagName("div")[2];

// ? Query Selector =====================================
// ? CSS Selector (sayfada ilk bulduğu elementi döner)

// element = document.querySelector("#todo-form");
// element = document.querySelector("#tasks-title");

// element = document.querySelector(".list-group-item");

// element = document.querySelector("li");
// element = document.querySelector("div");

// ? Query SelectorAll Tüm Elementler'i seçer ===========
// ? Array'lere benziyor. forEach gibi functionları kullanabiliyoruz

// element = document.querySelectorAll(".list-group-item"); // Node List

// element.forEach(function (el) {
//   console.log(el);
// });

// console.log(element);

// ! Elementleri seçme ve özelliklerini değiştirme

// const element = document.querySelector("#clear-todos");

// ? Element Özellikleri

// console.log(element.id);
// console.log(element.classList);
// console.log(element.className);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

//  ! Style ve Element özellikleri değiştirme

// element.className = "btn btn-success"; // class değerini değiştirebiliyoruz
// element.style.color = "#000"; // style değiştirebiliyoruz
// element.style.marginLeft = "1rem"; // margin değerini değiştirebiliyoruz
// element.href = "http://www.google.com.tr";
// element.target = "_blank;";

// console.log(element.textContent);
// element.textContent = "silin";
// element.textContent = "<span>silin</span>";
// element.innerHTML = "<span style='font-weight:900 ; color:red' > Silin </span>";

// let element2 = document.querySelector("li:last-child");
// element2 = document.querySelector("li:nth-child(2)");
// element2 = document.querySelector("li:nth-child(3)");
// element2 = document.querySelectorAll("li:nth-child(odd)");
// element2 = document.querySelectorAll("li:nth-child(even)");

// element2.forEach(function (el) {
//   el.style.background = "#ccc";
//   el.style.color = "red";
// });

// const elements = document.querySelectorAll(".list-group-item"); // Node lists
// elements.forEach(function (el) {
//   el.style.color = "red";
//   el.style.background = "#eee";
// });

// console.log(element2);
// console.log(element);

// ! Dom Elementleri Üzerinde Gezinme
// let value;

// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

// value = todoList;
// value = todo;
// value = cardrow;

// Child Nodes - Text Dahil

// value = todoList.childNodes;
// value = todoList.childNodes[0];

// Childrem - Element

// value = todoList.children;
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[0];
// value = todoList.children[2].textContent = "Değişti";

// value = cardrow;
// value = cardrow.children;
// value = cardrow.children[2];
// value = cardrow.children[2].children[1].textContent = "Burasıda Değişti";

// value = todoList;
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;
// value = todoList.children.length;
// value = todoList.childElementCount; // ! child elementlerin sayısı

// value = cardrow;
// value = cardrow.parentElement; // parent elementi döndürür
// value = cardrow.parentElement.parentElement; // çift parent yaparak body'ye ulaştık

// Element Kardeşleri

// value = todo;
// value = todo.previousElementSibling; // ? bir önceki elemente gidiyoruz
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;

// value = todo.previousElementSibling.previousElementSibling; // ? gidecek başka sibling yoksa null döner

// console.log(value);

// ! Dinamil Elementleri Oluşturma

// * Yeni element Oluşturma

/* <a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> */

// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com.tr";
// newLink.target = "_blank";

// newLink.appendChild(document.createTextNode("Change page"));
// cardbody.appendChild(newLink);

// console.log(cardbody);

// console.log(newLink);

// *  Text Content

// console.log(cardbody);
// newLink.textContent = "Farklı sayfaya git";
// cardbody.textContent = "Frasdasd"; //? ttext content olduğunda cardbody'nin içinde ki bütün elementleri gönderip, bizim gönderdiğimiz yazıyı alır

// * text Node (bir element gibi çocuk olarak ekleyebiliyoruz)

// const text = document.createTextNode("Naber");
// cardbody.appendChild(text);
// console.log(cardbody);

// console.log(newLink);

// ! Dinamik ELement Silme

// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");

// // * Remove metodu

// // todos[0].remove();

// // * Remove Child

// // todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todos[0]);

// console.log(todoList);
// console.log(todos);

// ! Dinamik Attribute Değiştime,silme, ekleme

// const todoInput = document.getElementById("todos");
// let element;

// element = todoInput;
// element = todoInput.classList;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass1");
// todoInput.classList.remove("newClass");

// element = todoInput;
// element = todoInput.placeholder;
// element = todoInput.getAttribute("placeholder");
// todoInput.setAttribute("placeholder", "naber");
// todoInput.setAttribute("title", "Input");
// ele

// console.log(element);

// ! Event Listeners
const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm);

function submitForm(e) {
  console.log("Submit Eventi");
  e.preventDefault();
}

// filterInput.onfocus = () => {
//   console.log("Naber");
// };

// filterInput.addEventListener("focus", function (e) {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.target.placeholder);
//   console.log(e.target.className);
// });
