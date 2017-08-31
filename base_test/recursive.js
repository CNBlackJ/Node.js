function recursive(i = 5) {
	const r = Math.random() * 10
	console.log(r)
	if (r > i) {
		return 'Success'
	} else {
		i -= 1
		recursive(i)
	}
}

recursive()