// const mySql = require('mysql2');

// const pool = mySql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'node1234'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequlize = new Sequelize('node-complete', 'root', 'node1234', {
    dialect: 'mysql',
    host: 'localhost'});

module.exports = sequlize;