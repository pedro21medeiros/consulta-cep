import cepimg from './cepimg.jpeg';
import './App.css';
import CepQuery from './Components/CepQuery';

function App() {
  return (
    <div className="App">
      {<img src={cepimg} alt="logo" />}
      <section className="App-header">
        <h1 className="title">Consuta de CEP</h1>
        <h3>
          Digite abaixo os 8 digitos do CEP que deseja consultar:
        </h3>
        <CepQuery />
        <p>
        </p>
      </section>
    </div>
  )
}

export default App
