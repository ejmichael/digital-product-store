import { Routes, Route } from 'react-router-dom'
import ViewProduct from './pages/ViewProduct';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreateProduct from './pages/admin/CreateProduct';
import {CartProvider} from './context/CartContext'
import Cart from './components/Cart';
import Login from './pages/auth/Login';
import Profile from './pages/Profile';


function App() {
  return (
    <CartProvider>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/profile/:section" element={<Profile />} /> {/* Dynamic section */}
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:productID' element={<ViewProduct/>} />
        <Route path='/product/create' element={<CreateProduct/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
