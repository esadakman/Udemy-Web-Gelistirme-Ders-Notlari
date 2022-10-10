// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error
// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click", function () {
  // XMLHttpRequest

  const xhr = new XMLHttpRequest();

  // xhr.onprogress = function(){

  //     console.log("Process İşleniyor ...", this.readyState);
  // }

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText); metnimizi yazdırmak için ise;
      document.getElementById("ajax").textContent = this.responseText;
    }
  };
  // ilk olarak yapmak istediğimiz requesti(get,post,put veya delete olabilir) daha sonrada alacağımız dosyayı yazacağız. En sonda senkron mu asenkron mu olduğunu belirtiyoruz. (true asenkron anlamına geliyor)
  // xhr.onreadystatechange = function(){

  // console.log(this.readyState);
  // console.log(this.status);

  //     if(this.status == 200 && this.readyState == 4){
  //         //Response hazır
  //         console.log(this.responseText);
  //     }
  // }

  xhr.open("GET", "example.txt", true);
  // Get request yaptığımız için string bir değere ihtiyacımız yok.Post olsaydı string değer göndermemiz gerekirdi
  xhr.send();
});
