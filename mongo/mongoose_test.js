const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Topic = mongoose.model('Person', PersonSchema);

// mongoose.connect('mongodb://localhost:/test', function(err) {
//   if (err) console.log(err.message);
// });

const connectionStr = `mongodb://dev-mongo.chinaeast.cloudapp.chinacloudapi.cn:27017/dev-affiliates`
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