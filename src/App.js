import logo from './logo.svg';
import './App.css';
//import styles from 'styled-components';
import NavBar from './componentes/NavBar';
import './estilos/estilos.css'
import ItemListContainer from './componentes/ItemListContainer';

function App() {

  const styles = {
    color: "red"
  }


  return (

    <>
        <NavBar />
        <ItemListContainer greeting={"Gabriel"} />

<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p style={styles}>
      Bendita Barrica - Alessandria Cristian
    </p>
    <a
      className="App-link"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      Desafío 3 - CartWidget 
    </a>
    
  </header>
</div>
    </>


  );
}

export default App;
