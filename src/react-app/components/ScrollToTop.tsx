import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there is no hash in the URL, scroll to top
    // Path transitions should reset scroll, but hash links (like #wexford) should be handled by their own logic
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // Small timeout ensures the DOM has rendered before trying to find the element
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [pathname, hash]);
  
  return null;
}
