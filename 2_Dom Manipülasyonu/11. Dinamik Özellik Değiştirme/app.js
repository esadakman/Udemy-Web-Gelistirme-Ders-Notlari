const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element = todoInput.classList;

// classList.add diyerek yeni classlar ekleyebiliriz
// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");

element = todoInput;
element = todoInput.placeholder; // hem bu şekilde 
element = todoInput.getAttribute("placeholder"); // hem de bu şekilde seçebiliriz
// bu yöntemlerlede değerlerimizi değiştirebiliriz
todoInput.setAttribute("placeholder","Naber"); 
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name");



element = todoInput;
// element = todoInput.hasAttribute("name");
// bu komutlada var mı yok mu kontrol ediyoruz





console.log(element);