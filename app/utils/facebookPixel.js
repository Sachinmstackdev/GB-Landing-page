// Facebook Pixel utility functions
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

export const trackLead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead')
  }
}

export const trackPurchase = (value, currency = 'INR') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency
    })
  }
}

export const trackAddToCart = (value, currency = 'INR') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', {
      value: value,
      currency: currency
    })
  }
}

export const trackInitiateCheckout = (value, currency = 'INR') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value: value,
      currency: currency
    })
  }
}

export const trackCompleteRegistration = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration')
  }
}

export const trackStartTrial = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'StartTrial')
  }
}

export const trackSubscribe = (value, currency = 'INR') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Subscribe', {
      value: value,
      currency: currency
    })
  }
} 