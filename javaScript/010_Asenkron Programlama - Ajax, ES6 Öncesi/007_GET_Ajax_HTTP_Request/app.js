// Ajax,callback , http requests

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  // Get request

  get(url, callback) {
    // albumlerimizi almak için bir callback gönderiyoruz
    this.xhr.open("GET", url); // ! Bağlantı açıldı
    // const temp = this; // Bunu diyerek yukardaki requst objemizi gösterebiliyoruz
    this.xhr.onload = () => {
      // ! arrow function diyerekde sorunumuzu çözebiliriz
      // this.xhr.onload = function () {
      //   console.log(this.xhr); burdaki this bize XMLHTTPRequsti gönderdi ve biz burdan xhr'ı çekmeye çalıştığımız için error verdi
      //   if (temp.xhr.status === 200) { // ? temp diyerek this hatasından kurtulduk ve albümlerimizi getirmiş olduk
      //   console.log(temp.xhr.responseText); // ? 1. (ilkel) yöntem diyebiliriz
      // if (this.status === 200) { // ? 2. thisimiz zaten xhr'ı gösterdiği için hata almayız
      // console.log(this.responseText); // ? thisimiz zaten xhr'ı gösterdiği için hata almayız
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText); // isteğimiz bittiği zaman değerimizi buraya göndermiş oluyoruz
      } else {
        // ! hata durumunda
        callback("Herhangi bir hata oluştu", null);
      }
      //   .bind(this); // ! bind this diyerek xhr'da this olarak benim requestimi göster diyoruz
    };

    this.xhr.send();
  }
}

const request = new Request();

// request.get(
//   "https://jsonplaceholder.typicode.com/albums",
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

request.get(
  "https://jsonplaceholder.typicode.com/albums/6", // albums/ yapıp numara girerek girilen numarada ki albumü getirebiliyoruz
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
