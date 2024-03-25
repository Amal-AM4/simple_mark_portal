const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres', // Adjust the dialect as per your database (e.g., 'mysql', 'postgres', etc.)
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'virSchool',
    logging: false // Disable logging or set to true for debugging
});

module.exports = sequelize;
