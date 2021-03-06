import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import data from './data/data.json';

const app = express();
const PORT = 3000;

// middleware
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(express.json());

// stringify data from client
// in postman change 
// content-type: appilcation/json to application/x-www-form-urlencoded
// and in body select the same value.
// data should now be passed in key/value
app.use(express.urlencoded({extended: true}));

// for proxies
// http://expressjs.com/en/guide/behind-proxies.html#express-behind-proxies
app.set('trust proxy', 'loopback');

// routes
app.get('/item/:id', (req, res, next) => {
	// throw new Error();
	const id = Number(req.params.id);
	console.log(`UserId: ${id}`);
	console.log(data[id]);
	return res.send(data[id]);
	next();
}, (req, res) => {
	console.log('Data sent');
});

app.get('/', (req, res) => {
	// return res.json(data)
	return res.json({'data': 'data here'})
});

app.post('/newItem', (req, res) => {
	// return res.send(`POST /newItem: request on port ${PORT}`);
	console.log(`POST: ${req.body}`);
	return res.send(req.body);
});

// app.put('/item', (req, res) => {
// 	return res.send(`PUT /item: request on port ${PORT}`);
// });

// app.delete('/item', (req, res) => {
// 	return res.send(`DELETE /item: request on port ${PORT}`);
// });

// app.route('/item')
// 	.get((req, res,) => {
// 			return res.send(`GET /item: request on port ${PORT}`);
// 	})
// 	.post((req, res) => {
// 		return res.send(`POST /newItem: request on port ${PORT}`);
// 	})
// 	.put((req, res) => {
// 		return res.send(`PUT /item: request on port ${PORT}`);
// 	})
// 	.delete((req, res) => {
// 		return res.send(`DELETE /item: request on port ${PORT}`);
// 	});

// Good idea to put error handlers last before listen
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send(`Error on page:\n\t${err.stack}`);
});

// serve
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT} . . . `);
	console.log(data);
});
