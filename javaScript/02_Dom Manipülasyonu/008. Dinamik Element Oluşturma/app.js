// Yeni Element Oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");

const cardbody = document.getElementsByClassName("card-body")[1];

// elementlerimize id, class gibi özellikler veriyoruz
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com"
newLink.target = "_blank"

// Ve sıra isim vermeye geliyor
// Text Content 

// newLink.textContent = "Yeni Link Oluşturduk"; // textcontent'le isim ekliyebiliyoruz ancak bu yöntem pek güvenli değil, çünkü içerdeki bütün textleri siler

 // cardbody.textContent = "sadasdsadas"; // böyle yaptığımız için bütün cardbodynin içindeki textler değişti

// Text Node

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git")); // yeni bit text node oluşturduk bu şekilde
cardbody.appendChild(newLink); // bu komutlada yeni child ekledik parent'a



console.log(newLink);
