
//1
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } 
    else if (num < 0) {
        console.log("Negative");
    }
     else {
        console.log("Zero");
    }
}

//2
let temperature = 35; 

if (temperature > 32) {
    console.log('Hot');
}
 else if (temperature >= 20 && temperature <= 32) {
    console.log('Pleasant');
}
 else {
    console.log('Cold');
}

//3
let number = 7; // 

let result = (number % 2 === 0) ? 'Even' : 'Odd';

console.log(result); 

//4

let month = 4; 
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = 'Winter';
        break;
    case 3:
    case 4:
        season = 'Spring';
        break;
    case 5:
    case 6:
        season = 'Summer';
        break;
    case 7:
    case 8:
        season = 'Monsoon / Rainy Season';
        break;
    case 9:
    case 10:
        season = 'Autumn ';
        break;
    case 11:
        season = 'Late Autumn ';
        break;
    default:
        season = 'Invalid Month! Please enter 1-12.';
}

console.log(season); 


