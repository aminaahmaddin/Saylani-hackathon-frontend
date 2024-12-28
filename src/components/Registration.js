import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import assets from '../assets/img.jpg'

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    setLoading(true);
    const payload = {
      name: userName,
      email,
      password,
    };

    axios
      .post('http://localhost:3001/user/register', payload)
      .then((res) => {
        toast.success("Registration successful");
        setLoading(false);
        console.log("User registered", res.data);
      })
      .catch((err) => {
        toast.error("Registration failed");
        setLoading(false);
        console.log("Error while registering", err);
      });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/9e/12/6a/9e126afa5ff03c484c7b34d16a9b9572.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg p-8 flex w-11/12 max-w-4xl">
        {/* Left Section */}
        <div className="w-1/2 pr-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f54b56] focus:border-[#f54b56] text-gray-800 placeholder-gray-400"
                placeholder="Name"
              />
            </div>
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
            <div className="mb-4">
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
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="h-4 w-4 text-[#f54b56] focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the terms and conditions of{' '}
                <a href="/" className="text-[#f54b56] underline">
                  Privacy Policy
                </a>
              </label>
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
              {loading ? 'Submitting...' : 'Register'}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-[#f54b56] underline">
              Login
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

export default Registration;
