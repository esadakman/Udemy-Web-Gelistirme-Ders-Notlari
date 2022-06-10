// Formumuzu seçmek için değişkenlerimizi belirliyoruz

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear =document.getElementById("clear-films");

// UI objesini başlatma

const ui = new UI();

// Storage objesi üret
const storage = new Storage();

// Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    // Submit olduğunda burda addFilm isimli fonksiyonumuz çalışacak
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        // bu fonksiyonumuz bize arrayimizi gönderecek ve bizde bunu UI'ın içindeki fonksiyona göndereceğiz
        ui.loadAllFilms(films);
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
        ui.displayMessages("Tüm alanları doldurun...","danger");
    }
    else { 
        // else durumunda 3 değerimizi aldığımızı varsayarak film constructor'ıyla filmimizi oluşturacağız 
        // Yeni Film
        const newFilm = new Film(title,director,url);
        // UI objesi üzerinden bir fonsiyon yazacağız ve filmimizi buraya göndererek arayüzümüze eklemeye çalışacağız
        ui.addFilmToUI(newFilm);  // Arayüze film ekleme
        storage.addFilmToStorage(newFilm); // Storage'a Film Ekleme

        ui.displayMessages("Film başarıyla eklendi...","success");
    }
    
    ui.clearInputs(titleElement,urlElement,directorElement);

    // projenin submit edilmesini engellemek için her zaman ki gibi e.preventDefaultu kullanıyoruz
    e.preventDefault();
}

function deleteFilm(e){

    
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme işlemi başarılı...","success");

    }

}
function clearAllFilms(){

    if(confirm("Emin misiniz ?")) {

        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();

    }
}