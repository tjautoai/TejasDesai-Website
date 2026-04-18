import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Star, ExternalLink, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  isPlaceholder?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Amrita S.',
    rating: 5,
    text: "Tejas made our home buying journey incredible. He was our friend, an advisor, and our ally who helped navigate the home buying process with lots of patience. He advocated for us, provided great input, and made this otherwise confusing and daunting journey for first time home buyers, memorable. Tejas worked around our not-so-flexible schedules that surrounded our kids and made every appointment for a house viewing work. My husband and I knew Tejas had our backs throughout this process. He was so in-tune with what we wanted as our home, that even he realized when we had found our dream home as we walked into that house. We could not have asked for a better person to guide us through this process. We wholeheartedly recommend Tejas. He will work hard to find you your home.",
  },
  {
    id: 2,
    name: 'Uma D.',
    rating: 5,
    text: "Tejas helped with the process of leasing my home. He is extremely knowledgeable in his field. As a first time home owner I had many questions, he was willing to go the extra mile for me to address them. Tejas not only works with the knowledge and ferocity of a top-notch realtor, but also with the compassion you'd expect. I would not only recommend him to my friends and family, but I would INSIST that they give him a call!",
  },
  {
    id: 3,
    name: 'More Reviews',
    rating: 5,
    text: 'More client testimonials coming soon. Check back for updates or leave your own review on Google.',
    isPlaceholder: true,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Client Testimonials & Reviews | Tejas Desai Pittsburgh REALTOR®</title>
        <meta name="description" content="Read real client success stories from families who've bought and sold homes in Wexford, Cranberry, and Sewickley with Tejas Desai. Your trusted real estate advisor." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <GoogleReviewsSection />
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
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Testimonials</p>
        <h1 className="text-display text-5xl md:text-6xl mb-6">What Clients<br />Are Saying</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Don't just take my word for it. Here's what my clients have to say about 
          their experience working with me.
        </p>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="space-y-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  if (testimonial.isPlaceholder) {
    return (
      <div className="bg-secondary/50 border border-dashed border-black/20 p-12 text-center">
        <p className="text-muted-foreground italic mb-4">{testimonial.text}</p>
        <p className="text-sm uppercase tracking-widest text-muted-foreground">More reviews coming soon</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-black/10 p-8 md:p-12">
      <div className="flex items-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-champagne text-champagne" />
        ))}
      </div>
      
      <Quote size={48} strokeWidth={1} className="text-black/10 mb-4" />
      
      <p className="text-lg leading-relaxed mb-8">{testimonial.text}</p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl font-medium">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">Verified Client</p>
        </div>
      </div>
    </div>
  );
}

function GoogleReviewsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container-narrow text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} className="fill-champagne text-champagne" />
            ))}
          </div>
          <h2 className="text-display text-3xl mb-4">Share Your Experience</h2>
          <p className="text-muted-foreground mb-8">
            Had a great experience working together? I'd love to hear about it. 
            Your review helps other buyers and sellers find the right agent.
          </p>
          <a
            href="https://www.google.com/search?q=tejas+desai+realtor+pittsburgh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors"
          >
            Leave a Google Review
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container-narrow text-center">
        <h2 className="text-display text-4xl md:text-5xl mb-6">
          Ready to Write Your<br />Success Story?
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
          Whether you're buying your first home or selling to move on to your next chapter, 
          I'm here to make it happen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-champagne transition-colors"
          >
            Get Started Today
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Meet Tejas
          </Link>
        </div>
      </div>
    </section>
  );
}
