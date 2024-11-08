import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="container">
      <h1 className="title"> Buscador de CEP </h1>

      <div className="containerInput"> 
        <input 
          type="text"
          placeholder="Digite seu CEP"
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#000" />
        </button>
      </div>
    </div>
  );
}

export default App;
