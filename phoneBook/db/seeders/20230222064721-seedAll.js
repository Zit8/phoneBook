/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Viktor',
        email: 'v.kaledinceff@gmail.com',
        password: '123',
      },

    ], {});
    await queryInterface.bulkInsert('Companies', [
      {
        companyName: 'Alrosa',
        telNum: '84958837654',
        userId: 1,
      },
      {
        companyName: 'Bystry Zaym',
        telNum: '88005553535',
        userId: 1,
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Companies', null, {});
  },
};
