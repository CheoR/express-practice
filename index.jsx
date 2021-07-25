import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

// middleware
app.use(express.static('public'));
app.use('/images', express.static('images'));

// routes
app.get('/', (req, res) => {
	// return res.send(`GET /: request on port ${PORT}`);
	return res.json(data);
});

app.post('/newItem', (req, res) => {
	return res.send(`POST /newItem: request on port ${PORT}`);
});

app.put('/item', (req, res) => {
	return res.send(`PUT /item: request on port ${PORT}`);
});

app.delete('/item', (req, res) => {
	return res.send(`DELETE /item: request on port ${PORT}`);
});

// serve
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT} . . . `);
	console.log(data);
});
