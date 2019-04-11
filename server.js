var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
const request = require('request');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use((req, res) => {
//  res.writeHead(200);
//  res.end("hello world\n");
//});

// respond with "hello world" when a GET request is made to the homepage

app.get('/', function (req, res) {
  res.send('hello world')
});

app.post('/sensordata', function(req,res) {
	var data = req.body;
	res.send('POST request to the homepage');
	console.log("data ontvangen");
	console.log(req.body);

//	request.post('https://vanloocke.synology.me:1880/sensordata', {json: req.body});

	request.post({
		url:'https://vanloocke.synology.me:1880/sensordatanodered',
		//form: {key:'value'}},
		strictSSL: false,
		json: data
		
		//function(err,httpResponse,body){objResponse.send(data)}
		//(error, res, body) => {
		//  if (error) {
		//    console.error(error)
		//    return
		//  }
		//  console.log(`statusCode: ${res.statusCode}`)
		//  console.log(body)
		//})
	});
});

//var https = require('https');
//https.createServer(options, app).listen(443);

app.listen(81, function () {
    console.log('Example app listening on port 81.');
});
