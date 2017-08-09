const mongoose = require('mongoose')
const bluebird = require('bluebird')

mongoose.Promise = bluebird

const dbConnection = mongoose.createConnection('mongodb://localhost/dev-airapi');

const bookSchema = new mongoose.Schema({
	title: String,
	price: Number
}, {
	collection: 'Book'
});

const Book = dbConnection.model('Book', bookSchema)

module.exports = Book