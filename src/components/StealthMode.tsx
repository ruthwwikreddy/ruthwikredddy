
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from "framer-motion";

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

// Matrix-style characters for the rain effect
const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+=[]{}|;:,.<>/?~`";

interface StealthModeProps {
  nameSelector: string; // CSS selector for the name element that will trigger stealth mode
}

const StealthMode = ({ nameSelector }: StealthModeProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [stealthModeActive, setStealthModeActive] = useState(false);
  const [showIdleQuote, setShowIdleQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(idleQuotes[0]);
  const [quoteInterval, setQuoteIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);
  const [isIdle, setIsIdle] = useState(false);
  const [originalTitle] = useState(document.title);
  const [showActivationMessage, setShowActivationMessage] = useState(false);
  const [clicksRemaining, setClicksRemaining] = useState(STEALTH_MODE_CLICK_COUNT);
  const [matrixRain, setMatrixRain] = useState<HTMLCanvasElement | null>(null);

  // Function to toggle stealth mode
  const toggleStealthMode = useCallback(() => {
    setClicksRemaining(prev => {
      const remaining = prev - 1;
      
      if (remaining > 0 && remaining <= 3) {
        // Show clicks remaining message
        setShowActivationMessage(true);
        setTimeout(() => setShowActivationMessage(false), 1000);
      }
      
      if (remaining <= 0) {
        // Toggle stealth mode
        const newStealthModeState = !stealthModeActive;
        setStealthModeActive(newStealthModeState);
        
        // Reset click counter
        setTimeout(() => setClicksRemaining(STEALTH_MODE_CLICK_COUNT), 500);
        
        // Apply stealth mode styles to the body
        if (!stealthModeActive) {
          document.body.classList.add('stealth-mode-active');
          
          // Play activation sound
          const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-09a.mp3');
          audio.volume = 0.3;
          audio.play().catch(() => {});
          
          // Initialize matrix rain effect
          initMatrixRain();
        } else {
          document.body.classList.remove('stealth-mode-active');
          
          // Play deactivation sound
          const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-10.mp3');
          audio.volume = 0.3;
          audio.play().catch(() => {});
          
          // Remove matrix rain effect
          if (matrixRain) {
            document.body.removeChild(matrixRain);
            setMatrixRain(null);
          }
        }
        
        return STEALTH_MODE_CLICK_COUNT;
      }
      
      return remaining;
    });
  }, [stealthModeActive, matrixRain]);

  // Initialize matrix rain effect
  const initMatrixRain = useCallback(() => {
    if (matrixRain) return;
    
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-rain';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.15';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Array of drops
    const drops: number[] = [];
    
    // Initialize drops
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    // Drawing the characters
    function draw() {
      if (!ctx) return;
      
      // Black BG for the canvas, translucent to show trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Green text
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;
      
      // Loop over drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Increment y coordinate
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    }
    
    // Animation loop
    let animationId: number;
    
    function animate() {
      draw();
      animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Set the canvas ref to remove it later
    setMatrixRain(canvas);
    
    // Resize handler
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, [matrixRain]);

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
        const intervalId = setInterval(() => {
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
    let titleInterval: ReturnType<typeof setInterval> | null = null;
    let titleIndex = 0;
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (titleInterval) clearInterval(titleInterval);
        
        titleInterval = setInterval(() => {
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
        <div className="fixed top-4 right-4 z-50 px-4 py-1.5 bg-[#00ff41]/90 text-black text-xs rounded-full animate-pulse shadow-[0_0_15px_rgba(0,255,65,0.7)] font-mono">
          STEALTH MODE ACTIVE
        </div>
      )}

      {/* Clicks Remaining Indicator */}
      <AnimatePresence>
        {showActivationMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#007BFF]/90 text-white px-4 py-2 rounded-lg z-50 shadow-[0_0_15px_rgba(0,123,255,0.7)]"
          >
            {clicksRemaining} more clicks to {stealthModeActive ? "deactivate" : "activate"} Stealth Mode
          </motion.div>
        )}
      </AnimatePresence>

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
          
          body.stealth-mode-active .section-title::after {
            background-color: #00ff41;
            box-shadow: 0 0 10px rgba(0, 255, 65, 0.7);
          }
          
          body.stealth-mode-active .bento-card,
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
            filter: sepia(0.5) hue-rotate(80deg) brightness(0.8);
          }
          
          /* Matrix-style typing effect */
          body.stealth-mode-active h1, 
          body.stealth-mode-active h2,
          body.stealth-mode-active h3 {
            position: relative;
            overflow: hidden;
            white-space: nowrap;
          }
          
          body.stealth-mode-active h1::after, 
          body.stealth-mode-active h2::after,
          body.stealth-mode-active h3::after {
            content: '|';
            animation: blink 1s step-start infinite;
          }
          
          @keyframes blink {
            50% { opacity: 0; }
          }
          
          /* Flicker effect */
          body.stealth-mode-active .bento-card:hover {
            animation: flicker 2s linear infinite;
          }
          
          @keyframes flicker {
            0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
            20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.8; }
          }
          
          /* Enhanced UI for stealth mode */
          body.stealth-mode-active .scroll-indicator {
            background: linear-gradient(90deg, #00ff41, #00aa41);
          }
          
          body.stealth-mode-active .progress-dot.active {
            background-color: #00ff41;
            box-shadow: 0 0 10px rgba(0, 255, 65, 0.7);
          }
          `}
        </style>
      )}
    </>
  );
};

export default StealthMode;
