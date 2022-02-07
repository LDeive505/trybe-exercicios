let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultipliedByTheNext = []; 

for (let index = 0; index < numbers.length; index++) {
    
    if(index === numbers.length - 1){
        numbersMultipliedByTheNext.push(numbers[index] * 2);
    } else{
        numbersMultipliedByTheNext[index] = numbers[index] * numbers[index+1];
    }
}

console.log(numbersMultipliedByTheNext);
