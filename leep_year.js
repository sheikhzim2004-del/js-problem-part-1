



//basic fokira mood e leep year ber kora
function isLeepYear (year){
    if(year % 4 === 0){
        return true;
    }
    else {
        return false;
    }
}
const year = 2021;
const leepYear = isLeepYear(year);
console.log(leepYear);


//aktu motamuti level er leep year ber korar system

function isLeepYear2 (year){
    if(year % 100 !== 0 && year % 4 === 0 ){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const year2 = 2024;
const leepYear2 = isLeepYear2(year2);
console.log(leepYear2);