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

// ? process1 'in içine process2'yi callback olarak gönderdik ve bu sayede ön process1 sonrasında ise process2 çalıştı
// process1(process2);
// * 3 sn sonra process1, process1'den 2sn sonrada process2 çalıştı

const langs = ["Python", "Java", "C++"];

// gönderdiğim lang'i langs'e push etmek istiyorum
function addLang(lang, callback) {
  setTimeout(function () {
    langs.push(lang);
    console.log("Eklendi");
    callback(); // asenkronluğu yönetmek için callback yapıyoruz
  }, 2000);
}

// ? langs'in içinde ki tüm değerlerim console'a yazırmak istiyorum
function getAllLangs() {
  setTimeout(function () {
    langs.forEach(function (lang) {
      console.log(lang);
    });
  }, 1000);
}

// * aşağıda ki şekilde yazdığımızda getAllLangs fonksiyonu addLang'i beklemeden çalışacak
// addLang("Javascript");
// getAllLangs(); // ! asenkron bir durum meydana geliyo

// ? fakat biz önce eklenmesini sonra çalışmasını istiyoruz, bu sebeple callback ekliyoruz
addLang("Javascript", getAllLangs);
