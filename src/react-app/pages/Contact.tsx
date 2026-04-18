import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight, Home, TrendingUp, Plane, CheckCircle2 } from 'lucide-react';

const quickOptions = [
  {
    title: "I Want to Buy",
    description: "Looking for your dream home in Pittsburgh? Let's start the search.",
    icon: Home,
    link: '/buy',
  },
  {
    title: "I Want to Sell",
    description: "Ready to sell? Get a free home valuation and marketing plan.",
    icon: TrendingUp,
    link: '/sell',
  },
  {
    title: "I'm Relocating",
    description: "Moving to Pittsburgh? I relocated here too - I can help.",
    icon: Plane,
    link: '/neighborhoods',
  },
];

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '412-608-3981', href: 'tel:412-608-3981' },
  { icon: Mail, label: 'Email', value: 'tejas.desai@compass.com', href: 'mailto:tejas.desai@compass.com' },
  { icon: MapPin, label: 'Location', value: 'Wexford, PA', href: null },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', value: '@tejasd.realtor', href: 'https://www.instagram.com/tejasd.realtor/' },
  { icon: Facebook, label: 'Facebook', value: 'Tejas Desai', href: 'https://www.facebook.com/profile.php?id=61555418001302' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect', href: 'https://www.linkedin.com/company/tejasdesai-realtor/' },
];

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Tejas Desai | Pittsburgh North Real Estate Expert</title>
        <meta name="description" content="Reach out to Tejas Desai for expert real estate guidance in Wexford, Cranberry, and Sewickley. Call 412-608-3981 or message me directly to discuss your goals." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <QuickOptionsSection />
        <ContactFormSection />
        <MapSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-secondary">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Contact</p>
        <h1 className="text-display text-5xl md:text-6xl mb-6">Let's Connect</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Ready to buy, sell, or just explore your options? I'm here to help. 
          Reach out and let's start a conversation about your real estate goals.
        </p>
      </div>
    </section>
  );
}

function QuickOptionsSection() {
  return (
    <section className="py-16">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickOptions.map((option) => (
            <Link
              key={option.title}
              to={option.link}
              className="group p-8 border border-black/10 hover:border-black hover:bg-black hover:text-white transition-all"
            >
              <option.icon size={32} strokeWidth={1.5} className="mb-4 text-champagne group-hover:text-champagne" />
              <h3 className="text-xl font-medium mb-2">{option.title}</h3>
              <p className="text-muted-foreground group-hover:text-white/70 text-sm mb-4">{option.description}</p>
              <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // FORMSPREE ENDPOINT
      const FORMSPREE_URL = 'https://formspree.io/f/mzdyeary';
      
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', interest: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const successRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (submitStatus === 'success' && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [submitStatus]);

  if (submitStatus === 'success') {
    return (
      <section className="py-24" ref={successRef}>
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto text-center animate-in fade-in zoom-in duration-500">
            <CheckCircle2 size={64} className="text-champagne mx-auto mb-6" />
            <h2 className="text-display text-4xl mb-4">Thank You!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you! Tejas will be in touch within 24 hours.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-secondary">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-display text-3xl mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black"
                />
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-widest mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black"
                />
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-widest mb-2">Are you buying or selling?</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black"
                >
                  <option value="">Select an option</option>
                  <option value="buying">Buying</option>
                  <option value="selling">Selling</option>
                  <option value="both">Both</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-widest mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black resize-none"
                  placeholder="Tell me about your real estate goals..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm text-center">
                  Something went wrong. Please email tejas.desai@compass.com directly.
                </p>
              )}
            </form>
          </div>
          
          {/* Contact Details */}
          <div>
            <h2 className="text-display text-3xl mb-8">Get in Touch</h2>
            
            <div className="bg-white border border-black/10 p-8 mb-8">
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-black/10 flex items-center justify-center">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium hover:text-champagne transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <hr className="my-6 border-black/10" />
              
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Follow Along</p>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                      <social.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{social.label}</p>
                      <p className="font-medium">{social.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48568.85548752886!2d-80.09683772089842!3d40.62553759999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834875d3c0a0d8b%3A0x2c77b4d48e0f5a4!2sWexford%2C%20PA%2015090!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Wexford, PA Map"
      />
    </section>
  );
}

function BookingSection() {
  return (
    <section className="py-24">
      <div className="container-narrow text-center">
        <h2 className="text-display text-3xl md:text-4xl mb-4">Or Book a Call Directly</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Skip the back-and-forth. Pick a time that works for you and let's chat.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-black/10 overflow-hidden">
            <iframe
              src="https://cal.com/tejasdesai/15min?embed=true&theme=light"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a call with Tejas Desai"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
