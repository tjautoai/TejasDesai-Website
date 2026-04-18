import { useParams, Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { neighborhoods } from '@/react-app/data/neighborhoods';
import { GraduationCap, Clock, Home, ArrowLeft, TrendingUp, MapPin, ArrowRight } from 'lucide-react';

export default function NeighborhoodDetailPage() {
  const { id } = useParams<{ id: string }>();
  const neighborhood = neighborhoods.find(n => n.id === id);

  if (!neighborhood) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-24 text-center">
          <div className="container-narrow">
            <h1 className="text-display text-4xl mb-4">Neighborhood Not Found</h1>
            <p className="text-muted-foreground mb-8">The area you're looking for doesn't exist.</p>
            <Link to="/neighborhoods" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft size={18} /> Back to Neighborhoods
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{neighborhood.name} | Pittsburgh Neighborhood Guide | Tejas Desai</title>
        <meta name="description" content={`Learn about ${neighborhood.name} in Pittsburgh. Schools, commute, and real estate market insights with Tejas Desai, REALTOR®.`} />
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={neighborhood.image}
              alt={neighborhood.name}
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container-narrow relative z-10 text-white">
            <Link to="/neighborhoods" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/70 hover:text-white mb-8">
              <ArrowLeft size={14} /> Back to Neighborhoods
            </Link>
            <p className="text-sm uppercase tracking-widest text-champagne mb-4">{neighborhood.tagline}</p>
            <h1 className="text-display text-5xl md:text-6xl lg:text-7xl mb-6">{neighborhood.name}</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <h2 className="text-display text-3xl md:text-4xl mb-8">About {neighborhood.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {neighborhood.description}
                </p>

                <h3 className="text-xl font-medium mb-6">Area Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {neighborhood.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 p-4 bg-secondary border border-black/5">
                      <MapPin size={18} className="text-champagne flex-shrink-0" />
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/listings"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View Listings in This Area
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Sidebar Stats */}
              <div className="lg:col-span-1">
                <div className="bg-secondary p-8 border border-black/5 sticky top-32">
                  <h3 className="text-xl font-medium mb-8">Market Quick Stats</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-black/10 flex items-center justify-center shrink-0">
                        <Home size={20} className="text-champagne" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Median Sale Price</p>
                        <p className="text-xl font-medium">{neighborhood.medianPrice}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-black/10 flex items-center justify-center shrink-0">
                        <GraduationCap size={20} className="text-champagne" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">School District</p>
                        <p className="text-sm font-medium leading-tight">{neighborhood.schools}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-black/10 flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-champagne" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Commute to Downtown</p>
                        <p className="text-xl font-medium">{neighborhood.commuteToDowntown}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-black/10 flex items-center justify-center shrink-0">
                        <TrendingUp size={20} className="text-champagne" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Market Trend</p>
                        <p className="text-xl font-medium">Stable Appreciation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
