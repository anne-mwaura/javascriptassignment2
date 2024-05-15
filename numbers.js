function Numbers(inputString) {
    if (!inputString.trim()) {
        return 0;
    }
 let sum = 0;
const numbers= inputString.split(',');
for (let value of numbers) {
     const num = parseFloat(value.trim()) || 0;
        sum += num;
    }

    return sum;
}
console.log(Numbers("6,21,63,9,8")); 
console.log(Numbers("43,30,66,a,46"));
console.log(Numbers("2,,62,13,64,58")); 
console.log(Numbers("")); 

