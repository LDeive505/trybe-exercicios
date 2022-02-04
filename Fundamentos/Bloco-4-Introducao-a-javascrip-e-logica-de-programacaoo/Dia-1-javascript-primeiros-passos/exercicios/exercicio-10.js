const custo = 10;
const valorDeVenda = 16;

if(custo<0 || valorDeVenda<0) {
    console.log('Valor Inválido!');
}else{

    console.log('Lucro ao vender a 1K de pessoas: ' + (valorDeVenda -(custo + (custo * 0.2 ))) * 1000  );
}
