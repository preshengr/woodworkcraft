# Wood Work & Craft Ltd - Professional Website

A modern, responsive React website for Wood Work and Craft Ltd, featuring custom furniture, kitchen cabinets, doors, and professional woodworking services.

## Features

✨ **Responsive Design** - Mobile-first approach with perfect responsiveness across all devices  
🎨 **Animated UI Elements** - Smooth animations and transitions throughout  
🌈 **Color-Moving Borders** - Dynamic border animations on portfolio items  
⚡ **Fast Performance** - Optimized for production deployment  
📱 **Mobile Optimized** - Touch-friendly navigation and interactions  
🎯 **SEO Ready** - Proper meta tags and semantic HTML  
📧 **Contact Integration** - WhatsApp direct messaging integration  
🔧 **Easy to Customize** - Well-structured, maintainable code

## Project Structure

```
woodworkcraft/
├── public/
│   └── index.html           # Main HTML file
├── src/
│   ├── App.jsx             # Main application component
│   ├── App.css             # Component styles with animations
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Steps to Install

1. **Clone or navigate to your repository:**
```bash
cd woodworkcraft
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

The website will open at `http://localhost:3000`

## Local Development

### Available Scripts

**Start development server:**
```bash
npm start
```

**Build for production:**
```bash
npm run build
```

**Run tests:**
```bash
npm test
```

### Customization Guide

#### Update Contact Information
Edit the contact details in `src/App.jsx`:
- Line ~280: Update email address in Contact section
- Line ~290: Update phone number
- Line ~298: Update WhatsApp link

#### Change Company Information
- Logo: Modify `.logo h1` in `src/App.css`
- Colors: Update hex values in CSS (Primary: #8B4513, Secondary: #D2B48C)

#### Add Portfolio Items
Update the `portfolioItems` array in the Portfolio component (src/App.jsx) to add more projects

#### Customize Services
Modify the `services` array in the Services component to add/remove services

## Deployment Guide

### Option 1: Deploy to Vercel (Recommended - Free & Easy)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Build your project:**
```bash
npm run build
```

3. **Deploy:**
```bash
vercel
```

4. Follow the prompts and your site will be live!

### Option 2: Deploy to Netlify

1. **Build your project:**
```bash
npm run build
```

2. **Go to** [netlify.com](https://netlify.com) and sign up/login

3. **Drag and drop** the `build` folder to Netlify

4. Your site is now live with automatic deployments!

### Option 3: Deploy to GitHub Pages

1. **Add homepage to package.json:**
```json
"homepage": "https://yourusername.github.io/woodworkcraft"
```

2. **Install GitHub Pages package:**
```bash
npm install --save-dev gh-pages
```

3. **Add deploy scripts to package.json:**
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. **Deploy:**
```bash
npm run deploy
```

### Option 4: Deploy to Heroku

1. **Create Heroku account** at [heroku.com](https://heroku.com)

2. **Install Heroku CLI:**
```bash
npm install -g heroku
```

3. **Create a Procfile** in root directory:
```
web: npm start
```

4. **Deploy:**
```bash
heroku login
heroku create your-app-name
git push heroku main
```

### Option 5: Traditional Hosting (cPanel, Shared Hosting, etc.)

1. **Build the project:**
```bash
npm run build
```

2. **Upload the `build` folder** to your web server's public_html directory

3. **Create a `.htaccess` file** in the build folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. Your site is now live!

## Setting Up Your Repository as Main

### If using GitHub:

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Wood Work & Craft website"
```

2. **Create a new repository** on GitHub and copy the repository URL

3. **Add remote and push:**
```bash
git remote add origin https://github.com/yourusername/woodworkcraft.git
git branch -M main
git push -u origin main
```

4. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select `main` branch as source
   - Save

5. Your site will be available at: `https://yourusername.github.io/woodworkcraft`

### If using GitLab:

1. **Create GitLab account** and new project

2. **Add remote:**
```bash
git remote add origin https://gitlab.com/yourusername/woodworkcraft.git
```

3. **Push:**
```bash
git push -u origin main
```

4. **Enable Pages:**
   - Go to Deployments > Pages
   - Deploy your project

## Performance Optimization

✅ Code splitting and lazy loading  
✅ Image optimization  
✅ CSS minification  
✅ Production build optimization  
✅ Responsive images  

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization

The website includes:
- Proper meta tags
- Semantic HTML
- Mobile-friendly design
- Fast loading times
- Clean URL structure

## Maintenance

### Regular Updates
- Check Node dependencies: `npm outdated`
- Update packages: `npm update`
- Security audit: `npm audit fix`

### Monitoring
- Use tools like Google Analytics
- Monitor performance with Lighthouse
- Test on multiple devices regularly

## Troubleshooting

**Port 3000 already in use:**
```bash
npm start -- --port 3001
```

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**White screen after deployment:**
- Check browser console for errors
- Ensure all file paths are relative
- Clear browser cache

## Contact Information

**Company:** Wood Work and Craft Ltd  
**Email:** wookworkcraft3@gmail.com  
**Phone:** +234 708 778 7838  
**WhatsApp:** [Chat with us](https://wa.me/2347087787838)

## License

This project is proprietary and belongs to Wood Work and Craft Ltd.

## Support

For website updates or issues, contact the development team.

---

**Last Updated:** August 2024  
**Version:** 1.0.0