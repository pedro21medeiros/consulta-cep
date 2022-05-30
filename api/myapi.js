export default function handler(request, response) {
  const { cep } = request.query;
  fetch(`https://ws.apicep.com/cep.json?code=${cep}`)
    .then(response => response.json())
    .then(data => {
      response.send(data);
    })
};
