// Ajax,callback , http requests

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  get(url, callback) {
    this.xhr.open("GET", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Get Request: Bir hata oluştu", null);
      }
    };
    this.xhr.send();
  }
  put(url, data, callback) {
    this.xhr.open("PUT", url); // ! requstimizi PUT'a çevirdik
    this.xhr.setRequestHeader("Content-type", "application/json"); // ? json verisi göndereceğimiz için application/json olarak belirttik

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        // ? güncellediğimize dair olarak 200 kodu gelecek
        // * Başarılı bir durum meydana gelince
        callback(null, this.xhr.responseText);
      } else {
        // ! başarısız olma durumunda*
        callback("put Request: Bir hata oluştu", null);
      }
      //  ? verimizi göndermek için öncelikle verimizi stringe çevirmemiz gerekiyor
    };
    this.xhr.send(JSON.stringify(data)); // ? bize gönderilen JSON objesini string'e çeviriyoruz
  }
}

const request = new Request();

// ! ========================

// request.get(
//   "https://jsonplaceholder.typicode.com/albums/1",
//   function (err, response) {
//     if (err === null) {
//       //  * Başarılı
//       console.log(response);
//     } else {
//       // * Hata
//       console.log(err);
//     }
//   }
// );

// ! Post
// request.post(
//   "https://jsonplaceholder.typicode.com/albums",
//   { userId: 2, title: "Thriller" },
//   function (err, album) {
//     if (err === null) {
//       // * hata oluşmamışsa gönderdiğimiz albümü response olarak almak istiyoruz
//       console.log(album);
//     } else {
//       // * Hata Durumu
//       console.log(err);
//     }
//   }
// );

// !  Put sayesinde verileri değiştirebiliyoruz, nunun için link sonuna "/" atarak istediğimiz veriyi seçiyoruz
request.put(
  "https://jsonplaceholder.typicode.com/albums/11", // ! ID 10 olan bilgileri değiştirmek istiyoruz
  { userId: 132, title: "Tea for the Tillerman" },
  function (err, album) {
    if (err === null) {
      // * hata oluşmamışsa gönderdiğimiz albümü response olarak almak istiyoruz
      console.log(album);
    } else {
      // * Hata Durumu
      console.log(err);
    }
  }
);
