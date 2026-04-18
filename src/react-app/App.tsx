import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/react-app/components/ScrollToTop";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import SellPage from "@/react-app/pages/Sell";
import BuyPage from "@/react-app/pages/Buy";
import ListingsPage from "@/react-app/pages/Listings";
import NeighborhoodsPage from "@/react-app/pages/Neighborhoods";
import ResourcesPage from "@/react-app/pages/Resources";
import BlogPage from "@/react-app/pages/Blog";
import BlogPostPage from "@/react-app/pages/BlogPost";
import ContactPage from "@/react-app/pages/Contact";
import TestimonialsPage from "@/react-app/pages/Testimonials";
import NeighborhoodDetailPage from "@/react-app/pages/NeighborhoodDetail";
import Chatbot from "@/react-app/components/Chatbot";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
          <Route path="/neighborhoods/:id" element={<NeighborhoodDetailPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <Chatbot />
      </Router>
    </HelmetProvider>
  );
}
