import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import History from './components/history/History';
import api from './api/api';
import './style.css';

const STORED_ITEMS = localStorage.getItem("historic")

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  const [history, setHistory] = useState(
    STORED_ITEMS ? JSON.parse(STORED_ITEMS) : []
  );

  useEffect(() => {
    localStorage.setItem('historic', JSON.stringify(history))
  }, [history])

  async function handleSearch(){
    
    if(input === ''){
      alert("Preencha algum CEP!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")
      setHistory([...history, response.data])
    }catch{
      alert("Ops, erro ao buscar CEP!");
      setInput("");
    }

  }

  return (
    <div className="container">
      <h1 className='title'> Buscador de CEP </h1>

      <form className='containerInput' onSubmit={(e) => {e.preventDefault()}}>
        <input 
          type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className='buttonSearch' onClick={handleSearch} type='submit'>
          <FiSearch size={25} color="#fff"/>
        </button>
      </form>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2> CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

        </main>
      )}

      <History />
    </div>
  );
}

export default App;