# Woodwork & Craft Ltd - Website

A professional, responsive website for Woodwork & Craft Ltd featuring premium woodworking and furniture design services.

## 📁 File Structure

```
woodwork-website/
│
├── index.html          # Main HTML file (structure & content)
├── styles.css          # CSS stylesheets (design & animations)
├── script.js           # JavaScript file (interactivity & functionality)
└── README.md           # This file
```

## 🚀 Quick Start

### Method 1: Simple File Organization
1. Create a folder named `woodwork-website`
2. Download and place all files (`index.html`, `styles.css`, `script.js`) in this folder
3. Double-click `index.html` to open in your browser

### Method 2: Local Server (Recommended)
For best performance and to avoid CORS issues, run a local server:

**Using Python 3:**
```bash
cd woodwork-website
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npm install -g http-server
cd woodwork-website
http-server
```

**Using PHP:**
```bash
cd woodwork-website
php -S localhost:8000
```

## 📋 File Descriptions

### index.html
- Contains the complete HTML structure
- 3 main pages: Home, About, Gallery
- Semantic HTML5 markup
- Responsive navigation
- Contact section with business information

**Key Sections:**
- Navigation bar with smooth transitions
- Hero section with animated content
- Services showcase (6 service cards)
- Gallery with clickable image cards
- About page with company information
- Contact section with location details
- Footer

### styles.css
- Professional color scheme:
  - Primary Brown: `#3E2723`
  - Warm Gold: `#D4A574`
  - Cream Background: `#F5F1EE`
  - Dark Charcoal: `#2C2C2C`

**Key Features:**
- Smooth animations and transitions
- Hover effects on buttons and cards
- Responsive grid layouts
- Modal/Lightbox styling
- Mobile-first responsive design
- Print-friendly styles

**Custom Animations:**
- `float` - Floating background elements
- `slideDown` - Header slide-in animation
- `slideUp` - Content fade-up animation
- `slideZoom` - Modal zoom effect
- `fadeIn` - Modal fade-in effect

### script.js
- Gallery initialization and management
- Modal/Lightbox functionality
- Page navigation system
- Event listeners and handlers
- Scroll effects and animations
- Performance optimization

**Key Functions:**
- `initializeGallery()` - Creates gallery cards
- `openModal(index)` - Opens image lightbox
- `closeModal()` - Closes lightbox
- `nextImage()` - Navigate to next image
- `previousImage()` - Navigate to previous image
- `navigate(pageId)` - Switch between pages
- `scrollToContact()` - Smooth scroll to contact

## 🎨 Features

### Interactive Elements
- **Animated Buttons** with hover effects and color transitions
- **Smooth Navigation** with underline animations
- **Floating Background** elements in hero section
- **Hover Effects** on service cards and gallery items

### Gallery Features
- Click any gallery image to view fullscreen
- Arrow navigation in modal (previous/next)
- Keyboard navigation:
  - `→` (Right Arrow) - Next image
  - `←` (Left Arrow) - Previous image
  - `Esc` - Close modal
- Click outside image to close modal
- "Click to enlarge" overlay hint

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Desktop: 1024px+
  - Tablet: 768px - 1023px
  - Mobile: Below 768px
  - Small Mobile: Below 480px

### Company Information Integrated
- **Email:** woodworkcraft3@gmail.com
- **Phone:** 07087787838
- **Head Office:** Ibadan
- **Branch Office:** Abuja

## 🛠️ Customization

### Change Company Information
Edit `index.html` to update:
- Company name/email/phone in navigation
- Contact section details
- Office addresses
- Business descriptions

### Modify Gallery Images
In `script.js`, update the `galleryImages` array:
```javascript
const galleryImages = [
    {
        url: "YOUR_IMAGE_URL",
        title: "Your Image Title"
    },
    // Add more images...
];
```

### Adjust Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-brown: #3E2723;
    --warm-gold: #D4A574;
    --cream: #F5F1EE;
    --dark-charcoal: #2C2C2C;
}
```

### Change Fonts
Modify font families in `styles.css`:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}

h1, h2, h3, h4 {
    font-family: 'Your Font Name', serif;
}
```

## 📱 Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** For older browsers, some CSS animations may not work perfectly.

## ⚡ Performance Optimization

- Lazy loading for gallery images
- Debounced scroll events
- Minimal external dependencies (Tailwind CSS via CDN)
- Optimized image URLs from Unsplash

## 🔧 Troubleshooting

### Images not loading?
- Check internet connection (images are loaded from Unsplash CDN)
- Clear browser cache
- Try a different browser
- Replace image URLs with your own hosted images

### Modal not opening?
- Check browser console for JavaScript errors
- Ensure `script.js` is properly loaded
- Try disabling browser extensions

### Styles not applying?
- Check if `styles.css` is in the same folder as `index.html`
- Clear browser cache (Ctrl+Shift+Del)
- Verify CSS file path in HTML

### Navigation not working?
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify `script.js` is properly linked

## 📈 SEO Optimization

The website includes:
- Semantic HTML5 elements
- Meta tags for charset and viewport
- Descriptive titles and alt text for images
- Proper heading hierarchy (H1, H2, H3)

### To improve SEO further:
1. Add meta descriptions to pages
2. Add Open Graph tags for social sharing
3. Add structured data (JSON-LD)
4. Optimize image file sizes
5. Add sitemap.xml

## 🔐 Security Considerations

- No sensitive data is stored in the browser
- All external images are from trusted CDN (Unsplash)
- Forms (if added) should use HTTPS
- No inline scripts for better CSP compliance

## 📞 Support

For issues or questions about the website:
- Review the Troubleshooting section above
- Check browser console for error messages
- Verify all files are in the correct location
- Test in different browsers

## 📝 License

This website template is provided as-is for Woodwork & Craft Ltd.

## 🎯 Future Enhancements

Consider adding:
- Contact form with email functionality
- Blog section for portfolio updates
- Client testimonials/reviews section
- Google Maps integration
- Social media links
- Newsletter subscription
- Payment gateway for online ordering
- Appointment booking system

## 📊 Analytics

To add Google Analytics:
1. Get your tracking ID from Google Analytics
2. Add this code before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 🚀 Deployment

To deploy this website:

### Option 1: GitHub Pages (Free)
1. Create GitHub account
2. Upload files to repository
3. Enable GitHub Pages in settings
4. Website goes live at `yourusername.github.io`

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop your folder
3. Website is live instantly

### Option 3: Traditional Hosting
1. Get web hosting (Bluehost, Hostinger, etc.)
2. Upload files via FTP
3. Point domain to hosting

### Option 4: Vercel (Free)
1. Sign up at vercel.com
2. Import your project
3. Automatic deployment with every update

## 📞 Quick Reference

**Business Contact Info:**
- Email: woodworkcraft3@gmail.com
- Phone: 07087787838
- Location: Ibadan & Abuja, Nigeria

**Color Codes:**
- Primary Brown: #3E2723
- Gold Accent: #D4A574
- Cream Background: #F5F1EE

**Key Pages:**
- Home: `/` or `#home`
- About: `/` with About page
- Gallery: Shows all woodwork projects

---

**Last Updated:** 2024
**Version:** 1.0
**Status:** Production Ready ✅
