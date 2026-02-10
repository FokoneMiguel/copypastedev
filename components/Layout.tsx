
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-[#4F46E5] hover:opacity-80 transition-opacity">
          Copypaste<span className="text-gray-400">.dev</span>
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/snippets" className={`${isActive('/snippets') ? 'text-[#4F46E5]' : 'text-gray-600'} hover:text-[#4F46E5]`}>Snippets</Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-[#4F46E5]' : 'text-gray-600'} hover:text-[#4F46E5]`}>À propos</Link>
          <Link to="/contact" className={`${isActive('/contact') ? 'text-[#4F46E5]' : 'text-gray-600'} hover:text-[#4F46E5]`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-100 mt-20">
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold text-gray-900">Copypaste.dev</span>
          <p className="text-sm text-gray-500 mt-1">© {new Date().getFullYear()} — Fait avec passion.</p>
        </div>
        <div className="flex gap-8 text-sm text-gray-500">
          <Link to="/about" className="hover:text-gray-900">À propos</Link>
          <Link to="/contact" className="hover:text-gray-900">Contact</Link>
          <a href="mailto:miguelfokone@gmail.com" className="hover:text-gray-900">Email</a>
        </div>
      </div>
    </div>
  </footer>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
