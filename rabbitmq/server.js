const  amqp = require('amqplib')

amqp.connect('amqp://127.0.0.1').then((conn) => {
	process.once('SIGN', () => {
		conn.close()
	})

	return conn.createChannel().then((ch) => {
		const ok = ch.assertQueue('hello', {durable: false}).then((_qok) => {
			return ch.consume('hello', (msg) => {
				console.log(`[x] Recieved: ${msg.content.toString()}`)
			}, {noAck: false})
		})

		return ok.then((_consumeOk) => {
			console.log(`[*] Waiting for message. To exist press CRTL + C`)
		})
	})
}).then(null, console.warn)
