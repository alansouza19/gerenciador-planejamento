
import './App.css';
import Condicional from './components/Condicional'


/* const name = 'Thayane';
const newName = name.toLocaleUpperCase(); */


/* function sum(a, b){
  return a + b;
} */


function App() {
  return (
    <div className="App">
    {/*   <HelloWorld />   
      <SayMyName nome="Alan"/>
      <SayMyName nome={nome}/>  
      <Pessoa nome="Souza"
        idade={28}
        profissao="Developer" 
        foto="https://github.com/alansouza19/angular-cadastro-veiculos/blob/master/src/assets/.gitkeep"/> 
      <List/> */}

      <h1>Renderização Condicional</h1>
      <Condicional/>
    </div>
  );
}

export default App;
