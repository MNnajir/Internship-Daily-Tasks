// src/components/Navigation.tsx
import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900"><img src="/my-Port/public/pp.jpg" alt="" /></span>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
              <a href="#Blog" className="text-gray-700 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
        </div>
      </div>

      {isMenuOpen && (
            <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Portfolio</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Skills</a>
              
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
      )}
    </nav>
  );
};


export { Navigation,};