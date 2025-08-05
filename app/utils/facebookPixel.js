// Facebook Pixel utility functions for multiple pixels

// Array of your Facebook Pixel IDs
export const PIXEL_IDS = [
  '24482502841374853', // Your existing pixel
  '740749665548231',   // Saurav Singh's Meta pixel
]

/**
 * Track an event across all Facebook pixels
 * @param {string} eventName - The event name (e.g., 'Purchase', 'AddToCart', 'Lead')
 * @param {object} parameters - Event parameters
 * @param {object} options - Additional options
 */
export const trackEvent = (eventName, parameters = {}, options = {}) => {
  if (typeof window === 'undefined' || !window.fbq) {
    console.warn('Facebook Pixel not loaded')
    return
  }

  PIXEL_IDS.forEach(pixelId => {
    window.fbq('track', eventName, parameters, { 
      eventID: `${pixelId}_${Date.now()}`,
      ...options 
    })
  })
}

/**
 * Track a purchase event across all pixels
 * @param {object} parameters - Purchase parameters (value, currency, content_ids, etc.)
 */
export const trackPurchase = (parameters) => {
  trackEvent('Purchase', parameters)
}

/**
 * Track an add to cart event across all pixels
 * @param {object} parameters - Add to cart parameters
 */
export const trackAddToCart = (parameters) => {
  trackEvent('AddToCart', parameters)
}

/**
 * Track a lead event across all pixels
 * @param {object} parameters - Lead parameters
 */
export const trackLead = (parameters) => {
  trackEvent('Lead', parameters)
}

/**
 * Track a custom event across all pixels
 * @param {string} eventName - Custom event name
 * @param {object} parameters - Event parameters
 */
export const trackCustomEvent = (eventName, parameters) => {
  trackEvent(eventName, parameters)
}

/**
 * Track page view across all pixels
 */
export const trackPageView = () => {
  if (typeof window === 'undefined' || !window.fbq) {
    console.warn('Facebook Pixel not loaded')
    return
  }

  PIXEL_IDS.forEach(pixelId => {
    window.fbq('track', 'PageView', {}, { eventID: pixelId })
  })
} 