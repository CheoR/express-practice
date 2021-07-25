import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	return res.send(`GET /: request on port ${PORT}`);
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

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT} . . . `);
	console.log(data);
});
