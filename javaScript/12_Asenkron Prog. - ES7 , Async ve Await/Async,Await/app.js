// async function test(data) {
// ? Fonksiyonun başına Async yazarak bu fonksiyonun mutlaka promise döneceğini belirtiyoruz
// ? async yazınca javaScript "data"'yı alıp promise olarak bize döndürür
//   return data;
//   return new Promise((resolve, reject) => {
//     resolve(data);
//   });
//   let promise = new Promise((resolve, reject) => {
// setTimeout(() => {
//   resolve("Bu bir değerdir");
// }, 5000);
//   });
// ? Await bir problemin resolve etmesini bekler
// ! await'ler sadece async'ler içinde çalışır ! --- Yani await'i async olmayan bir programın içinde çalıştıramayız
//   let response = await promise; // ! 5 saniye bekler promise'imiz

//   console.log(response); // ! Programımız burda 5 saniye resolve olmayı bekledi ve ardından önce response'u sonra ise "Naber"i yazdırdı
//   console.log("Naber");
//   return response; // !  Response'umuzu direkt return olarak da yazabiliriz. Ardından then ile yakalayıp yazdırabiliriz
// }

// test("Merhaba").then((response) => console.log(response));
// console.log(test("Merhaba"));

// ! ASYNC Function Hata Durumu

// async function testData(data) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject(new Error("Lütfen string bir değer girin"));
//       }
//     }, 5000);
//   });
//   const response = await promise; // ! gönderdiğimiz değer eğer string ise burası çalışıyor ve responsumuz stringimiz oluyor

//   return response;
// }

// testData(224)
//   .then((data) => console.log(data))
//   .catch((err) => error(err)); // ! fonksiyonumuzu hata durumunda catch ile yakalıyoruz

// ! Fetch Fonksiyonu ile ASYNC, AWAİT kullanımı
async function getCurrency(url) {
  //
  const response = await fetch(url); // ? burdaki response objemiz response değişkenimize eşit olacak
  console.log(response); // ! response objemizden json fonksiyonuyla json objesi bekliyoruz

  const data = await response.json(); // ! bu datamız bizim json objemiz olmuş oluyor

  //   console.log(data);
  return data;
}

getCurrency("https://api.exchangerate.host/latest") // ? datamız promis olarak geldi
  .then((cevap) => console.log(cevap));
