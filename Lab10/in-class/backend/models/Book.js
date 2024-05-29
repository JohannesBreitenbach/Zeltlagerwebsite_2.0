const { Sequelize, DataTypes } = require('sequelize');

const sqlite3 = require('sqlite3').verbose();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: 'books.sqlite'
});

const Book = sequelize.define('book', {
    isbn: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
}, {
  tableName: 'books',
  createdAt: false,
  updatedAt: false,
});

const db = {};
db['Book'] = Book;

module.exports = db;