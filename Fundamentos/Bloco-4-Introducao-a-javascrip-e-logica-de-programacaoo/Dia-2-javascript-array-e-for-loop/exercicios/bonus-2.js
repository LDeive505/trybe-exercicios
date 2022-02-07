let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i+=1) {
    for (let i2 = 0 ; i2 < i ; i2+=1) {
       if(numbers[i] > numbers[i2]){  //apenas troca o sinal, em relação a questão anterior

           let aux = numbers[i];
           numbers[i] = numbers[i2];
           numbers[i2] = aux;
       }
    }
}

console.log(numbers);