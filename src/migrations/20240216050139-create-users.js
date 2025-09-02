"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "tbl_users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        firstname: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        active: {
          type: Sequelize.TINYINT,
          allowNull: false,
          defaultValue: 1
        },
        reset_token: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        reset_token_expiration: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: null,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        }
      }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tbl_users")
  },
}
