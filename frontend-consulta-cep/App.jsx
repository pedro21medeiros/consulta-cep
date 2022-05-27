import cepimg from './cepimg.jpeg';
import './App.css';
import CepQuery from './Components/CepQuery';

function App() {
  return (
    <div className="App">
      {<img src={cepimg} className="image" alt="logo" />}
      <section className="App-header">
        <h1 className="title">Quer saber o endereço de algum CEP?</h1>
        <h3>
          Informe abaixo os 8 números do CEP que deseja consultar:
        </h3>
        <CepQuery />
        <p>
        </p>
      </section>
    </div>
  )
}

export default App
