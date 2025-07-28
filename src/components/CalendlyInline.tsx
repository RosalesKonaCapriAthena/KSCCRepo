import React, { useEffect } from 'react';

interface CalendlyInlineProps {
  url: string;
  className?: string;
}

const CalendlyInline: React.FC<CalendlyInlineProps> = ({ url, className = "" }) => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Initialize inline widget when script is loaded
    const initWidget = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: document.querySelector(`[data-calendly-url="${url}"]`),
          prefill: {},
          utm: {}
        });
      }
    };

    // Check if script is already loaded
    if (window.Calendly) {
      initWidget();
    } else {
      // Wait for script to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initWidget();
        }
      }, 100);
    }
  }, [url]);

  return (
    <div 
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

// TypeScript declaration for Calendly
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default CalendlyInline; 