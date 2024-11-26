import { Routes, Route, Link } from 'react-router-dom'
import ViewProduct from './pages/ViewProduct';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreateProduct from './pages/admin/CreateProduct';
import {CartProvider} from './context/CartContext'
import Cart from './components/Cart';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import Checkout from './pages/Checkout';
import OrderDetails from './components/OrderDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import UploadPDF from './pages/admin/UploadPDF';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import ContactUs from './pages/ContactUs';

import ReactGA from 'react-ga4';
import AnalyticsTracker from './AnalyticsTracker';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentCancelled from './pages/PaymentCancelled';

function App() {

  ReactGA.initialize('G-HLWNWMQH98'); // Replace with your Measurement ID
  ReactGA.send('pageview'); // Tracks the initial pageview

  return (
    <>
    <AnalyticsTracker/>
    <CartProvider>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/profile/:section" element={<PrivateRoute><Profile/></PrivateRoute>} /> {/* Dynamic section */}
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
        <Route path="/orders/:orderId" element={<PrivateRoute><OrderDetails/></PrivateRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/product/:productID' element={<ViewProduct/>} />
        <Route path='/product/create' element={<CreateProduct/>} />
        <Route path='/product/upload' element={<UploadPDF/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/terms' element={<TermsOfService/>} />
        <Route path='/refunds' element={<RefundPolicy/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancelled />} />
      </Routes>
    </div>
    <div className="py-6 text-center bg-gray-800 text-white rounded-lg">
        <div className="mb-4 flex flex-wrap justify-center space-x-4">
          <Link to="/contact" className="hover:text-green-600">Contact us</Link>
          <Link to="/privacy-policy" className="hover:text-green-600">Privacy Policy</Link>
          <Link to="/refunds" className="hover:text-green-600">Refund Policy</Link>
          <Link to="/terms" className="hover:text-green-600">Terms of Service</Link>
        </div>
        <p className="italic">© 2024 Blood Sugar Companion. All rights reserved.</p>
      </div>
    </CartProvider>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
