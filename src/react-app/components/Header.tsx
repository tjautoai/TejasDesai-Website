import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Buy', href: '/buy' },
  { name: 'Sell', href: '/sell' },
  { name: 'Listings', href: '/listings' },
  { name: 'Neighborhoods', href: '/neighborhoods' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerBg = isScrolled || !isHomePage
    ? 'bg-white border-b border-black/10'
    : 'bg-transparent';

  const textColor = isScrolled || !isHomePage ? 'text-black' : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/TD-Logo.png" 
                alt="Tejas Desai Logo" 
                className="h-10 md:h-12 w-auto mr-3"
              />
              <div className="flex flex-col">
                <span className={`text-xl font-medium tracking-tight ${textColor}`}>
                  Tejas Desai
                </span>
                <span className={`text-[10px] uppercase tracking-[0.2em] ${textColor} opacity-70`}>
                  REALTOR® | Compass
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium tracking-wide ${textColor} hover:opacity-60 transition-opacity`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:412-608-3981"
                className={`flex items-center gap-2 text-sm font-medium ${textColor}`}
              >
                <Phone size={14} />
                412-608-3981
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${textColor}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <div className="pt-24 px-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-2xl font-medium text-black tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-black/10">
                <a
                  href="tel:412-608-3981"
                  className="flex items-center gap-3 text-lg font-medium text-black"
                >
                  <Phone size={18} />
                  412-608-3981
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
