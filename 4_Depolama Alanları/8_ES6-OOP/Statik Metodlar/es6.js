// Statik Metodlar

/* class Matematik {

    cube(x) {
        console.log(x*x*x);
    }
}

 const math = new Matematik();
console.log(math);
math.cube(3); */

// Küp metodunu kullanmak için bu şekilede yazmam gerekiyor
//  Fakat bazı durumlarda obje oluşturmadan fonksiyonumuzu kullanmamız gerekiyor. Bunun için belli fonksiyonlarımızı belli classlar içine statik metodlar şeklinde yazarsak fonksiyon halinde kullanabiliriz

class Matematik {
    sqrt(x){
        console.log(x*x);
    }
    static cube(x) { // statik sayesinde sınıf içerisinde kullanabiliyoruz
        console.log(x*x*x);
    }
}

// const math = new Matematik();
// Matematik.cube(3);
// console.log(math);

// math.cube(4);
// burda obje üzerinden cube fonksiyonumuzu kullanamıyoruz
// Yani statik metodlarımız classın prototipine yazılmıyor
// math.sqrt(4);
// Matematik.sqrt(4); // bu durumda da statik olmadığı için sınıf üzerinden kullanamıyoruz

// Burda ki create aslında objectin içinde statik yazılmış diyebiliriz

// Object.create();

// sqrt fonksiyonuda math objesi üzerinde static bir biçimde yazılmış diyebiliriz
console.log(Math.sqrt(2)); 







//  Bu şekilde fonksiyonlarımızı static şekilde yazabiliyoruz

// class Matematik {
//   sqrt(x) {
//     console.log(x * x);
//   }
//   static cube(x) {
//     console.log(x * x * x);
//   }
// }
