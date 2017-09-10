const express = require('express')
const app = express()

app.get('/', async(req, res) => {
	console.log(Date.now())
	await (() => {
		setTimeout((req, res)=>{
			console.log(Date.now())
			const result = 'a'
			res.send('Hello world.' + result)
		}, 1000)
	})()
	console.log(Date.now())
	await (() => {
		setTimeout(()=>{
			console.log(Date.now())
		}, 1000)
	})()
})

app.listen(3000)