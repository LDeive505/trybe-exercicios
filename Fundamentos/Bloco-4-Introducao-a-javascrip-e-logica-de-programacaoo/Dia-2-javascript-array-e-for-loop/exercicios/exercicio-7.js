let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smaller = 0;
smaller =numbers[0];

for (let i = 0 ; i < numbers.length ; i+=1) {

    if(smaller > numbers[i])
        smaller = numbers[i];
}

console.log('Menor número do array: ' + smaller);    