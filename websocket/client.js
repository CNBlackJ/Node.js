const Realtime = require('leancloud-realtime').Realtime;
const TextMessage = require('leancloud-realtime').TextMessage;

const express = require('express')

const app = express()

app.get('/', (req, res) => {
	const realtime = new Realtime({
	  appId: 'pYkAGF6TirnGO9AAnP2UJosX-gzGzoHsz',
	  region: 'cn', //美国节点为 "us"
	});

	// Jerry 登录
	realtime.createIMClient('Jerry').then(function(jerry) {
	  jerry.on('message', function(message, conversation) {
	    console.log('Message received: ' + message.text);
	  });
	}).catch(console.error);
	res.send('aaa')
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})