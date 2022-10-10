let value;

// Veritipini Stringe Çevirme


value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4,5]);


// Veritipini Sayıya Çevirme

value = Number("123");
value = Number(null);
value = Number(undefined);
value = Number("Hello");
value = Number((function() {console.log()}));
value = Number([1,2,3,4,5]);

value = Number("3.14");
value = parseFloat("3.14")

value = parseInt("3")

console.log(value);
console.log(typeof value);



const a = "33" + 34;

console.log(a);
console.log(typeof a);






