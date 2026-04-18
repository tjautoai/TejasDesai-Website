import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { GraduationCap, Clock, Home, TrendingUp } from 'lucide-react';

import { neighborhoods } from '@/react-app/data/neighborhoods';
import type { Neighborhood } from '@/react-app/data/neighborhoods';

export default function NeighborhoodsPage() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionRefs.current[hash]) {
      setTimeout(() => {
        sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Pittsburgh Neighborhood Guides | Wexford, Cranberry, Sewickley | Tejas Desai</title>
        <meta name="description" content="Discover the best places to live in North Pittsburgh. Detailed guides for Wexford, Cranberry Township, and Sewickley featuring school ratings, commute times, and market data." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <NeighborhoodGrid sectionRefs={sectionRefs} />
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
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Neighborhoods</p>
        <h1 className="text-display text-5xl md:text-6xl mb-6">
          Explore Pittsburgh's<br />Best Neighborhoods
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          From suburban family communities to urban walkable villages, Pittsburgh offers
          diverse neighborhoods to match every lifestyle. Here's your guide to the area's most
          desirable communities.
        </p>
      </div>
    </section>
  );
}

function NeighborhoodGrid({ sectionRefs }: { sectionRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>> }) {
  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="space-y-16">
          {neighborhoods.map((neighborhood, index) => (
            <NeighborhoodCard
              key={neighborhood.id}
              neighborhood={neighborhood}
              reverse={index % 2 === 1}
              innerRef={(el) => (sectionRefs.current[neighborhood.id] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function NeighborhoodCard({
  neighborhood,
  reverse,
  innerRef
}: {
  neighborhood: Neighborhood;
  reverse: boolean;
  innerRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      id={neighborhood.id}
      ref={innerRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={neighborhood.image}
            alt={neighborhood.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      <div className={reverse ? 'lg:order-1' : ''}>
        <p className="text-sm uppercase tracking-widest text-champagne mb-2">{neighborhood.tagline}</p>
        <h2 className="text-display text-4xl mb-4">{neighborhood.name}</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">{neighborhood.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-start gap-3">
            <Home size={18} className="text-champagne flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Median Price</p>
              <p className="font-medium">{neighborhood.medianPrice}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GraduationCap size={18} className="text-champagne flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">School District</p>
              <p className="font-medium text-sm">{neighborhood.schools}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="text-champagne flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">To Downtown</p>
              <p className="font-medium">{neighborhood.commuteToDowntown}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <TrendingUp size={18} className="text-champagne flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Local Highlights</p>
              <p className="font-medium text-sm leading-tight">{neighborhood.highlights.join(', ')}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {neighborhood.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-secondary text-[11px] uppercase tracking-wider font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container-narrow text-center">
        <h2 className="text-display text-4xl md:text-5xl mb-6">
          Not Sure Which Neighborhood<br />is Right for You?
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
          As someone who relocated to Pittsburgh myself, I understand the challenge of finding
          the right community. Let's talk about your priorities and I'll help you find the
          perfect fit.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-champagne transition-colors"
        >
          Let's Find Your Neighborhood
        </Link>
      </div>
    </section>
  );
}
