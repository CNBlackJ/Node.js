const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Topic = mongoose.model('Person', PersonSchema);

// mongoose.connect('mongodb://localhost:/test', function(err) {
//   if (err) console.log(err.message);
// });

const connectionStr = `mongodb://120.78.93.185/test?authSource=admin`
const dbConnection = mongoose.createConnection(connectionStr,
  {
    user: '',
    pass: ''
  })
mongoose.connection.on('error', (err) => {
  console.log(err)
})

const modelSchema = new mongoose.Schema({
	title: String,
	price: Number
}, { collection: 'Book' })

const bookModel = dbConnection.model('Book', modelSchema)

bookModel.create({ title: 'aircode', price: 10 })