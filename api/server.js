const express = require('express');
const app = express();
const getAddress = require('./getAddress');
const PORT = process.env.PORT || 3001;

app.use(express.json({ extended: false }));

app.use('/', getAddress);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
