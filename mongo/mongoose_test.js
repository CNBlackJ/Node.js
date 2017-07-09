const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Topic = mongoose.model('Person', PersonSchema);

mongoose.connect('mongodb://localhost:/test', function(err) {
  if (err) console.log(err.message);
 

});

const database = CommunityTopic
const connectionStr = `mongodb://localhost/${database}`
mongoose.connect(connectionStr,
  {
    user: '',
    pass: ''
  })
mongoose.connection.on('error', (err) => {
  console.log(err)
})

mongoose.model(modelName, modelSchema)