// 18-6 Math, abs, round, ceil, floor, and random number

//kono aray er minimum number and maximum number ber korar jonno extra loop use na korew Math.min & Math.max use kore ber kora jay

// example
const min = Math.min(55,88,11,99,36,77,66,94,28,49,51,12,14,33);
console.log(min);

const max = Math.max(55,88,11,99,36,77,66,94,28,49,51,12,14,33);
console.log(max);

console.log(Math.PI);           //ata use kore Pi er value ta jana jabe
console.log(Math.abs(5-15));    //ata muloto diffrence ta ber kore diye thake
console.log(Math.round(4.35));  //ata purno shonkkha kore dey pashapashi jeita kache hoy 
console.log(Math.round(4.75));  //ata purno shonkkha kore dey pashapashi jeita kache hoy 
console.log(Math.floor(3.85));  //ata (.) doshomik er por jai thakuk nise namaya fixd digit dibe
console.log(Math.ceil(6.00045));//ata floor er thik ulta kaj ta korbe
console.log(Math.random());     //ata proti bar alada alada 0.any random shonkhs dibe

//amra jodi purno random digit paite cai tahole
const random = Math.round(Math.random() * 10);   //tahole ki hobe? 10 er vitor theke random jekono digit show korbe.
console.log(random);

// ==========================bisoy ta onek mojar chilo==================================