const http = require('http');

async function show() {
	const name = await 'aaa'
	return name
}

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  let result = 'aa' 
  show().then((res) => {
  	result = res
  	console.log(result)
	  response.write(result);
	  response.end();
  })
}

http.createServer(onRequest).listen(3001);