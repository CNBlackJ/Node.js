const express = require('express')
const app = express()
const errorhandler = require('errorhandler')
const notifier = require('node-notifier')

app.get('/', async(req, res) => {
	throw new Error('aaa')
})

function errorNotification(err, str, req) {
  var title = 'Error in ' + req.method + ' ' + req.url
 
  notifier.notify({
    title: title,
    message: str
  })
}

app.use(errorhandler({log: errorNotification}))

app.listen(3000)