const sum = ((...args) => args.reduce((result, number) => result + number));

console.log(sum(3, 4, 3, 5, 10, 15, 100));