import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/disney', label: 'Disney' },
    { path: '/warner-bros', label: 'Warner Bros' },
    { path: '/comcast', label: 'Comcast' }
  ];
  
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold tracking-tight transition-colors duration-200 hover:text-accent" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
            Media Conglomerations
          </Link>
          
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-foreground bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;