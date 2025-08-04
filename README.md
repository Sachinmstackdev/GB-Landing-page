# Play & Earn Landing Page

A fully responsive, fast-loading landing page built with Next.js and Tailwind CSS to promote a "Play & Earn" app with 100% cashback offers.

## 🚀 Features

- **Fully Responsive Design** - Optimized for all devices
- **Fast Loading** - Built with Next.js for optimal performance
- **Manual Redirect** - Redirects to signup page only when users click CTA buttons
- **Analytics Integration** - Facebook Pixel and Google Analytics tracking
- **Mobile Optimized** - Sticky CTA for mobile users
- **Modern UI** - Beautiful gradient design with animations
- **SEO Optimized** - Meta tags and structured content

## 📱 Sections

1. **Hero Section** - Bold headline with 100% cashback offer
2. **Why Choose Us** - Feature cards highlighting benefits
3. **Bonus Stack** - Reward table showing all bonuses
4. **FAQs** - Common questions and answers
5. **Final CTA** - Call-to-action section
6. **Sticky Mobile CTA** - Always visible on mobile

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (JSX)** - No TypeScript
- **Custom Animations** - CSS animations and transitions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gblanding
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Analytics** (Optional)
   
   Replace the placeholder IDs in `app/layout.jsx`:
   - `FB_PIXEL_ID` with your Facebook Pixel ID
   - `GA_TAG_ID` with your Google Analytics Tag ID

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## ⚙️ Configuration

### Analytics Setup

1. **Facebook Pixel**
   - Replace `FB_PIXEL_ID` in `app/layout.jsx`
   - Tracks: PageView, Lead events

2. **Google Analytics**
   - Replace `GA_TAG_ID` in `app/layout.jsx`
   - Tracks: page_view, CTA clicks

### Customization

- **Colors**: Edit `tailwind.config.js` for theme colors
- **Content**: Modify text in `app/page.jsx`
- **Redirect URL**: Change in `app/page.jsx` line 12
- **Timing**: Adjust redirect delay in `app/page.jsx` line 11

## 📊 Performance

- **Core Web Vitals Optimized**
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Mobile First Design**
- **Optimized Images and Fonts**

## 🎨 Design Features

- **Dark Theme** with golden accents
- **Gradient Backgrounds** for visual appeal
- **Smooth Animations** and hover effects
- **Modern Typography** using Inter font
- **Responsive Grid Layouts**

## 📱 Mobile Optimization

- **Touch-friendly buttons**
- **Sticky CTA bar** on mobile
- **Optimized spacing** for small screens
- **Fast loading** on mobile networks

## 🔧 Customization Guide

### Changing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#your-color-here',
    // ... other shades
  }
}
```

### Modifying Content
Edit `app/page.jsx`:
- Headlines and text content
- CTA button text
- FAQ questions and answers
- Feature descriptions

### Adjusting Redirect
Change the URL in `app/page.jsx`:
```javascript
window.location.href = 'https://your-signup-url.com'
```

## 📈 Analytics Events

The page tracks the following events:

- **Page View** - When user lands on the page
- **Lead** - When user clicks any CTA button
- **CTA Click** - Detailed tracking of button interactions

## 🚨 Important Notes

- **No gambling terms** used in content
- **Mobile-first** design approach
- **Fast loading** optimized for ads
- **SEO friendly** structure
- **Accessibility** compliant

## 📄 License

This project is for educational and commercial use.

## 🤝 Support

For questions or issues, please check the code comments or create an issue in the repository.

---

**Built with ❤️ using Next.js and Tailwind CSS** 