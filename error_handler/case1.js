function foo() {
	// bar()
	throw new Error("I am an error from foo!")
	console.log('I am a log in foo.')
	return 'foo'
}

function bar() {
	throw new Error("I am an error from bar!")
	console.log('I am a log in bar.')
	return 'bar'
}

function start() {
	try {
		const t = foo()
		console.log('I am start!')
		console.log(`t: ${t}`)
	} catch(e) {
		console.log(e);
	}
}

start()