//  ? Fetch API yine olumlu ve olumsuz promisler döndürür ve bunları .then veya .catch ile yakalayabiliriz

// ! Text dosyasından verimizi asenkron bir şekilde almaya çalışacağız
// ? bu fonk içinde Fetch API'ımızı kullanacağız

function getTextFile() {
  fetch("example.txt") // ? fetch func. bir get requstle bilgileri alıcaz
    .then((response) => response.text()) // ? response'u text olarak döndürdük
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// getTextFile(); // ! Burası bir text dosyası şeklinde dosyamızda ki bilgileri geri çevirmiş olduk
// ? Local bir Json Dosyasından Veri Alma
function getJsonFile() {
  fetch("example.json")
    .then((response) => response.json()) // ? response almak için responsemuzz json olarak çağırdık ve data şekline alıp console'a yazdırdık
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// getJsonFile();

// https://api.exchangerate.host/latest

// ? fetch API'den veri alma
function getExternalAPI() {
  fetch("https://api.exchangerate.host/latest") // ? API adresimiizi yazıyoruz
    .then((response) => response.json())
    .then((data) => {
      console.log(data.rates.TRY); // ? JSON objesi içinden .rates'e giderek TRY'yi seçiyoruz
    })
    .catch((err) => console.log(err));
}

getExternalAPI();
