// Öncelikle yine elementimizi seçiyoruz
const filterInput = document.getElementById("filter");


//  Bu kodlada eventimizi yakalıyoruz ve bu elemente odaklandığımızda fonksiyonumuz oluşuyor  
// filterInput.onfocus = function(){
//          console.log("Naber");
// }

// aşağıdaki metodu kullandığımızda  tek fonksiyonda birden fazla işimizi halledebiliriz
// filterInput.addEventListener("focus",function(e){
    
    
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);

    
    // console.log("Naber");
// })

const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){         //bu functionı çalıştırdığımızda form üzerinde çalıştığımız için ve bu form default olarak sayfamıza gittiği için sayfamız sürekli yenileniyor. Bu durumu engellemek için  e.preventDefault(); yazıp fonksiyonumuzun sonuna ekliyoruz

    console.log("Submit Eventi");


    e.preventDefault();

}