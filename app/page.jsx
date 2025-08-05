'use client'

import { useEffect } from 'react'
import { trackLead, trackPurchase, trackCustomEvent } from './utils/facebookPixel'

export default function Home() {
  useEffect(() => {
    // Example: Track a lead when page loads
    trackLead({
      content_name: 'Play & Earn Landing Page',
      content_category: 'Gaming',
      value: 5000,
      currency: 'INR'
    })
  }, [])

  const handlePlayNow = () => {
    // Example: Track custom event when user clicks "Play Now"
    trackCustomEvent('GameStarted', {
      content_name: 'Play & Earn Game',
      content_category: 'Gaming',
      value: 100,
      currency: 'INR'
    })
  }

  const handlePurchase = () => {
    // Example: Track purchase event
    trackPurchase({
      value: 5000,
      currency: 'INR',
      content_ids: ['game_bonus_5000'],
      content_name: '₹5000 Gaming Bonus',
      content_category: 'Gaming Rewards'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Play & Earn
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Get 100% Cashback Instantly! Zero Risk Gaming
        </p>
        <p className="text-lg mb-12">
          Bonus up to ₹5000 credited immediately. UPI, Paytm, Google Pay supported.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={handlePlayNow}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300"
          >
            Start Playing Now
          </button>
          
          <button 
            onClick={handlePurchase}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300 ml-4"
          >
            Get ₹5000 Bonus
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Zero Risk</h3>
            <p>Play without any risk, get guaranteed rewards</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Instant Rewards</h3>
            <p>Get cashback credited immediately to your account</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Multiple Payments</h3>
            <p>UPI, Paytm, Google Pay all supported</p>
          </div>
        </div>
      </div>
    </div>
  )
} 