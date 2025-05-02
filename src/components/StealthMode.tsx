
import { useState, useEffect, useCallback } from 'react';

const STEALTH_MODE_CLICK_COUNT = 10;
const IDLE_TIMEOUT = 60000; // 1 minute in milliseconds

// Tech-related motivational quotes
const idleQuotes = [
  "💡 Innovation is the calling card of the future.",
  "🚀 Big ideas start small. Keep going.",
  "🧠 Build fast, learn faster!",
  "⚡ Don't just scroll, solve!",
  "🎯 MVPs are made, not found.",
  "👨‍💻 Still hacking away...",
  "📚 Great things take iteration.",
  "🔥 You're 1 click away from the next breakthrough."
];

// Call-back titles when the tab is hidden
const callBackTitles = [
  "Come back, genius!",
  "Still curious?",
  "Click the tab again!",
  "Innovation's waiting!",
  "You left brilliance!",
  "Let's finish this!",
  "Back to big ideas!",
  "Don't miss the magic!"
];

interface StealthModeProps {
  nameSelector: string; // CSS selector for the name element that will trigger stealth mode
}

const StealthMode = ({ nameSelector }: StealthModeProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [stealthModeActive, setStealthModeActive] = useState(false);
  const [showIdleQuote, setShowIdleQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(idleQuotes[0]);
  const [quoteInterval, setQuoteIntervalId] = useState<number | null>(null);
  const [isIdle, setIsIdle] = useState(false);
  const [originalTitle] = useState(document.title);

  // Function to toggle stealth mode
  const toggleStealthMode = useCallback(() => {
    if (clickCount + 1 >= STEALTH_MODE_CLICK_COUNT) {
      setStealthModeActive(prev => !prev);
      setClickCount(0);
      
      // Apply stealth mode styles to the body
      if (!stealthModeActive) {
        document.body.classList.add('stealth-mode-active');
        
        // Play activation sound
        const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-09a.mp3');
        audio.volume = 0.3;
        audio.play().catch(() => {});
      } else {
        document.body.classList.remove('stealth-mode-active');
        
        // Play deactivation sound
        const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-10.mp3');
        audio.volume = 0.3;
        audio.play().catch(() => {});
      }
    } else {
      setClickCount(prev => prev + 1);
    }
  }, [clickCount, stealthModeActive]);

  // Handle idle user engagement
  const handleUserActivity = useCallback(() => {
    setIsIdle(false);
    if (showIdleQuote) {
      setShowIdleQuote(false);
      if (quoteInterval) {
        clearInterval(quoteInterval);
        setQuoteIntervalId(null);
      }
    }
  }, [showIdleQuote, quoteInterval]);

  // Set up click listener for name element
  useEffect(() => {
    const nameElement = document.querySelector(nameSelector);
    if (nameElement) {
      nameElement.addEventListener('click', toggleStealthMode);
      return () => {
        nameElement.removeEventListener('click', toggleStealthMode);
      };
    }
  }, [nameSelector, toggleStealthMode]);

  // Set up idle timer
  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    
    const resetIdleTimer = () => {
      handleUserActivity();
      if (idleTimer) {
        clearTimeout(idleTimer);
      }
      
      idleTimer = setTimeout(() => {
        setIsIdle(true);
        setShowIdleQuote(true);
        
        // Start cycling through quotes
        const intervalId = window.setInterval(() => {
          setCurrentQuote(idleQuotes[Math.floor(Math.random() * idleQuotes.length)]);
        }, 5000);
        
        setQuoteIntervalId(intervalId);
      }, IDLE_TIMEOUT);
    };
    
    // Events to track user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, resetIdleTimer);
    });
    
    resetIdleTimer();
    
    return () => {
      if (idleTimer) {
        clearTimeout(idleTimer);
      }
      if (quoteInterval) {
        clearInterval(quoteInterval);
      }
      events.forEach(event => {
        window.removeEventListener(event, resetIdleTimer);
      });
    };
  }, [handleUserActivity]);

  // Handle tab visibility changes
  useEffect(() => {
    let titleInterval: number | null = null;
    let titleIndex = 0;
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (titleInterval) clearInterval(titleInterval);
        
        titleInterval = window.setInterval(() => {
          document.title = callBackTitles[titleIndex++ % callBackTitles.length];
        }, 2000);
      } else {
        if (titleInterval) {
          clearInterval(titleInterval);
          titleInterval = null;
        }
        document.title = originalTitle;
        
        // Play sound when returning to tab after it was hidden
        if (document.hidden === false) {
          const audio = new Audio('https://www.soundjay.com/button/sounds/button-3.mp3');
          audio.volume = 0.3;
          audio.play().catch(() => {});
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (titleInterval) {
        clearInterval(titleInterval);
      }
      document.title = originalTitle;
    };
  }, [originalTitle]);

  return (
    <>
      {/* Stealth Mode Indicator */}
      {stealthModeActive && (
        <div className="fixed top-4 right-4 z-50 px-3 py-1 bg-[#007BFF]/90 text-white text-xs rounded-full animate-pulse shadow-neon-glow">
          STEALTH MODE ACTIVE
        </div>
      )}

      {/* Idle Quote Box */}
      <div 
        className={`fixed bottom-8 right-8 max-w-xs bg-black/90 border border-[#007BFF]/50 text-[#007BFF] rounded-lg p-4 shadow-neon-glow transition-all duration-500 z-50 ${
          showIdleQuote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <p className="text-sm font-medium">{currentQuote}</p>
      </div>

      {/* Stealth Mode CSS */}
      {stealthModeActive && (
        <style>
          {`
          body.stealth-mode-active {
            background-color: #000;
            color: #00ff41;
          }
          
          body.stealth-mode-active * {
            font-family: 'Courier New', monospace;
          }
          
          body.stealth-mode-active .section-title {
            color: #00ff41;
            text-shadow: 0 0 10px rgba(0, 255, 65, 0.7);
          }
          
          body.stealth-mode-active .glass-card {
            background: rgba(0, 20, 0, 0.7);
            border-color: #00ff41;
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
          }
          
          body.stealth-mode-active button,
          body.stealth-mode-active .btn-primary {
            background-color: #003b00;
            color: #00ff41;
            border-color: #00ff41;
          }
          
          body.stealth-mode-active img {
            filter: sepia(0.5) hue-rotate(80deg);
          }
          
          /* Matrix rain effect */
          body.stealth-mode-active::after {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, rgba(0, 255, 65, 0.03) 100%);
            pointer-events: none;
            z-index: 999;
          }
          `}
        </style>
      )}
    </>
  );
};

export default StealthMode;
