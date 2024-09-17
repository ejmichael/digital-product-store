import { Routes, Route } from 'react-router-dom'
import ViewProduct from './pages/ViewProduct';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreateProduct from './pages/admin/CreateProduct';
import {CartProvider} from './context/CartContext'
import Cart from './components/Cart';
import Login from './pages/auth/Login';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import Checkout from './pages/Checkout';
import OrderDetails from './components/OrderDetails';


function App() {
  return (
    <CartProvider>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/profile/:section" element={<PrivateRoute><Profile/></PrivateRoute>} /> {/* Dynamic section */}
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
        <Route path="/orders/:orderId" element={<PrivateRoute><OrderDetails/></PrivateRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:productID' element={<ViewProduct/>} />
        <Route path='/product/create' element={<CreateProduct/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>} />
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
