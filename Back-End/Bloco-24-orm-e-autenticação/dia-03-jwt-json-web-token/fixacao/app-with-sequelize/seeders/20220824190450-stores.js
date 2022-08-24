'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Stores', [
      {
        name: 'Lagazine Muiza',
        description: 'Lojas de coisa pra comprar',
      },
      {
        name: 'Lojas Europeias',
        description: 'Lojas de comprar comida ruim', 
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Stores', null, {}); 
  }
};
