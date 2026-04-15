import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="text-lg font-semibold mb-3 block" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              Media Conglomerations
            </span>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed max-w-md">
              An educational resource exploring the structure, history, and influence of major media conglomerates in the entertainment industry.
            </p>
          </div>
          
          <div>
            <span className="text-sm font-medium mb-3 block">Navigation</span>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                Home
              </Link>
              <Link to="/disney" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                Disney
              </Link>
              <Link to="/warner-bros" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                Warner Bros
              </Link>
              <Link to="/comcast" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                Comcast
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/70">
            © {currentYear} Media Conglomerations. Educational purposes only.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;