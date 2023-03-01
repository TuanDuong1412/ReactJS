function findMaxnumber(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}

var checkMax1 = findMaxnumber(100, 9999);
console.log('Max Number:',checkMax1);