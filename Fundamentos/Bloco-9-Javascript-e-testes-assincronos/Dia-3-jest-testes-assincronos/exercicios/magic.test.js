require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    
    expect.assertions(1);
    expect(response.name).toBe('Ancestor\'s Chosen');
  });

  it('Verifica se getMagicCard é uma função', () => {
    expect.assertions(1);
    expect(typeof getMagicCard).toBe('function');
  });

  it('Verifica se fetch é chamado ao executar a função getMagicCard', async () => {
    const response = await getMagicCard('130550');
    
    expect.assertions(1);
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se fetch é chamado com um endpoint específico ao executar a função getMagicCard', async () => {
    const response = await getMagicCard('130550');
    
    expect.assertions(1);
    expect(fetch).toHaveBeenCalledWith('https://api.magicthegathering.io/v1/cards/130550');
  });

  it('Verifica se o retorno da função getMagicCard é o esperado', async () => {
    const response = await getMagicCard('130550');
    
    expect.assertions(1);
    expect(response).toEqual(card);
  });

  it('Verifica se a função getMagicCard retorna um erro ao ser chamada com "idDesconhecido"', async () => {
    const response = await getMagicCard('idDesconhecido');
    
    expect.assertions(1);
    expect(response).toEqual(new Error('Id is not found!'));
  });

});
