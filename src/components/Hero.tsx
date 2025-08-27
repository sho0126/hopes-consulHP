import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-light bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent tracking-wide hover:opacity-80 transition-opacity">
              HOPES CONSULTING
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            <Link 
              to="/" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/') ? 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent' : 'text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/services') ? 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent' : 'text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent'
              }`}
            >
              SERVICES
            </Link>
            <Link 
              to="/products" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/products') ? 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent' : 'text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent'
              }`}
            >
              PRODUCTS
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/about') ? 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent' : 'text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/news" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/news') ? 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent' : 'text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent'
              }`}
            >
              NEWS
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/contact') ? 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent' : 'text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          <Link 
            to="/contact" 
            className="hidden md:block bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-8 py-3 text-sm font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg"
          >
            お問い合わせ
          </Link>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <nav className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent py-2" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/services" className="block text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent py-2" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
            <Link to="/products" className="block text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent py-2" onClick={() => setIsMenuOpen(false)}>PRODUCTS</Link>
            <Link to="/about" className="block text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent py-2" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            <Link to="/news" className="block text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent py-2" onClick={() => setIsMenuOpen(false)}>NEWS</Link>
            <Link to="/contact" className="block text-gray-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-indigo-900 hover:bg-clip-text hover:text-transparent py-2" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;