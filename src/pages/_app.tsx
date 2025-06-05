
import '../styles/globals.css';
import React, { useState } from 'react';
import { Console } from '../components/shared/Console';

function MyApp({ Component, pageProps }) {
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
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
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsConsoleOpen(!isConsoleOpen)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isConsoleOpen ? 'Close Console' : 'Open Console'}
        </button>
      </div>
      <Component {...pageProps} />
      <Console isOpen={isConsoleOpen} onClose={() => setIsConsoleOpen(false)} />
    </div>
  );
}

export default MyApp;
