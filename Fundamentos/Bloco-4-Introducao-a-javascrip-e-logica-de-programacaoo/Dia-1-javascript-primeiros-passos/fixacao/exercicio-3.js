let estado = "Aprovada";

switch(estado) {
    case "Aprovada":
        console.log("Parabéns, você foi aprovado(a)!");
        break;
    case "Lista":
        console.log("Você esta na nossa lista de espera.");
        break;
    case "Reprovada":
        console.log("Você foi reprovado(a).");
        break;
    default: 
        console.log("Não se aplica!");
}