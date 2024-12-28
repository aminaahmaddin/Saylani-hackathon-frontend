import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#e2526d] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-white text-xl font-semibold">
          My App
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navbar items for desktop */}
        <div className="hidden lg:flex space-x-4 items-center">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              className="w-64 px-4 py-2 rounded-full"
              placeholder="Search..."
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 11-7 7 7 7 0 017-7zm0 0a7 7 0 100 14 7 7 0 000-14zm0 0v6"></path>
              </svg>
            </button>
          </div>

        
          <button className="bg-white text-[#e2526d] px-4 py-2 rounded-full hover:bg-yellow-500">
            Logout
          </button>
        </div>
      </div>

      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} p-4 bg-blue-500`}>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md"
              placeholder="Search..."
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 11-7 7 7 7 0 017-7zm0 0a7 7 0 100 14 7 7 0 000-14zm0 0v6"></path>
              </svg>
            </button>
          </div>

          <button className="bg-[#249a9c] text-white px-4 py-2 rounded-md hover:bg-[#249a9c] w-full">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
