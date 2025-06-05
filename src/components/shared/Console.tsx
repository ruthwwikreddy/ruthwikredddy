import React, { useState, useEffect, useRef } from 'react';

interface ConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Console({ isOpen, onClose }: ConsoleProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const consoleRef = useRef<HTMLDivElement>(null);

  // Capture console.log messages
  useEffect(() => {
    const originalConsole = console.log;
    console.log = (...args: any[]) => {
      const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : arg
      ).join(' ');
      setLogs(prev => [message, ...prev]);
      originalConsole(...args);
    };

    return () => {
      console.log = originalConsole;
    };
  }, []);

  // Scroll to bottom when new logs are added
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 p-4">
      <div className="bg-black/80 rounded-lg p-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-semibold">Console</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            Close
          </button>
        </div>
        <div ref={consoleRef} className="space-y-2">
          {logs.map((log, index) => (
            <div key={index} className="text-gray-300">
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
