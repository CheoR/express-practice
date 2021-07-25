import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

// middleware
app.use(express.static('public'));
app.use('/images', express.static('images'));

// routes
app.get('/item/:id', (req, res, next) => {
	const id = Number(req.params.id);
	console.log(`UserId: ${id}`);
	console.log(data[id]);
	return res.send(data[id]);
	next();
}, (req, res) => {
	console.log('Data sent');
});

// app.post('/newItem', (req, res) => {
// 	return res.send(`POST /newItem: request on port ${PORT}`);
// });

// app.put('/item', (req, res) => {
// 	return res.send(`PUT /item: request on port ${PORT}`);
// });

// app.delete('/item', (req, res) => {
// 	return res.send(`DELETE /item: request on port ${PORT}`);
// });

app.route('/item')
	.get((req, res,) => {
			return res.send(`GET /item: request on port ${PORT}`);
	})
	.post((req, res) => {
		return res.send(`POST /newItem: request on port ${PORT}`);
	})
	.put((req, res) => {
		return res.send(`PUT /item: request on port ${PORT}`);
	})
	.delete((req, res) => {
		return res.send(`DELETE /item: request on port ${PORT}`);
	});

// serve
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT} . . . `);
	console.log(data);
});
