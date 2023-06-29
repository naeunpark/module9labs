'use strict';
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

const connectMysql = async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been extablished successfully.')
} catch (error){
    console.log('Unable to connect to the database:', error.message);
    process.exit(1);
}
}

connectMysql();

module.exports = {
    Sequelize: sequelize,
    connectMysql
}