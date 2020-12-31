// const mySql = require('mysql2');

// const pool = mySql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'node1234'
// });

// module.exports = pool.promise();

// const Sequelize = require('sequelize');

// const sequlize = new Sequelize('node-complete', 'root', 'node1234', {
//     dialect: 'mysql',
//     host: 'localhost'});

// module.exports = sequlize;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://admin-mils:I@mgunatit369@cluster0.vj867.mongodb.net/shop?retryWrites=true&w=majority'
      )
        .then((client) => {
          console.log('connected!');
          _db = client.db();
          callback();
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
}

const getDb = () => {
    if(_db) { 
       return _db;  
    }
    throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
