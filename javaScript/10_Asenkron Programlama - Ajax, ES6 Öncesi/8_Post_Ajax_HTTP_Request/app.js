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

// !  ilk başta url'mizi girmemiz gerekiyor
// ! JSON datamızı user UserId'ye ve title;'a göre oluşturuyoruz çünkü datamız o şekilde. ardından ise callback'imizi yazıyoruz
request.post(
  "https://jsonplaceholder.typicode.com/albums",
  { userId: 2, title: "Thriller" },
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
