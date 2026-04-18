import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Award, Briefcase, Heart, MapPin, Phone, Mail } from 'lucide-react';
import Layout from '@/react-app/components/Layout';

function PageHero() {
  return (
    <section className="pt-32 pb-16 bg-secondary">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">About</p>
        <h1 className="text-display text-5xl md:text-6xl lg:text-7xl">Meet Tejas Desai</h1>
      </div>
    </section>
  );
}

function BioSection() {
  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className="lg:sticky lg:top-32">
            <div className="aspect-[4/5] overflow-hidden mb-6">
              <img
                src="/tejas-headshot.jpg"
                alt="Tejas Desai - Pittsburgh REALTOR®"
                className="w-full h-full object-cover img-editorial"
              />
            </div>
            <div className="border border-black/10 p-6">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Contact</p>
              <div className="space-y-3">
                <a href="tel:412-608-3981" className="flex items-center gap-3 hover:text-champagne transition-colors">
                  <Phone size={18} strokeWidth={1.5} />
                  <span>412-608-3981</span>
                </a>
                <a href="mailto:tejas.desai@compass.com" className="flex items-center gap-3 hover:text-champagne transition-colors">
                  <Mail size={18} strokeWidth={1.5} />
                  <span>tejas.desai@compass.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} strokeWidth={1.5} />
                  <span>Pittsburgh, PA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div>
            <h2 className="text-display text-4xl md:text-5xl mb-8">
              From the Boardroom to Your Living Room
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I bring 20+ years of corporate experience, navigating high-stakes negotiations, 
                building relationships, and advocating for my clients and teams. When my family 
                made the move to Pittsburgh in 2022, I found more than just a new city — I found home.
              </p>
              
              <p>
                Pittsburgh captured my heart with its tight-knit neighborhoods, its blend of 
                urban energy and suburban charm, and the genuine warmth of its people. From the 
                tree-lined streets of Wexford to the historic beauty of Sewickley, from the 
                family-friendly communities of Cranberry Township to the convenience of the North Hills, 
                I've explored every corner of this region. And I'm still discovering new reasons to love it.
              </p>

              <p>
                That's why I joined Compass — to help families like mine find their perfect place 
                in Pittsburgh. I bring the same discipline, strategic thinking, and client-first 
                approach from my corporate career to every real estate transaction. Whether you're 
                buying your first home, selling to move up, or relocating from across the country, 
                I understand the weight of these decisions.
              </p>

              <p>
                Real estate isn't just about square footage and closing dates. It's about the 
                morning light in your kitchen. It's about the neighborhood where your kids will 
                ride their bikes. It's about finding a place that feels right. That's what I'm 
                here to help you find.
              </p>

              <p className="text-foreground font-medium">
                Let's talk about what you're looking for. I'd love to be your guide.
              </p>
            </div>

            {/* Values */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="border-t border-black/10 pt-6">
                <Briefcase size={24} strokeWidth={1.5} className="mb-4" />
                <h3 className="font-medium text-lg mb-2 text-foreground">Corporate Experience</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">20+ years of corporate experience in negotiation and client advocacy</p>
              </div>
              <div className="border-t border-black/10 pt-6">
                <Heart size={24} strokeWidth={1.5} className="mb-4" />
                <h3 className="font-medium text-lg mb-2 text-foreground">Personal Touch</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">Every client gets my full attention and care</p>
              </div>
              <div className="border-t border-black/10 pt-6">
                <Award size={24} strokeWidth={1.5} className="mb-4" />
                <h3 className="font-medium text-lg mb-2 text-foreground">Compass Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">Backed by the nation's leading brokerage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 bg-secondary">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Let's Connect</p>
            <h2 className="text-display text-4xl md:text-5xl mb-6">Schedule a Conversation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're ready to start your search, curious about your home's value, 
              or just want to learn more about the Pittsburgh market — I'm here to help. 
              Book a free 15-minute call and let's chat.
            </p>
          </div>

          {/* Cal.com Embed */}
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

function CTASection() {
  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/buy" className="group border border-black/10 p-12 hover:bg-black hover:text-white transition-colors duration-300">
            <p className="text-sm uppercase tracking-widest text-muted-foreground group-hover:text-white/60 mb-4">Buyers</p>
            <h3 className="text-display text-3xl mb-4">Ready to Find Your Home?</h3>
            <p className="text-muted-foreground group-hover:text-white/70 mb-8">
              Let me guide you through Pittsburgh's best neighborhoods and find the perfect fit for your family.
            </p>
            <span className="inline-flex items-center gap-2 font-medium group-hover:gap-4 transition-all">
              Start Your Search <ArrowRight size={18} />
            </span>
          </Link>

          <Link to="/sell" className="group border border-black/10 p-12 hover:bg-black hover:text-white transition-colors duration-300">
            <p className="text-sm uppercase tracking-widest text-muted-foreground group-hover:text-white/60 mb-4">Sellers</p>
            <h3 className="text-display text-3xl mb-4">Thinking of Selling?</h3>
            <p className="text-muted-foreground group-hover:text-white/70 mb-8">
              Get a complimentary home valuation and discover how Compass marketing can maximize your sale.
            </p>
            <span className="inline-flex items-center gap-2 font-medium group-hover:gap-4 transition-all">
              Get Your Home's Value <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About Tejas Desai | Compass REALTOR® | Wexford PA</title>
        <meta name="description" content="Meet Tejas Desai, a Compass REALTOR® in Wexford PA. Corporate background, personal touch. Helping Pittsburgh North families buy and sell homes with patience and expertise." />
      </Helmet>
      <PageHero />
      <BioSection />
      <ScheduleSection />
      <CTASection />
    </Layout>
  );
}
