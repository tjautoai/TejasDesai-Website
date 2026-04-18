import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, TrendingUp, Camera, Megaphone, FileText, Handshake } from 'lucide-react';
import Layout from '@/react-app/components/Layout';

function PageHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2832')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container-narrow w-full">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-4">Sellers</p>
          <h1 className="text-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Sell Your Home for Top Dollar
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Strategic pricing, stunning presentation, and relentless negotiation. 
            Let's get you the best possible outcome.
          </p>
          <a href="#valuation" className="btn-primary inline-block">
            Get Your Free Home Valuation
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyCompassSection() {
  const reasons = [
    {
      icon: Camera,
      title: 'Professional Presentation',
      description: 'HDR photography, 3D tours, drone footage, and staging consultation to showcase your home at its absolute best.',
    },
    {
      icon: Megaphone,
      title: 'Unmatched Marketing',
      description: 'Compass reaches more buyers through targeted digital campaigns, social media, and our exclusive network.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Pricing',
      description: 'Data-driven market analysis ensures your home is priced to attract offers while maximizing your return.',
    },
    {
      icon: Handshake,
      title: 'Expert Negotiation',
      description: 'My corporate background means I fight for every dollar. You get someone who knows how to close deals.',
    },
  ];

  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">The Compass Advantage</p>
          <h2 className="text-display text-4xl md:text-5xl mb-6">Why Sellers Choose Us</h2>
          <p className="text-lg text-muted-foreground">
            Selling your home is a significant decision. You deserve a partner who treats it that way — 
            with the strategy, resources, and attention it deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-black/20 flex items-center justify-center">
                <reason.icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuationFormSection() {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    condition: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzdyeary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Valuation submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const successRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [submitted]);

  if (submitted) {
    return (
      <section id="valuation" className="py-24 bg-secondary" ref={successRef}>
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 border border-champagne flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} className="text-champagne" />
            </div>
            <h2 className="text-display text-4xl md:text-5xl mb-6">Thank You!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I've received your home valuation request and will prepare a comprehensive 
              market analysis. Expect to hear from me within 24 hours.
            </p>
            <Link to="/" className="btn-primary inline-block">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="valuation" className="py-24 bg-secondary">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Free Service</p>
            <h2 className="text-display text-4xl md:text-5xl mb-6">What's Your Home Worth?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a complimentary, no-obligation market analysis of your home. 
              I'll provide you with comparable sales, current market trends, and a 
              realistic price range based on today's Pittsburgh market.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 size={20} className="text-champagne flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Comprehensive Market Analysis</p>
                  <p className="text-sm text-muted-foreground">Recent sales, active listings, and market trends in your area</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 size={20} className="text-champagne flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Personalized Pricing Strategy</p>
                  <p className="text-sm text-muted-foreground">Recommendations tailored to your goals and timeline</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 size={20} className="text-champagne flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">No Obligation</p>
                  <p className="text-sm text-muted-foreground">Just valuable information to help you make informed decisions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/10 p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Property Address *</label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="123 Main Street"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">City *</label>
                <select
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black bg-white"
                >
                  <option value="">Select your city</option>
                  <option value="Wexford">Wexford</option>
                  <option value="Cranberry Township">Cranberry Township</option>
                  <option value="Sewickley">Sewickley</option>
                  <option value="North Hills">North Hills</option>
                  <option value="McCandless">McCandless</option>
                  <option value="Pittsburgh">Pittsburgh</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Beds</label>
                  <select
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black bg-white"
                  >
                    <option value="">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6+">6+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Baths</label>
                  <select
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black bg-white"
                  >
                    <option value="">-</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3</option>
                    <option value="3.5">3.5</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sq Ft</label>
                  <input
                    type="text"
                    name="squareFeet"
                    placeholder="2,000"
                    value={formData.squareFeet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Home Condition</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black bg-white"
                >
                  <option value="">Select condition</option>
                  <option value="Excellent">Excellent - Move-in ready, updated</option>
                  <option value="Good">Good - Well maintained, minor updates needed</option>
                  <option value="Fair">Fair - Needs some work</option>
                  <option value="Needs Work">Needs significant renovation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Timeline to Sell</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">As soon as possible</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="Just curious">Just curious about value</option>
                </select>
              </div>

              <div className="border-t border-black/10 pt-6">
                <p className="text-sm font-medium mb-4">Your Contact Information</p>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Comments</label>
                <textarea
                  name="comments"
                  rows={3}
                  placeholder="Tell me about your home or any questions you have..."
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 focus:outline-none focus:border-black resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Request My Free Valuation'}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Your information is confidential and will never be shared or sold.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Consultation & Analysis',
      description: 'We meet to discuss your goals, timeline, and home. I prepare a comprehensive market analysis and pricing strategy.',
    },
    {
      number: '02',
      icon: Camera,
      title: 'Preparation & Staging',
      description: 'Professional photography, staging consultation, and any recommended improvements to maximize your home\'s appeal.',
    },
    {
      number: '03',
      icon: Megaphone,
      title: 'Marketing & Showings',
      description: 'Your home hits the market with a full marketing campaign. I coordinate showings and gather buyer feedback.',
    },
    {
      number: '04',
      icon: Handshake,
      title: 'Negotiation & Closing',
      description: 'I negotiate aggressively on your behalf, navigate inspections and contingencies, and guide you smoothly to closing.',
    },
  ];

  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">The Journey</p>
          <h2 className="text-display text-4xl md:text-5xl mb-6">How We Sell Your Home</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From our first conversation to handing over the keys, here's what you can expect 
            when you partner with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-light text-black/10 mb-4">{step.number}</div>
              <div className="w-12 h-12 border border-black/20 flex items-center justify-center mb-4">
                <step.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display text-4xl md:text-5xl mb-6">Ready to Make Your Move?</h2>
          <p className="text-xl text-white/70 mb-10">
            Whether you're ready to list tomorrow or just starting to think about selling, 
            I'm here to help you understand your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#valuation" className="btn-primary">
              Get Your Free Valuation
            </a>
            <Link to="/about#schedule" className="btn-outline border-white text-white hover:bg-white hover:text-black">
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SellPage() {
  return (
    <Layout>
      <Helmet>
        <title>Selling Your Pittsburgh Home | Tejas Desai REALTOR®</title>
        <meta name="description" content="Ready to sell your Pittsburgh home? Get a free home valuation, professional marketing plan, and strategic pricing advice from Tejas Desai. Sell faster and for more with Compass." />
      </Helmet>
      <PageHero />
      <WhyCompassSection />
      <ValuationFormSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
}
