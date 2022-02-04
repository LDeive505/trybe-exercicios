const a = 80;
const b = 70;
const c = 30;

if( a<0 || b<0 || c<0 ){
    console.log("Valor(res) de angulo inválido(s)!");
}else if( (a+b+c) === 180){
    console.log(true);
}else{
    console.log(false);
}