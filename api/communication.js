export default function handler(req, res) {
  const { cep } = req.query;
  fetch(`https://ws.apicep.com/cep.json?code=${cep}`)
  .then(res => res.json())
  .then(data => {
    res.send(data);
  })
}
