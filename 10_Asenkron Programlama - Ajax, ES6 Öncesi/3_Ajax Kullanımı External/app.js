document.getElementById("change").addEventListener("click", change);
document.getElementById("changeUSD").addEventListener("click", changeUSD);
//  öncelikle butonumuzu seçiyoruz

function change() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.exchangerate.host/latest");

  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      // console.log(this.responseText);
      // console.log(response.rates.TRY);

      const rate = response.rates.TRY;
      const amount = Number(document.getElementById("amount").value);
      document.getElementById("tl").value = amount * rate;
    }
  };

  xhr.send();
}

function changeUSD() {
  const xhr2 = new XMLHttpRequest();

  xhr2.open("GET", "https://api.exchangerate.host/latest");

  xhr2.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      // console.log(this.responseText);
      // console.log(response.rates.USD);

      const rate = response.rates.TRY / response.rates.USD;
      const amountUSD = Number(document.getElementById("amountUSD").value);
      document.getElementById("tlUSD").value = (amountUSD * rate).toFixed(2);
    }
  };
  xhr2.send();
}
