const Koa = require('koa');
const router = require('koa-route');
const amqp = require('amqplib');
const uuid = require('uuid');
const app = new Koa();

const correlationId = uuid();
const q = 'hello';//前端发送消息队列
const q2 = 'ackq';//后台回复队列
//conn写成全局变量，循环利用。否则每次访问路由都会创建conn
let conn = amqp.connect({ host: 'localhost' });
//依然id每次请求递增1
let globalUserId = 1;

app.use(router.get('/',function (){
  this.body = 'hello world';
}));

app.use(router.get('/buy', async function(){
  const num = globalUserId ++;
  const ch = await conn.createChannel()
  // await ch.assertQueue(q2,{durable:false})
  ch.sendToQueue(q,new Buffer(num.toString()),{replyTo:q2,correlationId:correlationId})

  //conn我们在外部创建，并且只创建一次（复用）
  // conn.createChannel().then(function(ch){
  //   //监听q2队列（订单量如果到达100，服务端会通过q2队列返回信息）
  //   return ok = ch.assertQueue(q2,{durable:false}).then(function(){
  //     //创建消费q2队列，这里简单把信息设置到res的body里
  //     ch.consume(q2,function(msg){
  //       console.log(msg.content.toString());
  //       this.body = msg.content.toString();
  //       ch.close();
  //     },{noAck:true});
  //     //发送消息到q队列，这里把订单id作为content。把q2队列的name和uuid也传过去，这里uuid用来做消息的关联id
  //     ch.sendToQueue(q,new Buffer(num.toString()),{replyTo:q2,correlationId:correlationId})
  //   });
  // }).then(null,console.error);
  this.body = num;
}));

amqp.connect('amqp://127.0.0.1').then(function(_conn){
  conn = _conn;
});

app.listen(5001,function(){
  console.log('server listen on 5001');
});
