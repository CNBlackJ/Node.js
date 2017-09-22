const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: String,
  band: String
});

const FoodSchema = new Schema({
  name: String,
  count: Number
})

FoodSchema.virtual('members', {
  ref: 'Person',
  localField: 'name',
  foreignField: 'name',
  justOne: false
})

const Person = mongoose.model('Person', PersonSchema);
const Food = mongoose.model('Food', FoodSchema);

mongoose.connect('mongodb://localhost:/test', function(err) {
  if (err) console.log(err.message);
  console.log('Connected');

  Food.find({name: 'iphone'}).populate('members').exec((error, bands) => {
    if (error) console.log(error)
    console.log(bands)
  })
  
  // strict option
  // Person.collection.insert({
  //   name: 'Dog',
  //   content: 'Hello World',
  //   age: 10,
  // }, (err, result) => {
  //   if (err) console.log(err.message);
  //   console.log(result);
  // });

  // Person.findOne({name: 'Dog'}, (err, res) => {
  // 	if (err) console.log(err.message);
  // 	console.log('find by name:');
  // 	console.log(res);
  // });

  // Person.findById('58d26c722068211d02f1ee72', (err, res) => {
  // 	console.log('find by Id:');
  // 	console.log(res);
  // })

  // Person.pre('save', (docs) => {
  //   console.log('======>');
  //   console.log(docs);
  //   console.log('<======')
  // })

  // insert data with un-match key in schema
  // Food.collection.insert({
  //   name: 'apple',
  //   count: 10,
  //   price: 5.5
  // }, (err, res) => {
  //   console.log(res);
  // });

  // Food.findOne({name: 'apple'}, (err, res) => {
  //   console.log(res);
  // });

  // Food.find({}).distinct('name').count().exec((err, count) => {
  //   console.log(count);
  // })

  // Food.aggregate(
  //   {$group: {_id: '$name', count: {$sum: 1}}}
  // ).exec((err, res) => {
  //   console.log(res)
  // })

});