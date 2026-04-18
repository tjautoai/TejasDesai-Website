import { useState } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Home, Building2, Users, Star, TrendingUp, Clock, MapPin } from 'lucide-react';
import Layout from '@/react-app/components/Layout';
import { allListings } from '@/react-app/data/listings';

// Hero section with full-bleed image
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://019d8ad9-e6ae-7459-8e0a-ce92ce434810.mochausercontent.com/pittsburgh-skyline.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow w-full">
        <div className="max-w-3xl">
          <h1 className="text-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in">
            Your Trusted Guide to Pittsburgh Real Estate
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Buying, Selling, or Relocating. Let's make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/buy" className="btn-primary text-center">
              I'm Looking to Buy
            </Link>
            <Link to="/sell" className="btn-outline text-center border-white text-white hover:bg-white hover:text-black">
              I Want to Sell My Home
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Value propositions
function ValuePropsSection() {
  const props = [
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Deep knowledge of Pittsburgh, Wexford, Cranberry Township, and the North Hills market.',
    },
    {
      icon: Building2,
      title: 'Corporate Background',
      description: '20+ years of corporate experience in negotiation, strategy, and client advocacy.',
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Every client gets my full attention. Your goals become my mission.',
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {props.map((prop, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-black/20 mb-6">
                <prop.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-3">{prop.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Listings
function FeaturedListingsSection() {
  const listings = allListings.filter(p => p.status === 'sold' || p.status === 'rented');

  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Portfolio</p>
            <h2 className="text-display text-4xl md:text-5xl">Past Transactions</h2>
          </div>
          <Link to="/listings" className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all">
            View Portfolio <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {listings.map((listing, index) => (
            <div key={index} className="group relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-black text-white text-[10px] uppercase tracking-widest px-2 py-1 font-medium">
                  {listing.status === 'sold' ? 'PAST SALE' : 'PAST RENTAL'}
                </span>
              </div>
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-full object-cover img-editorial group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-2xl font-medium mb-2">{listing.price}</p>
              <p className="text-sm text-muted-foreground mb-1">
                {listing.propertyType === 'commercial' 
                  ? `Commercial · ${listing.sqft ? listing.sqft.toLocaleString() : 'N/A'} sqft`
                  : `${listing.beds} bed · ${listing.baths} bath · ${listing.sqft ? listing.sqft.toLocaleString() : 'N/A'} sqft`
                }
              </p>
              <p className="font-medium">{listing.address}</p>
              <p className="text-sm text-muted-foreground">{listing.city}, {listing.state} {listing.zip}</p>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground italic text-center">
          Past transactions shown for reference. Not currently listed for sale.
        </p>

        <div className="mt-12 md:hidden">
          <Link to="/listings" className="flex items-center justify-center gap-2 btn-outline w-full">
            View All Transactions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// About Teaser
function AboutTeaserSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="/tejas-headshot.jpg"
              alt="Tejas Desai - Pittsburgh REALTOR®"
              className="w-full h-full object-cover img-editorial"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">About</p>
            <h2 className="text-display text-4xl md:text-5xl mb-6">Meet Tejas Desai</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With 20+ years of corporate experience, I relocated my family to Pittsburgh 
              and fell in love with the neighborhoods, the people, and the pace of life here.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I bring that same discipline and advocacy from my corporate career to every negotiation, 
              every offer, every closing. Whether you're buying your first home or selling in the North Hills, 
              I'd love to be that trusted voice in your corner.
            </p>
            <Link to="/about" className="btn-primary inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Tejas made our home buying journey incredible. He was our friend, an advisor, and our ally who helped navigate the home buying process with lots of patience. He advocated for us, provided great input, and made this otherwise confusing and daunting journey for first time home buyers, memorable. Tejas worked around our not-so-flexible schedules that surrounded our kids and made every appointment for a house viewing work. My husband and I knew Tejas had our backs throughout this process. He was so in-tune with what we wanted as our home, that even he realized when we had found our dream home as we walked into that house. We could not have asked for a better person to guide us through this process. We wholeheartedly recommend Tejas. He will work hard to find you your home.",
      author: "Amrita S.",
      location: "Verified Client",
      rating: 5,
    },
    {
      quote: "Tejas helped with the process of leasing my home. He is extremely knowledgeable in his field. As a first time home owner I had many questions, he was willing to go the extra mile for me to address them. Tejas not only works with the knowledge and ferocity of a top-notch realtor, but also with the compassion you'd expect. I would not only recommend him to my friends and family, but I would INSIST that they give him a call!",
      author: "Uma D.",
      location: "Verified Client",
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Testimonials</p>
          <h2 className="text-display text-4xl md:text-5xl">What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-black/10 p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-champagne" />
                ))}
               </div>
               <p className="text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
               <div>
                 <p className="font-medium">{testimonial.author}</p>
                 <p className="text-sm text-muted-foreground">{testimonial.location}</p>
               </div>
             </div>
           ))}
         </div>

         <div className="text-center mt-12">
           <Link to="/testimonials" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all">
             Read More Reviews <ArrowRight size={16} />
           </Link>
         </div>
       </div>
     </section>
   );
 }

// Market Snapshot
function MarketSnapshotSection() {
  const stats = [
    { label: 'Median Home Price', value: '$449,000', icon: Home },
    { label: 'Avg Days on Market', value: '28', icon: Clock },
    { label: 'Active Listings', value: '380', icon: TrendingUp },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/50 mb-2">North Pittsburgh Market</p>
            <h3 className="text-display text-3xl">Market Snapshot</h3>
          </div>
          <div className="grid grid-cols-3 gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-light mb-1">{stat.value}</p>
                <p className="text-xs uppercase tracking-wider text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Lead Capture
function LeadCaptureSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorStatus(null);

    try {
      // FORMSPREE ENDPOINT
      const FORMSPREE_URL = 'https://formspree.io/f/xgoralyb';
      
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          source: 'Market Report Request',
          message: 'User requested free Pittsburgh market report'
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setErrorStatus('Something went wrong. Please try again or email tejas.desai@compass.com');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setErrorStatus('Something went wrong. Please try again or email tejas.desai@compass.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-display text-4xl md:text-5xl mb-6">Get Your Free Pittsburgh Market Report</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Stay ahead of the market. Get exclusive insights on home values, trends, and opportunities in your neighborhood.
          </p>
          {isSubscribed ? (
            <p className="text-champagne font-medium text-lg animate-in fade-in duration-500">
              Your market report request has been received! Tejas will send it to you within 24 hours.
            </p>
          ) : (
            <div className="space-y-4">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-4 border border-black/20 bg-white focus:outline-none focus:border-black"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary whitespace-nowrap disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Get Report'}
                </button>
              </form>
              {errorStatus && (
                <p className="text-red-600 text-sm animate-in fade-in duration-300">
                  {errorStatus}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Neighborhoods Preview
function NeighborhoodsPreviewSection() {
  const neighborhoodsCards = [
    { 
      name: 'Wexford', 
      id: 'wexford',
      image: '/Wexford.jpg' 
    },
    { 
      name: 'Cranberry Township', 
      id: 'cranberry-township',
      image: '/Cranberry.jpg' 
    },
    { 
      name: 'Sewickley', 
      id: 'sewickley',
      image: '/Sewickley.jpg' 
    },
    { 
      name: 'North Hills', 
      id: 'north-hills',
      image: '/NorthHills.jpg' 
    },
    { 
      name: 'Pittsburgh', 
      id: 'pittsburgh',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800' 
    },
  ];

  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Explore</p>
            <h2 className="text-display text-4xl md:text-5xl">Neighborhoods</h2>
          </div>
          <Link to="/neighborhoods" className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all">
            View All Areas <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {neighborhoodsCards.map((neighborhood, index) => (
            <Link to={`/neighborhoods#${neighborhood.id}`} key={index} className="group relative aspect-[3/4] overflow-hidden">
              <img
                src={neighborhood.image}
                alt={neighborhood.name}
                className="w-full h-full object-cover img-editorial grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-medium">{neighborhood.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Tejas Desai | Pittsburgh REALTOR® | Wexford, Cranberry, Sewickley</title>
        <meta name="description" content="Tejas Desai is a Compass REALTOR® serving Wexford, Cranberry Township, Sewickley, and North Hills PA. Expert guidance for buyers, sellers, and relocators in the Pittsburgh North suburbs. Call 412-608-3981." />
      </Helmet>
      <HeroSection />
      <ValuePropsSection />
      <FeaturedListingsSection />
      <AboutTeaserSection />
      <TestimonialsSection />
      <MarketSnapshotSection />
      <NeighborhoodsPreviewSection />
      <LeadCaptureSection />
    </Layout>
  );
}
