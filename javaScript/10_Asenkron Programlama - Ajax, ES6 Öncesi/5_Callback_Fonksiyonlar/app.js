// ! Callback Fonksiyonlar

// const langs = ["Python", "Java", "C++"];

// langs.forEach(function (lang) {
//   console.log(lang);
// });

// ! Asenkron işlemlerimizi senkron sayesinde yönetebiliriz
// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Tıkla");
// })

// ! 2 sn sonra biri 3 sn sonra biri çalıştı yani asenkron bir şekilde sıra gözetmeksizin, birbirini beklemeden çalıştılar

// ! callback yazarak process 2'nin 1'den sonra şalışmasını sağlamadık yani process2'yi process1'e callback olarak gönderdik
// function process1(callback) {
//   setTimeout(function () {
//     console.log("Process 1");
//     callback();
// ? callbacki yazarak process2'yi process1'in sonrasına itelemiş olduk
//   }, 3000);
// }
// function process2() {
//   setTimeout(function () {
//     console.log("Process 2");
//   }, 2000);
// }

// process1(process2);

const langs = ["Python", "Java", "C++"];

function addLang(lang, callback) {
  setTimeout(function () {
    langs.push(lang);
    console.log("Eklendi");
    callback();
  }, 2000);
}
function getAllLangs() {
  setTimeout(function () {
    langs.forEach(function (lang) {
      console.log(lang);
    });
  }, 1000);
}

addLang("Javascript", getAllLangs);
