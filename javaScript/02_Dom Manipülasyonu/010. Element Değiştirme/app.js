// REPLACE 
//<h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardbody = document.querySelectorAll(".card-body")[1]; 
// Önce değistireceğimiz elementi seçtik

const newElement = document.createElement("h3");
// yeni element oluşturduk

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar";
newElement.style.color = "#ccc";
newElement.style.background = "black";
newElement.style.border = "1px solid red";

//  yeni elementimize class, id ve text verdik

// Eski Element

const oldElement = document.querySelector("#tasks-title");
// Eski elementimizi seçiyoruz 

cardbody.replaceChild(newElement, oldElement)

console.log(cardbody);
console.log(newElement);