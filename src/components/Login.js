import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import assets from '../assets/img2.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = { email, password };

    axios
      .post('http://localhost:3001/user/login', payload)
      .then((res) => {
        toast.success('Login successful');
        setLoading(false);

        // Save token to localStorage
        localStorage.setItem('token', JSON.stringify(res.data.token));

        // Redirect to Home Page
        navigate('/');
      })
      .catch((err) => {
        toast.error('Invalid credentials');
        setLoading(false);
        console.error('Error while logging in', err);
      });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/eb/6d/82/eb6d82182af147efac8080842565ce86.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg p-8 flex w-11/12 max-w-4xl">
        {/* Left Section */}
        <div className="w-1/2 pr-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f54b56] focus:border-[#f54b56] text-gray-800 placeholder-gray-400"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f54b56] focus:border-[#f54b56] text-gray-800 placeholder-gray-400"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-4 font-semibold rounded-lg shadow-md focus:outline-none transition-colors ${
                loading
                  ? 'bg-[#fadcdd] cursor-not-allowed'
                  : 'bg-[#f54b56] hover:bg-[#f54b56] text-white'
              }`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Login'}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <a href="/" className="text-[#f54b56] underline">
              Register
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={assets}
            alt="Illustration"
            className="w-80 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
