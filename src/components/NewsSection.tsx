import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-light text-slate-900 tracking-wide hover:text-blue-700 transition-colors">
              HOPES CONSULTING
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            <Link 
              to="/" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/') ? 'text-slate-900' : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/services') ? 'text-slate-900' : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              SERVICES
            </Link>
            <Link 
              to="/products" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/products') ? 'text-slate-900' : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              PRODUCTS
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/about') ? 'text-slate-900' : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/news" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/news') ? 'text-slate-900' : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              NEWS
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/contact') ? 'text-slate-900' : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          <Link 
            to="/contact" 
            className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 text-sm font-medium tracking-wide hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 rounded-lg shadow-lg"
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
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-blue-100">
          <nav className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-slate-600 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/services" className="block text-slate-600 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
            <Link to="/products" className="block text-slate-600 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>PRODUCTS</Link>
            <Link to="/about" className="block text-slate-600 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            <Link to="/news" className="block text-slate-600 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>NEWS</Link>
            <Link to="/contact" className="block text-slate-600 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;