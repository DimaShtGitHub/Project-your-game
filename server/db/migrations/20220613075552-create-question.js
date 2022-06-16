'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Questions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			categoryId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'Categories',
					},
				},
				onDelete: 'CASCADE',
			},
			score: {
				type: Sequelize.INTEGER
			},
			text: {
				type: Sequelize.TEXT
			},
			answer: {
				type: Sequelize.STRING
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
		await queryInterface.dropTable('Questions');
	}
};
