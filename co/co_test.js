const co = require('co')

function dog() {
	return new Promise((resolve, reject) => {
		resolve('I am co test')
	}).catch((error) => {
		reject(error)
	})
}

function show() {
	co(function * () {
		const res = (yield dog()).toUpperCase()
		console.log(res)
	})
}

show()