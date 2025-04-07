
import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  // This ensures external links work correctly
  React.useEffect(() => {
    // Fix for external links
    const handleExternalLinks = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('target') === '_blank') {
        e.preventDefault();
        window.open(target.href, '_blank', 'noopener,noreferrer');
      }
    };

    document.addEventListener('click', handleExternalLinks);
    return () => document.removeEventListener('click', handleExternalLinks);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
