import { useState } from 'react';
import { Link } from 'react-router';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  explore: [
    { name: 'Buy a Home', href: '/buy' },
    { name: 'Sell Your Home', href: '/sell' },
    { name: 'Listings', href: '/listings' },
    { name: 'Neighborhoods', href: '/neighborhoods' },
  ],
  resources: [
    { name: 'Mortgage Calculator', href: '/resources#mortgage-calculator' },
    { name: 'Blog', href: '/blog' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/resources#faq' },
  ],
  about: [
    { name: 'About Tejas', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/tejasd.realtor/', icon: Instagram },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61555418001302', icon: Facebook },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/tejasdesai-realtor/', icon: Linkedin },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // FORMSPREE ENDPOINT
      const FORMSPREE_URL = 'https://formspree.io/f/xgoralyb';
      
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          source: 'Footer Subscription',
          message: 'User subscribed via website footer'
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-narrow py-16">
          <div className="max-w-xl">
            <h3 className="text-display text-3xl mb-4">Get Monthly Pittsburgh Market Updates</h3>
            <p className="text-white/60 mb-6">
              Stay informed with the latest real estate trends, new listings, and market insights.
            </p>
            {isSubscribed ? (
              <p className="text-champagne font-medium animate-in fade-in duration-500">
                You're subscribed! You'll receive monthly Pittsburgh market updates.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-white text-black font-medium text-sm uppercase tracking-widest hover:bg-white/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? '...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-medium tracking-tight">Tejas Desai</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">
                REALTOR® | <span style={{letterSpacing: '0.2em', fontWeight: 300}}>COMPASS</span>
              </p>
            </div>
            <div className="space-y-3 text-sm text-white/70">
              <a href="tel:412-608-3981" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} />
                412-608-3981
              </a>
              <a href="mailto:tejas.desai@compass.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} />
                tejas.desai@compass.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={16} />
                Wexford, PA
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Compass Logo */}
            <div className="mt-8">
              <span style={{letterSpacing: '0.2em', fontWeight: 300}} className="text-white opacity-70">COMPASS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Tejas Desai. All rights reserved. PA License #RS371152</p>
            <div className="flex items-center gap-4">
              <span>Member: NAR • PAR • West Penn Multi-list</span>
              <svg viewBox="0 0 50 50" fill="currentColor" className="h-5 opacity-50 text-white">
                <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 43C14 45 5 36 5 25S14 5 25 5s20 9 20 20-9 20-20 20z"/>
                <path d="M25 10c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 27c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/>
                <text x="25" y="30" fontSize="14" fontWeight="bold" textAnchor="middle" fill="currentColor">R</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
