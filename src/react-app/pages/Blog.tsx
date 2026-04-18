import { useState } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { blogPosts, categories } from '@/react-app/data/blogPosts';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.filter(post => post.id !== featuredPost.id || activeCategory !== 'All');

  return (
    <>
      <Helmet>
        <title>Pittsburgh Real Estate News & Market Reports | Tejas Desai</title>
        <meta name="description" content="Stay updated with the latest Pittsburgh real estate market reports, neighborhood insights, and home buying/selling tips from Tejas Desai, REALTOR®." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        {activeCategory === 'All' && <FeaturedPost post={featuredPost} />}
        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <PostsGrid posts={activeCategory === 'All' ? otherPosts : filteredPosts} />
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
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Blog</p>
        <h1 className="text-display text-5xl md:text-6xl mb-6">Insights & Updates</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Market updates, buying and selling tips, neighborhood guides, and everything you need 
          to make informed real estate decisions in Pittsburgh.
        </p>
      </div>
    </section>
  );
}

function FeaturedPost({ post }: { post: typeof blogPosts[0] }) {
  return (
    <section className="py-16">
      <div className="container-narrow">
        <Link to={`/blog/${post.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-champagne text-black text-xs uppercase tracking-widest mb-4">
              {post.category}
            </span>
            <h2 className="text-display text-3xl md:text-4xl mb-4 group-hover:text-champagne transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest group-hover:text-champagne transition-colors">
              Read Article <ArrowRight size={14} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

function CategoryFilter({ activeCategory, setActiveCategory }: { 
  activeCategory: string; 
  setActiveCategory: (cat: string) => void;
}) {
  return (
    <section className="py-8 border-y border-black/10 sticky top-20 bg-white z-30">
      <div className="container-narrow">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm uppercase tracking-widest transition-colors ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-secondary hover:bg-black/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function PostsGrid({ posts }: { posts: typeof blogPosts }) {
  if (posts.length === 0) {
    return (
      <section className="py-24">
        <div className="container-narrow text-center">
          <p className="text-muted-foreground">No posts in this category yet. Check back soon!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group">
      <div className="aspect-[4/3] overflow-hidden mb-4">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <span className="inline-block px-2 py-1 bg-secondary text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {post.category}
      </span>
      <h3 className="text-display text-2xl mb-2 group-hover:text-champagne transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span>{post.date}</span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {post.readTime}
        </span>
      </div>
    </Link>
  );
}

function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xgoralyb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
    <section className="py-24 bg-black text-white">
      <div className="container-narrow text-center">
        <h2 className="text-display text-4xl md:text-5xl mb-6">
          Get Market Updates<br />in Your Inbox
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
          Subscribe to receive monthly market reports, new listings, and real estate insights 
          delivered straight to your inbox.
        </p>
        {isSubscribed ? (
          <p className="text-champagne font-medium text-lg animate-in fade-in duration-500">
            You're subscribed! Keep an eye on your inbox for updates.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-white text-black font-medium text-sm uppercase tracking-widest hover:bg-champagne transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
