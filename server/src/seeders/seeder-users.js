'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userid: "2110162",
      name: "Đoàn Minh Hiếu",
      mail: "hieu.doanminh@hcmut.edu.vn",
      folderid: null,
      numpage: 100,
      block: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userid: "2114094",
      name: "Nguyễn Ngọc Khánh My",
      mail: "my.nguyencse21@hcmut.edu.vn",
      folderid: null,
      numpage: 100,
      block: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userid: "2115337",
      name: "Nguyễn Trung Vương",
      mail: "vuong.nguyentrurng310@hcmut.edu.vn",
      folderid: null,
      numpage: 100,
      block: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userid: "2112292",
      name: "Kim Nhật Thành",
      mail: "thanh.kim100403@hcmut.edu.vn",
      folderid: null,
      numpage: 100,
      block: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userid: "2114926",
      name: "Nguyễn Thái Thời",
      mail: "thoi.nguyen152@hcmut.edu.vn",
      folderid: null,
      numpage: 100,
      block: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userid: "2115235",
      name: "Phạm Châu Thanh Tùng",
      mail: "tung.phamchauthanh@hcmut.edu.vn",
      folderid: null,
      numpage: 100,
      block: false,
      createdAt: new Date(),
      updatedAt: new Date(),
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
