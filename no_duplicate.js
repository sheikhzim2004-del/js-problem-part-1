// 18-5 Remove duplicate items from an array

//kono array te akadhik string othoba number othoba onno kisu thakle avaeb duplicate gula batil kora jay.


//array declare
const biriyaniKhor = ['shamim', 'shagor', 'jakir', 'zim', 'muaj', 'jakir', 'shamim', 'roton', 'zim'];
const numbers = [55,99,44,33,77,55,11,99,44,55];


//function declare
function noduplicate (arr){
    const unique = [];
    for (const name of arr){
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}


//call the functuon
const unique = noduplicate(biriyaniKhor);
console.log(unique);

const uniqueNumber = noduplicate(numbers);
console.log(uniqueNumber);