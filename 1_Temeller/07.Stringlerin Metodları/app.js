let value;

const firstName = "Louis";
const lastName = "Armstrong";


const langs = "Java,Python,C++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = "Mehmet Esad"

value = value + " Akman"

value = firstName.length; 

value = firstName.concat(" ", lastName, " ", "Caz"); 

value = firstName[4];

value = firstName[firstName.length - 1];

//  Index Of

value = firstName.indexOf("L");
value = firstName.indexOf("l");

// Char At

value = firstName.charAt(-1);
value = firstName.charAt([firstName.length - 1]);

// Split

value = langs.split(",")

// Replace

value = langs.replace("Python","CSS");

// Includes

value = langs.includes("Java");


console.log(value);