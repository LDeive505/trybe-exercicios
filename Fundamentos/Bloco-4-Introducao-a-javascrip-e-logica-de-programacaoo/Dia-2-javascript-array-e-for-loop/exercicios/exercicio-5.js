let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let larger = 0;

for (let i = 0 ; i< numbers.length ; i+=1) {

    if(larger < numbers[i])
        larger = numbers[i];
}

console.log('Maior número do array: ' + larger);