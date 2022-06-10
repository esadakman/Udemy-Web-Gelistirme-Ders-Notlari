// Call,Apply,Bind

const obj1 = {
    number1:10,
    number2:20
};

const obj2 = {
    number1:30,
    number2:40
};

function addNumbers(number3,number4){
    // console.log(this); // this komutu windowu çevirir çünkü global scopeun içindeyiz
    // console.log(this.number1);
    console.log(this.number1 + this.number2 + number3 + number4);
}

// addNumbers(100,200);

// Call
// Sadece çağırdığımızda kullanırız
// call ile obj1'i çağırdığımız için yukarda ki thisin yerine bu object geçecektir
addNumbers.call(obj1,100,200);
// bu seferde this anahtarımız obj2'yi görecek
addNumbers.call(obj2,100,200);

// Apply
// Yapısı call ile aynı ancak parametremizi array şeklinde vermemiz gerekiyor
addNumbers.apply(obj1,[100,200]);

addNumbers.apply(obj2,[100,200]);

// Bind
// Bind sayesinde bir fonksiyonumuzu bir objeye bağlıyoruz
// Bize bir kopya fonksiyon üretir, genelde eventlerde kullanılır
// İstediğimiz zaman çağırıp kullanabiliriz

function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);

console.dir(copyFunc1);
console.log(copyFunc1(100,200));


console.dir(copyFunc2);
console.log(copyFunc2(100,200));