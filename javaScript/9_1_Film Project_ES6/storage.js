class Storage {


// fonksiyonumuzu prototype'ımıza yazıyoruz

static addFilmToStorage(newFilm){
    // getFilmsed gelen arrayi addFilmtoStorage'a alıyoruz
    let films = this.getFilmsFromStorage();
    // arrayimize aldığımız new filmi ekliyoruz
    films.push(newFilm);
    // Şimdiye kadar arraylerimize string atıyorduk ama burda obje atacağız
    // Film attığımız arrayi stringe çeviriyoruz
    localStorage.setItem("films",JSON.stringify(films));

}

static getFilmsFromStorage(){
    let films;
    // 
    if (localStorage.getItem("films") === null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    // filmlerimizi bir array olarak  aldık, yoksa boş bir array oluşturduk, varsa da o arrayimizi JSON.parse diyerek almış olduk
    }

    return films;
}

static deleteFilmFromStorage(filmTitle){
    let films = this.getFilmsFromStorage();
    // splice 
    films.forEach(function(film,index){
        if(film.title === filmTitle) {
            films.splice(index,1);
        }
    });

    localStorage.setItem("films",JSON.stringify(films));

}

static clearAllFilmsFromStorage(){

    localStorage.removeItem("films");
}

}