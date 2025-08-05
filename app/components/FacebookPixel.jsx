'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function FacebookPixel() {
  useEffect(() => {
    // Initialize Facebook Pixel
    if (typeof window !== 'undefined') {
      // Check if fbq is already loaded
      if (window.fbq) {
        window.fbq('track', 'PageView')
      } else {
        // If fbq is not loaded yet, wait for it
        const checkFbq = setInterval(() => {
          if (window.fbq) {
            window.fbq('track', 'PageView')
            clearInterval(checkFbq)
          }
        }, 100)
        
        // Clear interval after 5 seconds to prevent infinite checking
        setTimeout(() => clearInterval(checkFbq), 5000)
      }
    }
  }, [])

  return (
    <>
      {/* Facebook Pixel Code */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
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
      
      {/* Noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=24482502841374853&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  )
} 