function wait(time, name) {
	return new Promise((resolve, reject) => {
		resolve(setTimeout(() => {
		console.log(name)
		console.log(Date.now());
	}, time))
	})
}

async function series() {
	wait(1000, 'a');
	wait(2000, 'b');
	return "done!";
}

// console.log(series());

function p(name) {
	return new Promise((resolve, reject) => {
		wait(1000, name)
		resolve(name)
	})
}

async function show() {
	console.log(Date.now());
	wait(10000, 'b')
	await wait(1000, 'a')
}

// show()

async function showP() {
	console.log(Date.now());
	series()

}

series()
	.then(res => console.log('res: ' + res))
	.catch(e => console.log(e))