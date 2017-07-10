/* @apiModel Banner
{
link : string , //link of banner
title : string, 
type : string, // main , business
isValid : boolean, 
region : {
  region.name : string, 
}
}
*/
module.exports = new mongoose.Schema({
 link: String,
 title: String,
 type: String,
 isValid: {
   type: Boolean,
   default: true
 }
}, {
collection: 'Banner'
})