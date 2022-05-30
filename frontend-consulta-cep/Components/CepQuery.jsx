import React, { useState } from 'react';

const CepQuery = () => {
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [uf, setUf] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCep(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setError('');
      fetch(`https://ws.apicep.com/cep.json?code=${cep}`)
        .then((res) => res.json())
        .then((data) => {
          setCity(data.city);
          setStreet(data.address);
          setDistrict(data.district);
          setUf(data.state);
          if(data.ok === false) {
            setError(data.message);
            setCity('');
            setStreet('');
            setDistrict('');
            setUf('');
          }
        })
        .catch((err) => setError(err.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required="required"
          pattern="[0-9]{8}" // Gera um aviso ao usuário caso o CEP não seja válido
          name="cep"
          id="cep"
          placeholder="Digite o CEP aqui"
          value={cep}
          onChange={handleChange}
        />
        <button type="submit">Consultar</button>
      </form>
      {error && <p>{error}</p>}
      <p>{`${street}`}</p>
      <p>{`${district}`}</p>
      <p>{`${city}  ${uf}`}</p>
    </div>
  );
};

export default CepQuery;
