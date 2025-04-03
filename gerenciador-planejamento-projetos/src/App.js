
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List';

/* const name = 'Thayane';
const newName = name.toLocaleUpperCase(); */


/* function sum(a, b){
  return a + b;
} */

  const nome = 'João'

function App() {
  return (
    <div className="App">
      <HelloWorld />   
      <SayMyName nome="Alan"/>
      <SayMyName nome={nome}/>  
      <Pessoa nome="Souza"
        idade={28}
        profissao="Developer" 
        foto="https://via.placeholder.com/150"/> 
      <List/>
    </div>
  );
}

export default App;
