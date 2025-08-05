# Play & Earn Landing Page

A modern Next.js landing page with multiple Meta (Facebook) pixel tracking capabilities.

## 🎯 Multiple Meta Pixels Setup

This project supports multiple Meta (Facebook) pixels on a single website, which is useful for:

- **Different Campaigns**: Track separate marketing campaigns
- **Business Units**: Monitor different product lines or services
- **A/B Testing**: Compare performance across different pixel configurations
- **Client Tracking**: If you manage multiple client accounts

## 📊 How to Add Multiple Pixels

### 1. Update Pixel IDs

Edit the `PIXEL_IDS` array in `app/utils/facebookPixel.js`:

```javascript
export const PIXEL_IDS = [
  '24482502841374853', // Your existing pixel
  'YOUR_SECOND_PIXEL_ID', // Add your second pixel ID here
  'YOUR_THIRD_PIXEL_ID',  // Add your third pixel ID here
]
```

### 2. Update Component Pixel IDs

Also update the `pixelIds` array in `app/components/FacebookPixel.jsx`:

```javascript
const pixelIds = [
  '24482502841374853', // Your existing pixel
  'YOUR_SECOND_PIXEL_ID', // Add your second pixel ID here
  'YOUR_THIRD_PIXEL_ID',  // Add your third pixel ID here
]
```

## 🚀 Usage Examples

### Basic Event Tracking

```javascript
import { trackEvent, trackPurchase, trackLead } from './utils/facebookPixel'

// Track a purchase across all pixels
trackPurchase({
  value: 5000,
  currency: 'INR',
  content_ids: ['product_123'],
  content_name: 'Gaming Bonus'
})

// Track a lead across all pixels
trackLead({
  content_name: 'Landing Page Lead',
  content_category: 'Gaming',
  value: 1000,
  currency: 'INR'
})

// Track custom events
trackEvent('GameStarted', {
  content_name: 'Puzzle Game',
  content_category: 'Gaming',
  value: 100,
  currency: 'INR'
})
```

### Advanced Event Tracking

```javascript
// Track with custom parameters
trackEvent('CustomEvent', {
  content_name: 'Special Offer',
  content_category: 'Promotion',
  value: 2500,
  currency: 'INR',
  custom_parameter: 'special_value'
}, {
  eventID: 'custom_event_123',
  eventSourceUrl: window.location.href
})
```

## 📈 Event Types Supported

- **PageView**: Automatic on page load
- **Purchase**: For completed transactions
- **AddToCart**: When items are added to cart
- **Lead**: For form submissions and lead generation
- **Custom Events**: Any custom event you define

## 🔧 Configuration Options

### Environment Variables (Optional)

You can also use environment variables for pixel IDs:

```javascript
// In .env.local
NEXT_PUBLIC_FACEBOOK_PIXEL_IDS=24482502841374853,YOUR_SECOND_PIXEL_ID,YOUR_THIRD_PIXEL_ID

// In your code
const pixelIds = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_IDS?.split(',') || ['24482502841374853']
```

### Conditional Pixel Loading

You can conditionally load pixels based on certain criteria:

```javascript
const pixelIds = [
  '24482502841374853', // Always load
  ...(process.env.NODE_ENV === 'production' ? ['PRODUCTION_PIXEL_ID'] : []),
  ...(userType === 'premium' ? ['PREMIUM_PIXEL_ID'] : [])
]
```

## 🛠️ Installation

```bash
npm install
npm run dev
```

## 📱 Features

- ✅ Multiple Meta Pixel Support
- ✅ Automatic PageView Tracking
- ✅ Custom Event Tracking
- ✅ Utility Functions for Easy Integration
- ✅ Responsive Design
- ✅ SEO Optimized
- ✅ Google Tag Manager Integration

## 🔍 Testing

To test your pixels:

1. Use Facebook Pixel Helper browser extension
2. Check browser console for tracking events
3. Verify in Facebook Events Manager
4. Test with different pixel IDs

## 📚 Best Practices

1. **Unique Event IDs**: Each pixel gets a unique event ID to prevent duplicates
2. **Consistent Parameters**: Use consistent parameter names across all pixels
3. **Error Handling**: The utility functions include error handling for missing pixels
4. **Performance**: Events are tracked efficiently without blocking the UI

## 🚨 Important Notes

- Each pixel ID must be valid and active in your Facebook Business Manager
- Test thoroughly in development before deploying to production
- Monitor your Facebook Events Manager to ensure all pixels are receiving data
- Consider Facebook's data usage policies and user privacy

## 📞 Support

For issues with Meta pixels, check:
- [Facebook Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel/)
- [Facebook Business Help Center](https://www.facebook.com/business/help)

---

**Note**: Replace `YOUR_SECOND_PIXEL_ID` and `YOUR_THIRD_PIXEL_ID` with your actual Facebook pixel IDs from Facebook Business Manager. 