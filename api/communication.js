export default function communication(req, res) {
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
};
