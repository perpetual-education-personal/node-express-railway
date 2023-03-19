import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

const port = process.env.PORT || 1996;

app.get('/', function(request, response) {
	response.send('Hello');
});

app.listen(port, function() {
	console.log(`Server started at http://localhost:${port}`);
});