const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  const { cep } = req.query;
  fetch(`https://ws.apicep.com/cep.json?code=${cep}`)
    .then(response => response.json())
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
      console.log(err);
    });
});
