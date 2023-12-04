'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Printers', [{
      status: true,
      location: "H1",
      name: "Máy in 1",
      type: "In thường",
    }, {
      status: true,
      location: "H2",
      name: "Máy in 2",
      type: "In thường",
    }, {
      status: true,
      location: "H3",
      name: "Máy in 3",
      type: "In thường",
    }, {
      status: true,
      location: "H6",
      name: "Máy in 4",
      type: "In thường",
    }, {
      status: true,
      location: "H1",
      name: "Máy in 5",
      type: "In màu",
    }, {
      status: true,
      location: "H6",
      name: "Máy in 6",
      type: "In màu",
    },], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
