import express from 'express';

const app = express();

app.get('/', function(request, response) {
	response.send('hello');
});

app.listen(1982, function() {
	console.log(`Server started at http://localhost:1982`);
});