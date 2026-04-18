import { useParams, Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { blogPosts } from '@/react-app/data/blogPosts';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-24">
          <div className="container-narrow text-center">
            <h1 className="text-display text-4xl mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-champagne">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{post.title} | Tejas Desai Pittsburgh REALTOR®</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Header />
      <main>
        <article>
          <header className="pt-32 pb-12 bg-secondary">
            <div className="container-narrow">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-black mb-8">
                <ArrowLeft size={14} /> Back to Blog
              </Link>
              <span className="inline-block px-3 py-1 bg-champagne text-black text-xs uppercase tracking-widest mb-4">
                {post.category}
              </span>
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">{post.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          <div className="py-8">
            <div className="container-narrow">
              <div className="w-full max-h-[500px] overflow-hidden flex justify-center bg-secondary">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full max-h-[500px] object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="py-12">
            <div className="container-narrow">
              <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-display prose-headings:font-normal prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-muted-foreground">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </div>

          <AuthorSection />

          <nav className="py-12 border-t border-black/10">
            <div className="container-narrow">
              <div className="flex justify-between items-center">
                {prevPost ? (
                  <Link to={`/blog/${prevPost.slug}`} className="group flex items-center gap-4">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Previous</p>
                      <p className="text-display text-xl group-hover:text-champagne transition-colors">{prevPost.title}</p>
                    </div>
                  </Link>
                ) : <div />}
                
                {nextPost ? (
                  <Link to={`/blog/${nextPost.slug}`} className="group flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Next</p>
                      <p className="text-display text-xl group-hover:text-champagne transition-colors">{nextPost.title}</p>
                    </div>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : <div />}
              </div>
            </div>
          </nav>
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

function AuthorSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto flex items-center gap-6">
          <div className="w-20 h-20 overflow-hidden flex-shrink-0">
            <img 
              src="/tejas-headshot.jpg" 
              alt="Tejas Desai - Pittsburgh REALTOR®" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-lg mb-1">Tejas Desai</p>
            <p className="text-muted-foreground text-sm">
              REALTOR® with Compass serving Pittsburgh, Wexford, Cranberry Township, and surrounding areas. 
              Helping families find their perfect home with patience, expertise, and a personal touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container-narrow text-center">
        <h2 className="text-display text-4xl mb-6">Ready to Make Your Move?</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
          Whether you're buying, selling, or just exploring your options, I'm here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-champagne transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            About Tejas
          </Link>
        </div>
      </div>
    </section>
  );
}
