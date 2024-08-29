import { Routes, Route } from 'react-router-dom'
import ViewProduct from './pages/ViewProduct';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreateProduct from './pages/admin/CreateProduct';
import {CartProvider} from './context/CartContext'
import Cart from './components/Cart';


function App() {
  return (
    <CartProvider>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/product/:productID' element={<ViewProduct/>} />
        <Route path='/product/create' element={<CreateProduct/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
