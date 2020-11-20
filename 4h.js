function  find2ndNumber(numbers) {

  
   

    numbers.sort();

    let max;
    //second largest number in the array
    for (let i = 0; i < numbers.length - 1 ; i++){
        for (let l = 0; l < numbers.length - 1 - i; l++){
            if (numbers[l] < numbers[l+1]){
                let temp = numbers[l];
                numbers[l] = numbers[l+1];
                numbers[l+1] = temp;
            }
        }
    }
    max = numbers[1];


    let min;
    //second smallest number in the array
    for (let i = 0; i < numbers.length - 1 ; i++){
        for (let l = 0; l < numbers.length - 1 - i; l++){
            if (numbers[l] > numbers[l+1]){
                let temp = numbers[l];
                numbers[l] = numbers[l+1];
                numbers[l+1] = temp;
            }
        }
    }
    min = numbers[1];


    return [max, min];

}
