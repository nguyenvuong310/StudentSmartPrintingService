'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Prints', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            userid: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            link: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            course: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            numpage: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            layout: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            pagesize: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            pageperside: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            alignment: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            scale: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            copy: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            printerid: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            time: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Prints');
    }
};