const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('service is up and running for Lee Yang'));

app.get('/who', (req, res) =>
	res.send('Lee Yang is an amazing guy. He is working on improving himself.')
);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
