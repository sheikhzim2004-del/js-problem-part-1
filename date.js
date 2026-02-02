
//date and time bishoy ami bujhinai bola jay

const today = new Date();
const date = new Date('2032-10-20');
console.log(date.getMonth());
console.log(date.getDay());

const specificeDate = new Date(2030, 1, 19, 5, 25, 10);
console.log(specificeDate);

specificeDate.setMonth(10);
console.log(specificeDate);
console.log(specificeDate.toLocaleString('en-GB'));

//unix epoc