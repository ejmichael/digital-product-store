import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const redirectPath = location.state?.path || '/';

  useEffect(() => {
    if (user) {
      navigate(redirectPath, { replace: true });
    }
  }, [user, navigate, redirectPath]);

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Enter your email address");
      return;
    }
    if (!password) {
      toast.error("Enter your password");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/user/user-login', { email, password });
      const user = response.data;

      // Save the user to localStorage
      localStorage.setItem('user', JSON.stringify(user));

      // Update AuthContext state
      dispatch({ type: 'LOGIN', payload: user });

      // Navigate to the redirect path or home
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.error('Login failed', error);
      toast.error("Login failed. Please try again.");
    }
  };
  

  return (
    <div className='w-full h-[calc(100vh-80px)] bg-slate-100 py-12'>
      <div className="m-auto flex-col shadow rounded-md lg:w-[30%] md:w-[50%] p-4 bg-white">
        <div className="flex items-center gap-1 justify-center p-2">
          <span className='font-medium text-3xl text-[#623BEC]'>Login</span>
        </div>
        <div className="flex justify-center">
          <p className='font-medium text-gray-500 text-lg'>Sign in to your account</p>
        </div>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="my-4 min-w-[300px]">
            <div className="my-2">
              <input
                type="email"
                className="border rounded p-2 w-full"
                name="email"
                id='email'
                value={email}
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <input
                type="password"
                className="border rounded p-2 w-full"
                name="password"
                id='password'
                value={password}
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>
            <div className='my-4 w-full border text-center py-2 rounded hover:text-indigo-700 hover:shadow-sm bg-indigo-500 text-white font-semibold'>
              <button type="submit" className="text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
