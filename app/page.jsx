'use client'

import { useEffect, useState } from 'react'
import { trackLead, trackPurchase, trackCustomEvent } from './utils/facebookPixel'

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 35,
    seconds: 5
  })

  useEffect(() => {
    // Track page view and lead when page loads
    trackLead({
      content_name: 'Cricket Giveaway Landing Page',
      content_category: 'Sports',
      value: 5000,
      currency: 'INR'
    })

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

  // Generic button click handler with distinct tracking for each button
  const handleButtonClick = (buttonLocation) => {
    // Prepare event parameters
    const params = {
      button_location: buttonLocation,
      content_name: buttonLocation === 'hero_section' ? 'Join Giveaway Button' : 'Start Predicting Button',
      content_category: 'Sports',
      value: 5000,
      currency: 'INR'
    }

    // Track the specific button click
    trackCustomEvent('ButtonClick', params)
    
    // Debug logging
    console.log('ButtonClick fired:', {
      button_location: params.button_location,
      content_name: params.content_name
    })
    
    // Delay redirect by 300ms to ensure pixel fires
    setTimeout(() => {
      window.location.href = 'https://gullybets.vip/commu'
    }, 300)
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
              <span className="text-red-300 font-semibold text-sm">🏏 Cricket Giveaway Ends Soon</span>
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

          {/* Cricket Trophy Icon */}
          <div className="mb-8">
            <div className="relative w-28 h-28 mx-auto">
              {/* Cricket Trophy */}
              <div className="relative w-full h-full animate-float">
                {/* Trophy Base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full"></div>
                
                {/* Trophy Stem */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-500"></div>
                
                {/* Trophy Cup */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-t-full">
                  {/* Trophy Handles */}
                  <div className="absolute top-4 -left-2 w-4 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-l-full"></div>
                  <div className="absolute top-4 -right-2 w-4 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-r-full"></div>
                  
                  {/* Trophy Crown */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-t-full"></div>
                </div>
                
                {/* Cricket Ball */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full">
                  <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
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
            <div className="text-white mb-2">Join Our Cricket Giveaway,</div>
            <div className="text-yellow-400">Win ₹5,000 Every Match!</div>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-medium">
            Predict match outcomes, test your cricket knowledge, and win exciting rewards up to <span className="text-yellow-400 font-bold text-2xl md:text-3xl">₹5000</span>
          </p>
          
          {/* CTA Button */}
          <button
            onClick={() => handleButtonClick('hero_section')}
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-dark-900 hover:from-yellow-400 hover:to-yellow-300 font-black py-4 px-12 rounded-full text-xl md:text-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto mb-8"
          >
            <span className="text-2xl">🏏</span>
            <span>Join Giveaway Now</span>
            <span className="text-2xl">🏏</span>
          </button>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white text-lg">✓</span>
                <span className="text-gray-200">2CR+ Cricket Fans</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white text-lg">✓</span>
                <span className="text-gray-200">Instant Rewards</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white text-lg">✓</span>
                <span className="text-gray-200">Free to Join</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-900">
            How Our Cricket Giveaway Works <span className="text-yellow-500">🏏</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-green-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold mb-2 text-dark-900">1. Join Free</h3>
              <p className="text-sm text-dark-600">Create your account and join our cricket community</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-blue-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2 text-dark-900">2. Make Predictions</h3>
              <p className="text-sm text-dark-600">Predict match outcomes and test your cricket knowledge</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-purple-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-bold mb-2 text-dark-900">3. Win Rewards</h3>
              <p className="text-sm text-dark-600">Earn rewards for correct predictions and participation</p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-pink-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-bold mb-2 text-dark-900">4. Redeem Prizes</h3>
              <p className="text-sm text-dark-600">Convert your rewards to real prizes and cash</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-900">
            Your Cricket Rewards <span className="text-2xl">🎯</span>
          </h2>
          
          <div className="bg-gradient-to-r from-gray-800 to-black rounded-xl p-6 md:p-8 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-lg font-bold text-white">Reward Type</th>
                    <th className="text-right py-4 px-4 text-lg font-bold text-white">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-white font-medium">🏏 Match Prediction Bonus</td>
                    <td className="py-4 px-4 text-right text-yellow-400 font-bold">Up to ₹5000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-white font-medium">🎁 Welcome Gift</td>
                    <td className="py-4 px-4 text-right text-yellow-400 font-bold">₹100 Free Credit</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-white font-medium">👥 Refer Friends</td>
                    <td className="py-4 px-4 text-right text-yellow-400 font-bold">₹400 Per Friend</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-white font-medium">📅 Daily Login Bonus</td>
                    <td className="py-4 px-4 text-right text-yellow-400 font-bold">₹50 Daily</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <button
                onClick={() => handleButtonClick('rewards_section')}
                className="bg-yellow-500 text-dark-900 hover:bg-yellow-400 font-bold py-3 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Predicting Now
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
                  <h3 className="text-xl font-bold mb-3 text-dark-900">Is this a gambling site?</h3>
                  <p className="text-dark-600 text-lg leading-relaxed">No, this is a cricket prediction and rewards platform where you test your cricket knowledge and earn rewards for correct predictions.</p>
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
                  <h3 className="text-xl font-bold mb-3 text-dark-900">Is it completely free to join?</h3>
                  <p className="text-dark-600 text-lg leading-relaxed">Yes! You can join our cricket community for free and start making predictions to earn rewards.</p>
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
                  <h3 className="text-xl font-bold mb-3 text-dark-900">How do I earn rewards?</h3>
                  <p className="text-dark-600 text-lg leading-relaxed">Make cricket match predictions, participate in quizzes, and invite friends to earn exciting rewards and prizes.</p>
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
                  <p className="text-dark-600 text-lg leading-relaxed">Simply click the button above, create your free account, and start making cricket predictions to earn rewards!</p>
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
            Ready to Test Your Cricket Knowledge? <span className="text-2xl">🏏</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of cricket fans who are already earning rewards daily
          </p>
          <button
            onClick={() => handleButtonClick('final_cta_section')}
            className="bg-yellow-500 text-dark-900 hover:bg-yellow-400 font-bold py-3 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Join Cricket Giveaway Now
          </button>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-800 to-black p-4 z-40 md:hidden">
        <button
          onClick={() => handleButtonClick('mobile_sticky')}
          className="w-full bg-yellow-500 text-dark-900 hover:bg-yellow-400 font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          🏏 Join Cricket Giveaway
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-dark-900 py-8 px-4 text-center text-gray-400">
        <p className="text-sm">
          © 2024 Cricket Rewards Platform. All rights reserved. | 
          <a href="#" className="text-gray-300 hover:text-white ml-2">Privacy</a> | 
          <a href="#" className="text-gray-300 hover:text-white ml-2">Terms</a>
        </p>
      </footer>
    </div>
  )
} 