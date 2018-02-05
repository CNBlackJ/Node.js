	const a = {a:1,b:[{c:1}]}

	a.b.forEach((res) => {
		console.log(res);
	})

	const arr = [1,2,3,4,5,6]

	arr.forEach((res) => {
		if (res === 3) {
			return
		}
		console.log('return: ', res)
	})

	for (let i = 0; i < arr.length; i++) {
		const res = arr[i]
		if (res === 3) {
			continue
		}
		console.log('break: ', res)
	}

	for (let res of arr) {
		if (res === 3) {
			continue
		}
		console.log('break: ', res)
	}