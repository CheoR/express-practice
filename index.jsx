import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT} . . . `);
	console.log(data);
});
