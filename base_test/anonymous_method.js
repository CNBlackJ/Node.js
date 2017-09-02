function show() {
	(async() => {
		return 1
	})().then((res) => {
		console.log(res)
		return res
	}).catch((e) => {
		console.log(e)
	})
}

const res = show()
console.log(res)