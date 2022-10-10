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
  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json"); // ? json verisi göndereceğimiz için application/json olarak belirttik

    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        // ? 201 kodu create anlamına geliyor
        // * Başarılı bir durum meydana gelince
        callback(null, this.xhr.responseText);
      } else {
        // ! başarısız olma durumunda*
        callback("Post Request: Bir hata oluştu", null);
      }
      //  ? verimizi göndermek için öncelikle verimizi stringe çevirmemiz gerekiyor
    };
    this.xhr.send(JSON.stringify(data)); // ? bize gönderilen JSON objesini string'e çeviriyoruz
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

  delete(url, callback) {
    this.xhr.open("DELETE", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        // callback(null, this.xhr.responseText); // response olarak başarılı olursa boş bir obje dönecek veya ⬇️
        callback(null, `Veri silme işlemi başarılı`); // response olarak başarılı olursa boş bir obje dönecek
      } else {
        callback("Delete Request: Bir hata oluştu", null);
      }
    };
    this.xhr.send();
  }
}

const request = new Request();

// !GET

// request.get(
//   "https://jsonplaceholder.typicode.com/albums/11",
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

// !  Put
// request.put(
//   "https://jsonplaceholder.typicode.com/albums/11", // ! ID 10 olan bilgileri değiştirmek istiyoruz
//   { userId: 132, title: "Tea for the Tillerman" },
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

// ! DELETE

request.delete(
  "https://jsonplaceholder.typicode.com/albums/10", // !albüms'ü 10 olan'ı silmeye çalışıyoruz, başarılı olursa boş bir obje yazrıdıracağız. (değiştirdiğimiz için Veri silme başrılı diye çıktı yazdırdı)
  function (err, response) {
    if (err === null) {
      //  * Başarılı
      console.log(response);
    } else {
      // * Hata
      console.log(err);
    }
  }
);
