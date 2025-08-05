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
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WJ7FS8GH');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJ7FS8GH"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {children}
      </body>
    </html>
  )
} 