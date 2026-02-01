
//12 inch === 1 feet ------------------------------

//inch to feet ber korar niyom 
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const shuvoInch = 75;
const result = inchToFeet(shuvoInch);
console.log('shuvo', result, 'feet');



console.log('=========================================================');
// tobe amra jodi exact koto feet koto inch sheta ber korte cai tahole nichet niyom
function inchToFeet2 (inch){
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchNumber = inch % 12;
    const finalResult = feetNumber + ' feet ' + inchNumber + ' inch ';

    return finalResult;

}
const shuvoInch2 = 77;
const result2 = inchToFeet2(shuvoInch2);
console.log('shuvo er perfect size:', result2);