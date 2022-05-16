import logo from './logo.svg';
import './App.css';
//import styles from 'styled-components';
import NavBar from './componentes/NavBar';
import './estilos/estilos.css'
import ItemListContainer from './componentes/ItemListContainer';
import bienvenida from './images/bienvenida.png'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';
import Contacto from './views/Contacto';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  const styles = {
    color: "red"
  }

  return (

    
      <Router>
        <NavBar />
        <div className='logoInicial'>
          <img src={bienvenida} alt="logo" />
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
  );
}

export default App;
