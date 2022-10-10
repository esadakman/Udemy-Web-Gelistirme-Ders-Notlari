// Bu projede filmlerimizi eklemeye çalışacağımız için bir tane UI constructor2a ihtiyacımız var. Arayüzü işlemlerimizi UI objesinin prototipinde yapmaya çalışacağız

class UI {
  static addFilmToUI(newFilm) {
    // girdiğimiz bilgileri arayüzümüze eklemek istiyoruz bu yüzden table'ımızı seçmemiz gerekiyor
    /* 
    <tr>
            <td><img src="" class="img-fluid img-thumbnail"></td>
            <td></td>
            <td></td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>  */

    // yukarıda ki yapımızı t body'mize yerleştirmemiz gerekiyor, bu yüzden önce tbody'mizi seçiyoruz
    const filmList = document.getElementById("films");
    // şimdi de inner htmllerimize tr'lerimize ekleyeceğiz
    // daha önceki bilgilerin silinmemesi için += kullanıyoruz
    filmList.innerHTML +=
      // bize gönderilen new filmin urlsini aşağıya göndermemiz gerekiyor
      `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" ></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>   
    `;
    // inputlarımızı girdikten sonra input yerlerimizin temizlenmesi için;
  }

  static clearInputs(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }

  static displayMessages(message, type) {
    const cardBody = document.querySelector(".card-body");
    // Alert divini oluşturuyoruz

    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    // oluşturduğumuz alert divini sayfadan göndermek için timeout koyuyoruz
    setTimeout(function () {
      div.remove();
    }, 1000);
  }

  static loadAllFilms(films) {
    const filmList = document.getElementById("films");

    films.forEach(function (film) {
      filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" style="width: 200px; aspect-ratio:1/1.5;" class="img-fluid img-thumbnail" ></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> `;
    });
  }

  static deleteFilmFromUI(element) {
    element.parentElement.parentElement.remove();
  }
  static clearAllFilmsFromUI() {
    const filmList = document.getElementById("films");

    // filmList.innerHTML = ""; // bu sistemde kullanılabilir fakar yavaş çalışıyor

    while (filmList.firstElementChild !== null) {
      // Child olduğu sürece
      filmList.firstElementChild.remove();
    }
  }
}
