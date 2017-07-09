function show() {
	let result = 'I am before try catch!'
	try {
		throw new Error('I am a error!')
	} catch(error) {
		console.log(error)
	}
	return result
}

console.log(show())