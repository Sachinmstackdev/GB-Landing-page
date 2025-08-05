import './globals.css'

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
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '24482502841374853');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=24482502841374853&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
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