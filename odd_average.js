// Calculate the average of the odd numbers in an array

function oddAvg (numbers){
    const odd = [];                 //odd er jonno array declare
    for(const number of numbers){
        if(number % 2 === 1){
            odd.push(number);
        }
    }
    let sum = 0;
    for(const number of odd){
        sum = sum + number;
    }
    const length = odd.length;
    const result = sum / length;
    return result.toFixed(2);        //ata korew . er por fixed kore digit rakha jay.
    // return parseInt(result);       //akhane parseInt kora jay . er por r extra digit na theke tone ata thik na
}

const numbers = [25,84,96,15,78,23,85,66,22,77,45,95,36,54];
const result = oddAvg(numbers);
console.log('average of the odd numbers is: ', result);



//thik avabei even average ber kora jabe.