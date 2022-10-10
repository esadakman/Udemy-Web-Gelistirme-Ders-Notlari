// Ajax,callback , http requests

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  // Get request

  get(url, callback) {
    // ? callback yazarak asenkron durumu kontrol ediyoruz
    // albumlerimizi almak için bir callback gönderiyoruz
    this.xhr.open("GET", url); // ! Bağlantı açıldı
    // const temp = this; // Bunu diyerek yukardaki requst objemizi gösterebiliyoruz
    this.xhr.onload = () => {
      // ? 4. yöntem arrow func'a çevirmek
      // ! arrow function diyerekde sorunumuzu çözebiliriz
      // this.xhr.onload = function () {
      //   console.log(this.xhr);  // ! aşağıda ki this bize XMLHTTPRequsti gönderdi ve biz burdan xhr'ı çekmeye çalıştığımız için error verdi
      //   if (this.xhr.status === 200) { // ! this anahtar kelimesi XMLHTTP requsti gösterdi
      //   if (temp.xhr.status === 200) { // ? temp diyerek this hatasından kurtulduk (yukarıda ki this'i çağırmış olduk) ve albümlerimizi getirmiş olduk
      //   console.log(temp.xhr.responseText); // ? 1. (ilkel) yöntem diyebiliriz ( yukarda değişkene atayıp çağırmak)
      // if (this.status === 200) { // ? 2. thisimiz zaten xhr'ı gösterdiği için hata almayız
      // console.log(this.responseText); // ? thisimiz zaten xhr'ı gösterdiği için hata almayız
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText); // ? isteğimiz bittiği zaman değerimizi buraya göndermiş oluyoruz // ! hata yok anlamıda null yazıyoruz
      } else {
        // ! hata durumunda
        callback("Herhangi bir hata oluştu", null); // ! hata durumunda (status 200(başarılı) olmazsa)
      }
      //   .bind(this); // ? 3  bind this diyerek xhr'da this olarak benim requestimi göster diyoruz
    };

    // ? send diyerek isteğimizi gönderiyoruz
    this.xhr.send();
  }
}

const request = new Request();

// request.get(
//   "https://jsonplaceholder.typicode.com/albums",
//   function (err, response) { //  ? yukarıda tanımladığımız fonk'u kullandık
//     if (err === null) {
//  * Başarılı
//       console.log(response);
//     } else {
// * Hata
//       console.log(err);
//     }
//   }
// );

//  ? İstenilen albümü çağırmak için
request.get(
  "https://jsonplaceholder.typicode.com/albums/6", // ! albums/ yapıp numara girerek girilen numarada ki albumü getirebiliyoruz
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
