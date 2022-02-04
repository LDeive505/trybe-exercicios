const salarioBruto = 3000;
let inss;
let impostoDeRenda;

if(salarioBruto<=1556.94){
    inss = salarioBruto * 0.08;
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = salarioBruto * 0.09;
}else if(salarioBruto >= 2594.93  && salarioBruto <=  5189.82){
    inss = salarioBruto * 0.11;
}else if(salarioBruto > 5189.82){
    inss = 570.88;
}

let salario = salarioBruto - inss;

console.log(salario);

 if(salario >= 1903.99 && salario <= 2826.65){
    impostoDeRenda = (salario * 0.075) - 142.80;
    console.log(impostoDeRenda);
}else if(salario >= 2826.66  && salario <=  3751.05){
    impostoDeRenda = (salario * 0.15) - 354.80;
}else if(salario >= 3751.06  && salario <=  4664.68){
    impostoDeRenda = (salario * 0.225) - 636.13;
}else if(salario> 4664.68){
    impostoDeRenda = (salario*0.275) - 869.36;
}

// salario = salario - impostoDeRenda;

console.log('O salário líquido para o valor de '+ salarioBruto + ' é: ' + (salario - impostoDeRenda));
