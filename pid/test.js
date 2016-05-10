var http = require('http');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
	//host: 'www.random.org',
	//path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
	host: 'node-0.bioinspired.cloudrobotics-pg0.clemson.cloudlab.us',
	path: '/error?data=20%20.02%203%200%20-3%20-10%200%20.9'
};

callback = function(response) {
	var str = '';
	console.log("status: " + response.statusCode);
	//another chunk of data has been recieved, so append it to `str`
	response.on('data', function (chunk) {
		str += chunk;
	});

	//the whole response has been recieved, so we just print it out here
	response.on('end', function () {
		console.log(str);
	});
}

var req = http.get(options, callback);
/*req.on('error', function(){
	console.log("error");
});*/
