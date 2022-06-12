// function getData(data) {
//   // Promis Objesi döndüren Fonksiyon
//   return new Promise(function (resolve, reject) {
//     // ! Olulmlu verimizi resolve ile, olumsuz verimizi reject ile gönderiyoruz
//     setTimeout(function () {
//       if (typeof data == "string") {
//         // ? string bir değer girilirse data'yı girilmezse reject mesajını almak istiyoruz
//         // *Olumlu
//         resolve(data);
//       } else {
//         //* Olumsuz
//         reject(new Error("Lütfen string bir değer giriniz")); // new Error yazarak daha hatamızı daha açıklayıcı bir şekilde yazdırarbiliriz
//       }
//     }, 5000);
//   });
// }

// ! arrow func yazım
// getData(123)
//   .then((response) => console.log("Gelen Değer " + response))
//   .catch((err) => console.error(err));

//  ? Normal yazım
// getData(123)
//   .then(function (response) {
//     console.log("Gelen Değer " + response); // merhaba değerini çevirir bizi
//   })
//   .catch(function (err) {
//     console.error(err); // error diyerek kırımızı bir şekilde yazdırabiliriz
//   });

// ! then'in içinden returnle yeni bir değer döndürebiliriz, bunun için
function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject(new Error("Lütfen bir sayı girin"));
      }
    }, 3000);
  });
}

addTwo(10)
  .then((response) => {
    console.log(response); // ? önce aldığım responsu yazdırdım
    return response + 2; //? sonra ise 2 ekleyip döndürdüm. Bu değerde bize promis yapısı olarak döndüğü için yine .then yapmam gerekir
  })
  .then((response2) => console.log(response2)) // ? 2.thenle return yaptığım değeri yaladım
  .catch((err) => console.error(err)); // ! en sonda ise errorları yakalamk için .catch yaptık. 1'den fazla .then yapabiliriz fakat sadece 1 tane .catch kullanabiliriz

// !============================================================================

// function getData(data) {
// Promis Objesi döndüren Fonksiyon
// return new Promise(function (resolve, reject) {
// ! Olulmlu verimizi resolve ile, olumsuz verimizi reject ile gönderiyoruz
//   setTimeout(function () {
//   resolve("Olumlu sonuç"); // 10sn sonra resolve ile olumlu bir sonuç gönderecek
// }, 10000);
//   reject("Olumsuz sonuç"); // 10sn sonra resolve ile olumlu bir sonuç gönderecek
//   resolve("Olumlu sonuç");
//   reject("Olumsuz sonuç");
// })
// }, 5000);
// }

// console.log(getData("Merhaba")); // ? çalıştırdığımız zaman bize bir promis objesi dönüyor ve cevap gelene kadar pending olarak bekliyor. Promisi açtığımız andaki değer görülür. Bu örnekte hemen açarsak undefined, 10sn bekleyip açarsak fulfilled State'i ve "Olumlu Sonuç" Resultu verir
// ! reject olarak yadığımızda ise rejected state'i ve "olumsuz sonuç" resultu aldık
// ? Belirtilen bu olumlu ve olumsuz sonuçları yani resolve ve rejectleri "then" ve "catch" yapıları ile çekebiliriz

// ! Status'ümüz fullfilled veya resolved olduğunda then bloğu çalışır. İçine bir callback function alır ve response'umuzu yakalamamızı sağlar
// getData("Merhaba").then(function (response) {
//   console.log(response); // ? bu durumda bize "Olumlu sonuç" olarak çıktı verir
// });
// ! Statüsümüz reject olduğunda ise catch fonksiyonu ile değerimizi yadırabiliriz
// getData("Merhaba").catch(function (response) {
//   console.log(response); // ? bu durumda bize "Olumlu sonuç" olarak çıktı verir
// });
