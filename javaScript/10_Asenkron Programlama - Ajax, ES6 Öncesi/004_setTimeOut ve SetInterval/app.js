// Set Timeout

// ! 2000 milisaniye fonksiyonumuz çalışmış oluyor

// setTimeout(function () {
//   console.log("Naber");
// }, 2000);

// ! 1000 milisaniye (1sn) aralıklarla foksnsiyonumuzu çalıştırmış oluruz

// let i = 0;
// setInterval(function () {
//   i++;
//   console.log("Sayı", i);
// }, 1000);

// ! clear Interval ile Intervalımızı durdurabiliriz

let i = 0;
let value = setInterval(function () {
  i++;
  console.log("Sayı", i);
}, 1000);
document.getElementById("btn").addEventListener("click", function () {
  clearInterval(value);
});
