import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CardContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-light tracking-wider">
          LUMIÈRE
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm tracking-wide hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/collections" className="text-sm tracking-wide hover:text-accent transition-colors">
            Collection
          </Link>
          <a 
            href="#contact" 
            onClick={handleContactClick}
            className="text-sm tracking-wide hover:text-accent transition-colors cursor-pointer"
          >
            Contact
          </a>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Cart and Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="text-base tracking-wide hover:text-accent transition-colors py-2"
            >
              Home
            </Link>
            <Link 
              to="/collections" 
              onClick={closeMenu}
              className="text-base tracking-wide hover:text-accent transition-colors py-2"
            >
              Collection
            </Link>
            <a 
              href="#contact" 
              onClick={handleContactClick}
              className="text-base tracking-wide hover:text-accent transition-colors cursor-pointer py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
