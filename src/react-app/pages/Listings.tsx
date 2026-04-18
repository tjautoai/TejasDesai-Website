import { useState } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Bed, Bath, Square, MapPin, Video, ArrowRight } from 'lucide-react';
import { allListings, Property } from '@/react-app/data/listings';

const neighborhoods = ['All', 'Wexford', 'Cranberry Township', 'Sewickley', 'North Hills', 'McCandless'];
const bedroomOptions = ['Any', '1+', '2+', '3+', '4+', '5+'];
const bathroomOptions = ['Any', '1+', '2+', '3+'];
const priceRanges = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Under $300K', min: 0, max: 300000 },
  { label: '$300K - $400K', min: 300000, max: 400000 },
  { label: '$400K - $500K', min: 400000, max: 500000 },
  { label: '$500K - $750K', min: 500000, max: 750000 },
  { label: '$750K+', min: 750000, max: Infinity },
];

export default function ListingsPage() {
  return (
    <>
      <Helmet>
        <title>Pittsburgh Real Estate Listings | Wexford & Cranberry Homes | Tejas Desai</title>
        <meta name="description" content="Search active listings and view past transactions across Wexford, Cranberry, and Sewickley. Get access to off-market Pittsburgh properties with Tejas Desai." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <FilterSection />
        <ActiveListingsSection />
        <PastTransactionsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-secondary">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Listings</p>
        <h1 className="text-display text-5xl md:text-6xl mb-6">Find Your<br />Perfect Home</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Browse current listings and past transactions. Can't find what you're looking for? 
          Contact me for access to off-market opportunities.
        </p>
      </div>
    </section>
  );
}

function FilterSection() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('All');
  const [selectedBeds, setSelectedBeds] = useState('Any');
  const [selectedBaths, setSelectedBaths] = useState('Any');
  const [selectedPrice, setSelectedPrice] = useState('Any Price');

  return (
    <section className="py-8 border-b border-black/10 sticky top-20 bg-white z-30">
      <div className="container-narrow">
        <div className="flex flex-wrap gap-4">
          <select
            value={selectedNeighborhood}
            onChange={(e) => setSelectedNeighborhood(e.target.value)}
            className="px-4 py-2 border border-black/20 bg-white text-sm focus:outline-none focus:border-black"
          >
            {neighborhoods.map((n) => (
              <option key={n} value={n}>{n === 'All' ? 'All Neighborhoods' : n}</option>
            ))}
          </select>
          
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="px-4 py-2 border border-black/20 bg-white text-sm focus:outline-none focus:border-black"
          >
            {priceRanges.map((r) => (
              <option key={r.label} value={r.label}>{r.label}</option>
            ))}
          </select>
          
          <select
            value={selectedBeds}
            onChange={(e) => setSelectedBeds(e.target.value)}
            className="px-4 py-2 border border-black/20 bg-white text-sm focus:outline-none focus:border-black"
          >
            {bedroomOptions.map((b) => (
              <option key={b} value={b}>{b === 'Any' ? 'Any Beds' : `${b} Beds`}</option>
            ))}
          </select>
          
          <select
            value={selectedBaths}
            onChange={(e) => setSelectedBaths(e.target.value)}
            className="px-4 py-2 border border-black/20 bg-white text-sm focus:outline-none focus:border-black"
          >
            {bathroomOptions.map((b) => (
              <option key={b} value={b}>{b === 'Any' ? 'Any Baths' : `${b} Baths`}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

function ActiveListingsSection() {
  const activeListings = allListings.filter(p => p.status === 'active');
  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Available Now</p>
          <h2 className="text-display text-4xl md:text-5xl mb-6">Active Listings</h2>
        </div>

        {activeListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeListings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-secondary border border-black/10 p-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Currently no active public listings.
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Looking for something specific? I have access to off-market opportunities and coming-soon 
              properties that aren't publicly listed yet. Let's connect to discuss your needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors"
            >
              Contact for Off-Market Listings
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function PastTransactionsSection() {
  const pastListings = allListings.filter(p => p.status === 'sold' || p.status === 'rented');
  
  if (pastListings.length === 0) return null;

  return (
    <section className="py-24 bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Track Record</p>
          <h2 className="text-display text-4xl md:text-5xl mb-6">Recent Transactions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A look at some of the homes I've helped clients buy, sell, and rent in the Pittsburgh area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastListings.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white border border-black/10 overflow-hidden group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.address}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs uppercase tracking-widest ${
            property.status === 'sold' 
              ? 'bg-black text-white' 
              : property.status === 'rented'
              ? 'bg-black/80 text-white'
              : 'bg-champagne text-black'
          }`}>
            {property.status}
          </span>
        </div>
        {property.hasVirtualTour && (
          <button className="absolute bottom-4 right-4 bg-white/90 p-2 hover:bg-white transition-colors">
            <Video size={20} />
          </button>
        )}
      </div>
      
      <div className="p-6">
        <p className="text-2xl font-medium mb-2">{property.price}</p>
        <p className="font-medium mb-1">{property.address}</p>
        <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
          <MapPin size={14} />
          {property.city}, {property.state} {property.zip}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-black/10 pt-4">
          {property.propertyType === 'commercial' ? (
            <>
              <span className="flex items-center gap-1 font-medium text-black">
                Commercial
              </span>
              <span className="flex items-center gap-1">
                <Square size={16} />
                {property.sqft ? property.sqft.toLocaleString() : 'N/A'} sqft
              </span>
            </>
          ) : (
            <>
              <span className="flex items-center gap-1">
                <Bed size={16} />
                {property.beds} bed
              </span>
              <span className="flex items-center gap-1">
                <Bath size={16} />
                {property.baths} bath
              </span>
              <span className="flex items-center gap-1">
                <Square size={16} />
                {property.sqft ? property.sqft.toLocaleString() : 'N/A'} sqft
              </span>
            </>
          )}
        </div>
        
        {property.status !== 'sold' && property.status !== 'rented' && (
          <Link
            to="/about#schedule"
            className="mt-4 block w-full text-center bg-black text-white py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors"
          >
            Schedule a Tour
          </Link>
        )}
      </div>
    </div>
  );
}



function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container-narrow text-center">
        <h2 className="text-display text-4xl md:text-5xl mb-6">
          Looking for Something Specific?
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
          I have access to exclusive off-market listings and can set up custom alerts 
          for properties matching your criteria before they hit the public market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-champagne transition-colors"
          >
            Get Custom Alerts
          </Link>
          <Link
            to="/buy"
            className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Start Your Search
          </Link>
        </div>
      </div>
    </section>
  );
}
