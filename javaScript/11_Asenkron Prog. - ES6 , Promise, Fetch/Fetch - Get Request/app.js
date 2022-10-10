class Request {
  get(url) {
    // *Get Request
    return new Promise((resolve, reject) => {
      fetch(url) // ? önce fetch'imize url veriyoruz
        .then((response) => response.text()) // ? ardından then ile yakalmaaya çalışıyoruz
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data), // ? buraya gönderilen data'yı stringfy ile stringe çeviriyoruz
        headers: {
          "Content-type": "application/json; charset=UTF-8", // ? burdada UTF-8 'e uygun olarak göndereceğimizi belirtiyoruz)
        },
      })
        .then((response) => response.json()) // ? .then kullanarak bana gelen response'umu yakalıyorum
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        // ? url'mizi verip obje kısmını açıyoruz
        method: "PUT",
        body: JSON.stringify(data), // ? data'mızı stringify'a çeviriyoruz
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  delete(url) {
    // ? veri eklemeyeceğimiz için sadece url giriyoruz
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/albums/1", {
        method: "DELETE",
      })
        .then((response) => resolve("Veri silme işlemi başarılı"))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request();

// ! Fetch Delete Request

request
  .delete("https://jsonplaceholder.typicode.com/albums/1")
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

//  ! FETCH PUT Request

// request // ? 10 numarayı alıp değiştiriyoruz
//   .put("https://jsonplaceholder.typicode.com/albums/11", {
//     userId: 10,
//     title: "Linkin Park New Divide",
//   })
//   .then((album) => console.log(album))
//   .catch((err) => console.log(err));

// ! FETCH POST Request

// request
//   .post("https://jsonplaceholder.typicode.com/albums", {
//     userId: 1,
//     title: "Tea For The Tillerman",
//   }) // ! eklenmiş objemiz bize geri dönüyor
//   .then((newAlbum) => console.log(newAlbum))
//   .catch((err) => console.log(err));

// ! FETCH GET  Request

// ? verimizi dışarda da elde etmek için
// let albums;
// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((albums) => {
//     // albums = data; // ? dahada kısaltmak için then'den sonra direkt album yazabiliriz
//     console.log(albums); // * Asenkron yapıdan kurtulmak için  albums'ü burda yazdırdık
//   })
//   .catch((err) => console.log(err));

// console.log(albums); // ? veriler elimize geç geleceği için js asenkron bir yapıda çalışıp önce albums'ü yazdırmaya çalışacak ve undefined çıktısı verecek
