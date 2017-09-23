var Realtime = require('leancloud-realtime').Realtime
var TextMessage = require('leancloud-realtime').TextMessage

var realtime = new Realtime({
  appId: 'pYkAGF6TirnGO9AAnP2UJosX-gzGzoHsz',
  region: 'cn', //美国节点为 "us"
});

// Tom 用自己的名字作为 clientId，获取 IMClient 对象实例
realtime.createIMClient('Tom').then(function(tom) {
  // 创建与Jerry之间的对话
  return tom.createConversation({
    members: ['Jerry'],
    name: 'Tom & Jerry',
  });
}).then(function(conversation) {
  // 发送消息
  return conversation.send(new TextMessage('耗子，起床！'));
}).then(function(message) {
  console.log('Tom & Jerry', '发送成功！');
}).catch(console.error);