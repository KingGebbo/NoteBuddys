/**
 * Vercel Web Analytics initialization
 * Uses @vercel/analytics package approach for tracking page views and events
 * 
 * This script implements the inject pattern from @vercel/analytics for static sites.
 * When deployed to Vercel, it will automatically track page views and custom events.
 */

// Initialize the analytics queue
window.va = window.va || function va(...params) {
  (window.vaq = window.vaq || []).push(params);
};

// Inject the Vercel Analytics script
(function() {
  const scriptSrc = '/_vercel/insights/script.js';
  
  // Check if script is already loaded
  if (document.head.querySelector(`script[src="${scriptSrc}"]`)) {
    return;
  }
  
  // Create and configure the script element
  const script = document.createElement('script');
  script.src = scriptSrc;
  script.defer = true;
  script.setAttribute('data-sdkn', '@vercel/analytics');
  script.setAttribute('data-sdkv', '1.6.1');
  
  // Handle script loading errors
  script.onerror = function() {
    console.log(
      'Analytics script failed to load. ' +
      'Please ensure Web Analytics is enabled in your Vercel project settings. ' +
      'See https://vercel.com/docs/analytics/quickstart for more information.'
    );
  };
  
  // Inject the script
  document.head.appendChild(script);
})();
