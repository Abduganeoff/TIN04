function factorRecursion(numb) {
    if (numb < 0) return -1;
    else if (numb === 0) return 1;
    else return (numb * factorRecursion(numb - 1));
}
console.log(factorRecursion(15));



function factorIteration(numb) {
    if (numb < 0){
        return -1;
    } 
    else if (numb === 0){
        return 1;
    } 
    else {
        let sum = 1;
        for (let i = 1; i <= numb; i++){
            sum *= i;
        }
        return sum;
    }
}

console.log(factorIteration(25));