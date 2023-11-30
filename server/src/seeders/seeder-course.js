'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Courses', [{
      name: "Giải tích 1 ",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Giải tích 2",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Đại số tuyến tính",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Vật lý 1",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Nhập môn điện toán",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Hệ thống số",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Cấu trúc rời rạc",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Kỹ thuật lập trình",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Thí nghiệm vật lý",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Kiến trúc máy tính",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Mô hình hóa toán học",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Cấu trúc dữ liệu và giải thuật",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Hệ điều hành",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Lập trình nâng cao",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Xác suất và thống kê",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Mạng máy tính",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Hệ cơ sở dữ liệu",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Công nghệ phần mềm",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Hóa đại cương",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Triết học Mác - Lênin",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Kinh tế chính trị Mác - Lênin",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Chủ nghĩa xã hội khoa học",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Lịch sử Đảng Cộng sản Việt Nam",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Anh văn 1",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Anh văn 2",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Anh văn 3",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Anh văn 4",
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
