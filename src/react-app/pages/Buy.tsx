import { useState } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Search, FileText, Home, Key, MapPin, Calculator } from 'lucide-react';
import Layout from '@/react-app/components/Layout';

function PageHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2832')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container-narrow w-full">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-4">Buyers</p>
          <h1 className="text-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Find Your Perfect Pittsburgh Home
          </h1>
          <p className="text-xl text-white/80 mb-8">
            From first-time buyers to growing families, I'll guide you through every step 
            of finding and securing your dream home.
          </p>
          <Link to="/listings" className="btn-primary inline-block">
            Browse Available Homes
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyWorkWithMeSection() {
  const reasons = [
    {
      icon: MapPin,
      title: 'Local Market Expertise',
      description: "I know Pittsburgh's neighborhoods inside and out - the schools, the commutes, the hidden gems, and the up-and-coming areas.",
    },
    {
      icon: Search,
      title: 'Access to Listings',
      description: "Get notified about new properties before they hit the public market. Compass's network gives you an edge.",
    },
    {
      icon: FileText,
      title: 'Guidance Through Paperwork',
      description: 'From offers to inspections to closing, I handle the details so you can focus on finding the right home.',
    },
    {
      icon: Key,
      title: 'Strong Negotiation',
      description: "My corporate background means I know how to negotiate. I'll fight to get you the best possible price and terms.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Your Advocate</p>
          <h2 className="text-display text-4xl md:text-5xl mb-6">Why Buy With Me</h2>
          <p className="text-lg text-muted-foreground">
            Buying a home is one of the biggest decisions you'll make. You deserve someone 
            in your corner who puts your interests first — every step of the way.
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

function BuyingProcessSection() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Get Pre-Approved',
      description: "We start by understanding your budget. I'll connect you with trusted lenders who can get you pre-approved quickly.",
    },
    {
      number: '02',
      icon: Search,
      title: 'Define Your Criteria',
      description: "Bedrooms, neighborhoods, must-haves, deal-breakers - we'll create a clear picture of your ideal home.",
    },
    {
      number: '03',
      icon: Home,
      title: 'Tour & Discover',
      description: "I'll curate showings based on your criteria and provide honest insights about each property.",
    },
    {
      number: '04',
      icon: Key,
      title: 'Offer & Close',
      description: "I'll craft a competitive offer, negotiate on your behalf, and guide you to closing day.",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">The Journey</p>
          <h2 className="text-display text-4xl md:text-5xl mb-6">How We'll Find Your Home</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Buying a home doesn't have to be overwhelming. Here's the roadmap we'll follow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 border border-black/10">
              <div className="text-5xl font-light text-black/10 mb-4">{step.number}</div>
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

function MortgageCalculatorSection() {
  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Calculator size={24} strokeWidth={1.5} />
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Financial Planning</p>
            </div>
            <h2 className="text-display text-4xl md:text-5xl mb-6">Mortgage Calculator</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get an estimate of your monthly mortgage payment based on the home price, 
              down payment, and interest rate. This is a great starting point to understand 
              what you can comfortably afford.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 size={20} className="text-champagne flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Estimate Your Payment</p>
                  <p className="text-sm text-muted-foreground">See principal, interest, taxes, and insurance breakdown</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 size={20} className="text-champagne flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Compare Scenarios</p>
                  <p className="text-sm text-muted-foreground">Try different down payments and price points</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 size={20} className="text-champagne flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Plan Confidently</p>
                  <p className="text-sm text-muted-foreground">Know your numbers before you start your search</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary border border-black/10">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Need help with financing?</strong> I work with 
                several trusted local lenders who can get you pre-approved quickly and help you 
                find the best rates. Let me know and I'll make an introduction.
              </p>
            </div>
          </div>

          <div className="bg-white border border-black/10 overflow-hidden">
            <iframe
              src="https://bit.ly/calculate-mortgage"
              width="100%"
              height="600"
              frameBorder="0"
              title="Mortgage Calculator"
              className="w-full"
              style={{ minHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BuyerChecklistSection() {
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Check your credit score', checked: false },
    { id: 2, text: 'Calculate your budget and savings', checked: false },
    { id: 3, text: 'Get pre-approved for a mortgage', checked: false },
    { id: 4, text: 'Make a list of must-haves vs. nice-to-haves', checked: false },
    { id: 5, text: 'Research neighborhoods', checked: false },
    { id: 6, text: 'Connect with a REALTOR®', checked: false },
  ]);

  const toggleItem = (id: number) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Get Ready</p>
            <h2 className="text-display text-4xl md:text-5xl mb-6">First-Time Buyer Checklist</h2>
            <p className="text-lg text-muted-foreground">
              Not sure where to start? Here's what to do before you begin your home search.
            </p>
          </div>

          <div className="bg-white border border-black/10 p-8">
            <div className="space-y-4">
              {checklist.map((item) => (
                <label 
                  key={item.id} 
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <div 
                    onClick={() => toggleItem(item.id)}
                    className={`w-6 h-6 border flex items-center justify-center transition-colors ${
                      item.checked ? 'bg-black border-black' : 'border-black/30 group-hover:border-black'
                    }`}
                  >
                    {item.checked && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-lg ${item.checked ? 'line-through text-muted-foreground' : ''}`}>
                    {item.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeighborhoodsCTASection() {
  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Explore</p>
            <h2 className="text-display text-4xl md:text-5xl mb-6">Discover Pittsburgh's Best Neighborhoods</h2>
            <p className="text-lg text-muted-foreground mb-8">
              From the tree-lined streets of Wexford to the vibrant community of Cranberry Township, 
              Pittsburgh's northern suburbs offer something for everyone. Let me help you find 
              your perfect fit.
            </p>
            <Link to="/neighborhoods" className="btn-primary inline-flex items-center gap-2">
              Explore Neighborhoods <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Wexford', id: 'wexford', image: '/Wexford.jpg' },
              { name: 'Cranberry Township', id: 'cranberry-township', image: '/Cranberry.jpg' },
              { name: 'Sewickley', id: 'sewickley', image: '/Sewickley.jpg' },
              { name: 'North Hills', id: 'north-hills', image: '/NorthHills.jpg' },
            ].map((area, index) => (
              <Link 
                key={index} 
                to={`/neighborhoods#${area.id}`}
                className="group relative aspect-square overflow-hidden"
              >
                <img 
                  src={area.image} 
                  alt={area.name}
                  className="w-full h-full object-cover img-editorial grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium">{area.name}</p>
                </div>
              </Link>
            ))}
          </div>
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
          <h2 className="text-display text-4xl md:text-5xl mb-6">Ready to Start Your Search?</h2>
          <p className="text-xl text-white/70 mb-10">
            Whether you're just starting to look or ready to make an offer, 
            I'm here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/listings" className="btn-primary">
              Browse Listings
            </Link>
            <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-black">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BuyPage() {
  return (
    <Layout>
      <Helmet>
        <title>Buying a Home in Pittsburgh | Tejas Desai REALTOR®</title>
        <meta name="description" content="Looking for your dream home in Pittsburgh? Browse current listings, use my mortgage calculator, and get my free first-time homebuyer checklist. Tejas Desai makes home buying simple." />
      </Helmet>
      <PageHero />
      <WhyWorkWithMeSection />
      <BuyingProcessSection />
      <MortgageCalculatorSection />
      <BuyerChecklistSection />
      <NeighborhoodsCTASection />
      <CTASection />
    </Layout>
  );
}
