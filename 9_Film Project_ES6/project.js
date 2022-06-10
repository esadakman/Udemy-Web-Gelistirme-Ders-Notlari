// Formumuzu seçmek için değişkenlerimizi belirliyoruz

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear =document.getElementById("clear-films");


// Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    // Submit olduğunda burda addFilm isimli fonksiyonumuz çalışacak
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        // bu fonksiyonumuz bize arrayimizi gönderecek ve bizde bunu UI'ın içindeki fonksiyona göndereceğiz
        UI.loadAllFilms(films);
    });

    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}


function addFilm(e){
    // yukarıda seçtiğimiz 3 elementin değerini almamız gerekiyor
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    
    // inputlarımızdan 3'ününde dolu olması gerekiyor bunu kontrol etmek için;

    if (title === "" || director === "" || url === ""){
        // Hata
        UI.displayMessages("Tüm alanları doldurun...","danger");
    }
    else { 
        // else durumunda 3 değerimizi aldığımızı varsayarak film constructor'ıyla filmimizi oluşturacağız 
        // Yeni Film
        const newFilm = new Film(title,director,url);
        // UI objesi üzerinden bir fonsiyon yazacağız ve filmimizi buraya göndererek arayüzümüze eklemeye çalışacağız
        UI.addFilmToUI(newFilm);  // Arayüze film ekleme
        Storage.addFilmToStorage(newFilm); // Storage'a Film Ekleme

        UI.displayMessages("Film başarıyla eklendi...","success");
    }
    
    UI.clearInputs(titleElement,urlElement,directorElement);

    // projenin submit edilmesini engellemek için her zaman ki gibi e.preventDefaultu kullanıyoruz
    e.preventDefault();
}

function deleteFilm(e){

    
    if (e.target.id === "delete-film") {
        
        if(confirm("Filmi silmek istediğinize emin misiniz ?")) {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Silme işlemi başarılı...","success");
        }
    }

}
function clearAllFilms(){

    if(confirm("Emin misiniz ?")) {

        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();

    }
}