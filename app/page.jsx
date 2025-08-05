'use client'

import { useEffect, useState } from 'react'
import { trackPageView, trackLead } from './utils/facebookPixel'

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 35,
    seconds: 5
  })

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined') {
      // Facebook Pixel tracking
      trackPageView()
      
      // Google Analytics tracking
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: 'Play & Earn Landing Page',
          page_location: window.location.href
        })
      }
    }

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime
        
        if (seconds > 0) {
          seconds--
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes--
          } else {
            minutes = 59
            if (hours > 0) {
              hours--
            } else {
              // Timer finished
              clearInterval(timer)
              return { hours: 0, minutes: 0, seconds: 0 }
            }
          }
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCTAClick = () => {
    // Track CTA click
    if (typeof window !== 'undefined') {
      trackLead()
      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'CTA',
          event_label: 'Claim Cashback Button'
        })
      }
    }
    
    // Redirect to GullyBets community page
    window.location.href = 'https://gullybets.vip/commu'
  }

  return (
        <div className="min-h-screen text-white">


            {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/twosapiens/image/upload/v1754341509/a-dramatic-cinematic-product-advertiseme_hAccRCvnREe-jusRDtPTvQ_jLlykwaJQvy-DKsLeorwZw-Photoroom_bi2pzc.png')`
          }}
        ></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Countdown Timer */}
          <div className="mb-8">
            <div className="bg-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block border border-red-400/30 mb-4">
              <span className="text-red-300 font-semibold text-sm">🔥 Limited Time Offer</span>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-300">Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-300">Minutes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-300">Seconds</div>
              </div>
            </div>
          </div>

                     {/* Clean Gift Box Icon */}
           <div className="mb-8">
             <div className="relative w-28 h-28 mx-auto">
               {/* Simple Gift Box */}
               <div className="relative w-full h-full animate-float">
                 {/* Main Box */}
                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl shadow-xl">
                   {/* Box Lid */}
                   <div className="absolute -top-1 left-1 right-1 h-3 bg-gradient-to-br from-red-500 to-red-600 rounded-t-xl"></div>
                   
                   {/* Ribbon Vertical */}
                   <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-red-600 to-red-700 transform -translate-x-1/2"></div>
                   
                   {/* Ribbon Horizontal */}
                   <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-red-600 to-red-700 transform -translate-y-1/2"></div>
                   
                   {/* Simple Bow */}
                   <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                     <div className="w-6 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full"></div>
                   </div>
                   
                   {/* Shine */}
                   <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full"></div>
                 </div>
                 
                 {/* Shadow */}
                 <div className="absolute -bottom-1 left-1 right-1 h-1 bg-black/10 rounded-xl"></div>
               </div>
               
               {/* Subtle Glow */}
               <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-xl"></div>
             </div>
           </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <div className="text-white mb-2">Play Your First Game,</div>
            <div className="text-yellow-400">Get 100% Cashback</div>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-medium">
            Zero Risk. Bonus up to <span className="text-yellow-400 font-bold text-2xl md:text-3xl">₹5000</span> Credited Instantly
          </p>
          
          {/* CTA Button */}
          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-dark-900 hover:from-yellow-400 hover:to-yellow-300 font-black py-4 px-12 rounded-full text-xl md:text-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto mb-8"
          >
            <span className="text-2xl">⭐</span>
            <span>Claim My Cashback Now</span>
            <span className="text-2xl">⭐</span>
          </button>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white text-lg">✓</span>
                <span className="text-gray-200">2CR+ Happy Users</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white text-lg">✓</span>
                <span className="text-gray-200">Instant Payouts</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white text-lg">✓</span>
                <span className="text-gray-200">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Why Choose Us Section */}
       <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-900">
            Why Choose Us? <span className="text-yellow-500">🏆</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Card 1 */}
                         <div className="bg-green-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
               <div className="text-4xl mb-4">💰</div>
               <h3 className="text-lg font-bold mb-2 text-dark-900">100% Cashback Bonus</h3>
               <p className="text-sm text-dark-600">Get your entire first deposit back as bonus instantly</p>
             </div>
            
            {/* Feature Card 2 */}
                         <div className="bg-blue-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
               <div className="text-4xl mb-4">💳</div>
               <h3 className="text-lg font-bold mb-2 text-dark-900">UPI, Paytm, Google Pay</h3>
               <p className="text-sm text-dark-600">Multiple payment options for your convenience</p>
             </div>
            
            {/* Feature Card 3 */}
                         <div className="bg-purple-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
               <div className="text-4xl mb-4">⚡</div>
               <h3 className="text-lg font-bold mb-2 text-dark-900">Withdraw Anytime</h3>
               <p className="text-sm text-dark-600">No restrictions, withdraw your winnings instantly</p>
             </div>
            
            {/* Feature Card 4 */}
                         <div className="bg-pink-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
               <div className="text-4xl mb-4">👥</div>
               <h3 className="text-lg font-bold mb-2 text-dark-900">Invite & Earn ₹400</h3>
               <p className="text-sm text-dark-600">Earn ₹400 for every friend who joins</p>
             </div>
          </div>
        </div>
      </section>

             {/* Bonus Stack Section */}
       <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-900">
            Your Complete Bonus Stack <span className="text-2xl">🎯</span>
          </h2>
          
                                                                 <div className="bg-gradient-to-r from-gray-800 to-black rounded-xl p-6 md:p-8 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-lg font-bold text-white">Reward</th>
                    <th className="text-right py-4 px-4 text-lg font-bold text-white">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-white font-medium">🎁 100% Cashback</td>
                    <td className="py-4 px-4 text-right text-yellow-400 font-bold">Up to ₹5000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-white font-medium">💎 Deposit Bonus</td>
                    <td className="py-4 px-4 text-right text-yellow-400 font-bold">+5% on Every Top-up</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-white font-medium">👥 Referral Reward</td>
                    <td className="py-4 px-4 text-right text-yellow-400 font-bold">₹400 Per Friend</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-white font-medium">🎯 Daily Login Reward</td>
                    <td className="py-4 px-4 text-right text-yellow-400 font-bold">₹50 Daily</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
                        <div className="mt-8 text-center">
              <button
                onClick={handleCTAClick}
                className="bg-yellow-500 text-dark-900 hover:bg-yellow-400 font-bold py-3 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Playing Risk-Free Now
              </button>
            </div>
          </div>
        </div>
      </section>


                    {/* FAQs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-dark-900">
            Frequently Asked Questions <span className="text-yellow-500 ml-2">?</span>
          </h2>
          
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                  Q
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-dark-900">Is this gambling?</h3>
                  <p className="text-dark-600 text-lg leading-relaxed">No. It's a reward-based skill platform where you earn through your gaming skills and strategic thinking.</p>
                </div>
              </div>
            </div>
            
            {/* FAQ 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                  Q
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-dark-900">Is it safe?</h3>
                  <p className="text-dark-600 text-lg leading-relaxed">Yes. Backed by 2CR+ users with secure payment processing and instant payouts.</p>
                </div>
              </div>
            </div>
            
            {/* FAQ 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                  Q
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-dark-900">Can I really earn?</h3>
                  <p className="text-dark-600 text-lg leading-relaxed">Yes! Bonuses are instantly credited to your account and you can withdraw anytime.</p>
                </div>
              </div>
            </div>
            
            {/* FAQ 4 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                  Q
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-dark-900">How do I get started?</h3>
                  <p className="text-dark-600 text-lg leading-relaxed">Simply click the button above, create your account, and start playing to earn your first bonus!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Final CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-black">
         <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/80"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Earning? <span className="text-2xl">🚀</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of players who are already earning daily rewards
          </p>
          <button
            onClick={handleCTAClick}
            className="bg-yellow-500 text-dark-900 hover:bg-yellow-400 font-bold py-3 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Playing Risk-Free Now
          </button>
        </div>
      </section>

                           {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-800 to-black p-4 z-40 md:hidden">
         <button
           onClick={handleCTAClick}
           className="w-full bg-yellow-500 text-dark-900 hover:bg-yellow-400 font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
         >
           🚀 Start Playing Risk-Free
         </button>
       </div>

                    {/* Footer */}
       <footer className="bg-dark-900 py-8 px-4 text-center text-gray-400">
        <p className="text-sm">
          © 2024 Play & Earn Platform. All rights reserved. | 
          <a href="#" className="text-gray-300 hover:text-white ml-2">Privacy</a> | 
          <a href="#" className="text-gray-300 hover:text-white ml-2">Terms</a>
        </p>
      </footer>
    </div>
  )
} 