import logo from './logo.svg';
import './App.css';
//import styles from 'styled-components';
import NavBar from './componentes/NavBar';
import './estilos/estilos.css'
import ItemListContainer from './componentes/ItemListContainer';
import bienvenida from './images/bienvenida.png'

function App() {

  const styles = {
    color: "red"
  }

  return (

    <>
      <NavBar />
      <div className='logoInicial'>
        <img src={bienvenida} alt="logo" />
      </div>
      <ItemListContainer greeting={"Gabriel"} />

      <div className="App">
        <header className="App-header">
          <p style={styles}>
            Bendita Barrica - Alessandria Cristian
          </p>
          <p>
            Desafío 5 - Catalogo con Maps 
          </p>
          
        </header>
      </div>
    </>
  );
}

export default App;
