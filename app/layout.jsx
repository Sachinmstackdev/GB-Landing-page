import './globals.css'
import FacebookPixel from './components/FacebookPixel'

export const metadata = {
  title: 'Play & Earn - Get 100% Cashback Instantly | Zero Risk Gaming',
  description: 'Play your first game and get 100% cashback instantly! Zero risk, bonus up to ₹5000 credited immediately. UPI, Paytm, Google Pay supported. Start earning today!',
  keywords: 'play and earn, cashback, gaming rewards, instant bonus, zero risk gaming',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Play & Earn - Get 100% Cashback Instantly',
    description: 'Play your first game and get 100% cashback instantly! Zero risk, bonus up to ₹5000 credited immediately.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Play & Earn - Get 100% Cashback Instantly',
    description: 'Play your first game and get 100% cashback instantly! Zero risk, bonus up to ₹5000 credited immediately.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        {/* Meta Pixel Component */}
        <FacebookPixel />
        
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GA_TAG_ID`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TAG_ID');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 