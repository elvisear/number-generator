import { useState } from "react";
import "./styles.css";

function App() {
  const [de, setDe] = useState(0);
  const changeDe = (event) => {
    setDe(event.target.value);
  };

  const [ate, setAte] = useState(0);
  const changeAte = (event) => {
    setAte(event.target.value);
  };

  const [num, setNum] = useState(0);
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(parseFloat(de), parseFloat(ate)));
  };

  const [sorteados, setSorteados] = useState([]);
  function addSorteado() {
    const newSorteado =  parseFloat(num);
    const newSorteados = [...sorteados, newSorteado];
    setSorteados(newSorteados);
  }

  const executaFuncoes = () =>{
    handleClick();
    addSorteado();
  }

  return (
    <div className="tela">
      <h3>Intervalo</h3>
      <div className="intervalo">
        <p>De:</p>
        <input type="number" min='1' value={de} onChange={changeDe} />
        <p>Até:</p>
        <input type="number" min={de} value={ate} onChange={changeAte} />
      </div>

      <h1 className="titulo">O sorteado é</h1>
      <div className="numero">{num}</div>
      <button className="botao" onClick={executaFuncoes}>
        Sortear
      </button>
      <div className="sorteados">
      <h3>Sorteados: </h3>
        {sorteados.map((item) => (
          <h4 key={item}>{item},</h4>
        ))}
      </div>
    </div>
  );
}

export default App;
