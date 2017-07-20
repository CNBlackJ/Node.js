const Joi = require('joi');

const schema = Joi.array().unique((a,b) => {
	a.a.property === b.a.property
});

const schema2 = Joi.array().unique('a').unique('b')

const schema3 = {
	a: Joi.string().valid('b', 'c')
}

// const res = Joi.validate([{a:1,b:7},{a:2, b:1},3], schema2);
const res = Joi.validate({ a: 'd' }, schema3)

console.log(res);

