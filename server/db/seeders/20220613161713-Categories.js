'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [{
      title: 'География',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'История',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Как это по-русски?',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categories', null, {});

  }
};
