const piece = 'pawn';

switch(piece){

    case 'bishop': console.log("bishop(bispo): diagonais"); break;
    case 'knight': console.log('knight(Cavalo): Movimento em L'); break;
    case 'rook': console.log('Rook(Torre): Verticais'); break;
    case 'pawn': console.log('pawn(Peão): 1 casa vertical ou 2 diagonal'); break;
    case 'queen': console.log('queen(Rainha): Todas as direções'); break;
    case 'king': console.log('king(Rei): Todas as direções(1 casa apenas)'); break;
    default: console.log('Peça Inválida');
    
}