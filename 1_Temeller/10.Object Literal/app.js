let value;

const programmer = {
    name : "Mustafa Murat Coşkun",
    age : 25,
    email: "coskun.m.murat@gmail.com",
    langs : ["Python","Java","Javascript"],

    address : {
        city : "Ankara",
        street : "Bahçelievler"
    },
    work : function(){
        console.log("Programcı Çalışıyor...");
    }


}

value = programmer;


value = programmer.email;
value = programmer["email"];


value = programmer.langs;

value = programmer.address.city;

programmer.work();


const programmers = [
    {name: "Esad", age:25},
    {name: "Ali", age:35}
];

value = programmers[0].name;


console.log(value);