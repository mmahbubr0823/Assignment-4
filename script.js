function  cubeNumber(number){
    if (typeof number !== 'number') {
        return 'Please, provide a number.'
    }
   let result =Math.pow(number, 3);
   return result;
}

function matchFinder(string1, string2){
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please, provide a string.'
    }
    else{
        return string1.includes(string2)
    }
}

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
            let myArr = [];
           if (arr[0] > arr[1]) {
            myArr = [arr[0], arr[1]]
             return myArr;
           }
           else{
            myArr = [arr[1], arr[0]]
             return myArr;
           }
        }
    }
}

function findAddress(obj) {
    if (obj.street === undefined && obj.house === undefined && obj.society === undefined) {
        obj.street = '_';
        obj.house = '_';
        obj.society = '_';
        let text = obj.street + ','+ obj.house + ',' + obj.society;
        return text;
    }
   
    else if (obj.street === undefined && obj.house === undefined) {
       obj.street = '_';
        obj.house = '_';
        let text = obj.street + ','+ obj.house + ',' + obj.society;
        return text;
    }
    else if (obj.house === undefined && obj.society === undefined) {
       obj.house = '_';
        obj.society = '_';
        let text = obj.street + ','+ obj.house + ',' + obj.society;
        return text;
    }
    else if (obj.street === undefined && obj.society === undefined) {
       obj.street = '_';
        obj.society = '_';
        let text = obj.street + ','+ obj.house + ',' + obj.society;
        return text;
    }
    else if (obj.street === undefined) {
       obj.street = '_';
        let text = obj.street + ','+ obj.house + ',' + obj.society;
        return text;
    }
    else if (obj.house === undefined) {
       obj.house = '_';
        let text = obj.street + ','+ obj.house + ',' + obj.society;
        return text;
    }
    else if (obj.society === undefined) {
       obj.society = '_';
        let text = obj.street + ','+ obj.house + ',' + obj.society;
        return text;
    }
   else{ 
    let text = obj.street + ','+ obj.house + ',' + obj.society;
   return text;
}
}

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
