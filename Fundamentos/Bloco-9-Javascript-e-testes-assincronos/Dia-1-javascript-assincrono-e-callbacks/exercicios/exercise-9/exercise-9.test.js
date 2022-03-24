// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise-9.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {

    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error,string) {
      expect(error).toBe(expectedError);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Togepi', callback);

  });

  it("retorna um pokemon que existe no banco de dados", () => {
    const expected = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';

    function callback(error,string) {
      expect(string).toBe(expected);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);

  });
});