const Redis = require('ioredis');

const options = {
	port: 6379,
	host: '127.0.0.1'
}

const badOptions = {
	port: 6379,
	port: '192.168.0.1'
}

const redis = new Redis(options);
// redis.set('ioredis', Date());
// redis.get('ioredis', (err, res) => {
// 	if (err) console.log(err);
// 	console.log(res);
// })

redis.lpush('xiaomi', Date())
redis.lrange('xiaomi', 0, -1, (err, res) => {
	console.log(res)
})


// let badRedis;
// try {
// 	badRedis = new Redis(badOptions);
// 	badRedis.end();
// } catch (e) {
// 	console.log(e);
// }
// badRedis.set('badRedis', Date());
// badRedis.get('badRedis', (err, res) => {
// 	if (err) console.log(err);
// 	console.log(res);
// })