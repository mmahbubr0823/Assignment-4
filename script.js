// p-1

function  cubeNumber(number){
    if (typeof number !== 'number') {
        return 'Please, provide a number.'
    }
   let result =Math.pow(number, 3);
   return result;
}
// console.log(cubeNumber('as'));

// p-2

function matchFinder(string1, string2){
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please, provide a string.'
    }
    else{
        return string1.toLowerCase().includes(string2.toLowerCase())
    }
}
// console.log(matchFinder('Afuq', [4]));

// p-3

function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return 'Please, provide an array of two numbers.';
    }
    else{
        if (arr[0] < 0 || arr[1] < 0) {
            return 'Invalid Input';
        }
        else if(arr[0] === arr[1]){
            return 'equal';
        }
        else if(arr[0] > 0 || arr[1] > 0){
            return arr.reverse();
        }
    }
}

// console.log(sortMaker(4));

// p-4

function findAddress(obj) {
    let keys = Object.keys(obj);
    for (const key of keys) {
        return obj[key];
    }
    return keys;
    
}

console.log(findAddress({name:'asd', age:45, address: 'qwe'}));

// p-5

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0 || totalDue <= 0) {
        return 'Please, provide an array and totalDue of positive numbers.';
    }
        let totalChange = 0;
        for (const element of changeArray) {
            totalChange += element;
        }
        if (totalChange >= totalDue) {
            return true;
        }
        else{
            return false;
        }
}

// console.log(canPay([1], 15));