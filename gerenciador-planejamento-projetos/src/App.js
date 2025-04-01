
import './App.css';
import HelloWorld from './components/HelloWorld'

const name = 'Thayane';
const newName = name.toLocaleUpperCase();


function sum(a, b){
  return a + b;
}

function App() {
  return (
    <div className="App">
      <h1>Alterando JSX</h1>
      <p>Olá, {name}</p>
      <p>Olá, {newName}</p>
      <p>Soma: {2 + 2}</p>
      <p>Função Soma: {sum(3, 4)}</p>
      <HelloWorld />      
    </div>
  );
}

export default App;
