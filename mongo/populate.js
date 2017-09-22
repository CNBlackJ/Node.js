const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: String,
  band: String
});

const BandSchema = new Schema({
  name: String
});
BandSchema.virtual('members', {
  ref: 'Person', // The model to use
  localField: 'name', // Find people where `localField`
  foreignField: 'band' // is equal to `foreignField`
});

const Person = mongoose.model('Person', PersonSchema);
const Band = mongoose.model('Band', BandSchema);


mongoose.connect('mongodb://localhost:/test', function(err) {
  if (err) console.log(err.message);
  console.log('Connected');

  Band.findOne().populate('members').exec(function(error, bands) {
    console.log(bands)
    console.log(bands.members)
  });

});