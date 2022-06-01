import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import './estilos/estilos.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import bienvenida from './images/bienvenida.png'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cart from './componentes/Cart/Cart.jsx';
import { CartContextProvider } from './componentes/CartContext/CartContext';
import Footer from './componentes/Footer/Footer.jsx'


function App() {

  
  return (

      <CartContextProvider>
        <Router>
          <div className='logoInicial'>
            <Link className='Link' to='/'>
              <img src={bienvenida} alt="logo" />
            </Link>
          </div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </Router>
      </CartContextProvider>

  );
}

export default App;
