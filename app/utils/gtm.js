// Google Tag Manager utility functions
export const pushToDataLayer = (data) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data)
  }
}

export const trackPageView = (pageTitle, pageLocation) => {
  pushToDataLayer({
    event: 'page_view',
    page_title: pageTitle || 'Play & Earn Landing Page',
    page_location: pageLocation || window.location.href
  })
}

export const trackEvent = (eventName, eventCategory, eventLabel, eventValue) => {
  pushToDataLayer({
    event: eventName,
    event_category: eventCategory,
    event_label: eventLabel,
    event_value: eventValue
  })
}

export const trackCTAClick = (buttonName, buttonLocation) => {
  pushToDataLayer({
    event: 'click',
    event_category: 'CTA',
    event_label: buttonName || 'CTA Button',
    button_location: buttonLocation || 'landing_page'
  })
}

export const trackLead = (leadType = 'general') => {
  pushToDataLayer({
    event: 'lead',
    lead_type: leadType,
    page_location: window.location.href
  })
}

export const trackConversion = (conversionValue, conversionCurrency = 'INR') => {
  pushToDataLayer({
    event: 'conversion',
    conversion_value: conversionValue,
    conversion_currency: conversionCurrency
  })
}

export const trackUserEngagement = (engagementType, engagementValue) => {
  pushToDataLayer({
    event: 'user_engagement',
    engagement_type: engagementType,
    engagement_value: engagementValue
  })
}

export const trackScroll = (scrollDepth) => {
  pushToDataLayer({
    event: 'scroll',
    scroll_depth: scrollDepth
  })
}

export const trackTimeOnPage = (timeSpent) => {
  pushToDataLayer({
    event: 'time_on_page',
    time_spent: timeSpent
  })
} 