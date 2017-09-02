const Joi = require('joi');

const base = Joi.object().keys({
	name: Joi.string(),
	age: Joi.number()
});

const extended = base.keys({
	age: Joi.number().min(18),
	sex: Joi.string()
});

const start =  Joi.number().min(0).required();

const testArray = Joi.array().items(Joi.object().keys( { id: Joi.number().required() }));

const testLowerCase = Joi.string().lowercase()

const res1 = Joi.validate({name: 'Test_name', age: 19}, base);  // success
const res2 = Joi.validate({name: 'Test_name', age: 19, sex: 'male'}, base); // faile
const res3 = Joi.validate({name: 'Test_name', age: 19, sex: 'male'}, extended);  // success
const res4 = Joi.validate({name: 'Test_name', age: 17, sex: 'male'}, extended);  // faile
const res5 = Joi.validate(1, start); // success
const res6 = Joi.validate([{id:1}], testArray); // 

const res7 = Joi.validate('AA', testLowerCase)

const res8 = Joi.timeStamp()

console.log('result1:');
console.log(res1);
console.log('result2:');
console.log(res2);
console.log('result3:');
console.log(res3);
console.log('result4:');
console.log(res4);

console.log(res5);
console.log(res6);
console.log(res7)
console.log('res8' + res8)