//connecting to database

const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize('employeedb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port:"3307",
    logging: false , //this will remove the console printing part
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contact = require('./contact')(sequelize,DataTypes)
db.user = require('./user')(sequelize,DataTypes,Model)

db.sequelize.sync({force:false});

module.exports = db