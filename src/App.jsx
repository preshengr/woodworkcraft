import React, { useState } from 'react';
import './App.css';

// Navigation Component
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">🪵</span>
          <h1>Wood Work & Craft</h1>
        </div>
        
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Crafted Excellence in Wood</h1>
        <p className="hero-subtitle">Premium Furniture, Kitchen Cabinets, Doors & Custom Woodwork</p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary">
            <span className="btn-text">Get Started</span>
            <span className="btn-ripple"></span>
          </button>
          <button className="btn btn-secondary">
            <span className="btn-text">View Our Work</span>
            <span className="btn-ripple"></span>
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="floating-card">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="30" width="160" height="140" fill="#8B4513" rx="5"/>
            <rect x="30" y="50" width="140" height="100" fill="#D2B48C" rx="3"/>
            <circle cx="60" cy="90" r="6" fill="#8B4513"/>
            <circle cx="140" cy="90" r="6" fill="#8B4513"/>
            <line x1="100" y1="50" x2="100" y2="150" stroke="#8B4513" strokeWidth="1"/>
            <rect x="35" y="155" width="130" height="10" fill="#654321" rx="2"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      icon: '🛋️',
      title: 'Custom Furniture',
      description: 'Bespoke furniture designs tailored to your specific needs and preferences'
    },
    {
      icon: '🚪',
      title: 'Wooden Doors',
      description: 'High-quality wooden doors with elegant designs and superior craftsmanship'
    },
    {
      icon: '🍳',
      title: 'Kitchen Cabinets',
      description: 'Modern and traditional kitchen cabinet solutions for your culinary space'
    },
    {
      icon: '🎨',
      title: 'Custom Designs',
      description: 'Personalized woodwork designs that reflect your unique style and vision'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Quality craftsmanship in every project</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Portfolio Section
function Portfolio() {
  const portfolioItems = [
    { id: 1, title: 'Living Room Set', category: 'Furniture', color: 'rgb(139, 69, 19)' },
    { id: 2, title: 'Kitchen Cabinets', category: 'Cabinets', color: 'rgb(160, 82, 45)' },
    { id: 3, title: 'Entry Door', category: 'Doors', color: 'rgb(101, 67, 33)' },
    { id: 4, title: 'Dining Table', category: 'Furniture', color: 'rgb(139, 90, 43)' },
    { id: 5, title: 'Wardrobe Cabinet', category: 'Cabinets', color: 'rgb(184, 115, 51)' },
    { id: 6, title: 'French Doors', category: 'Doors', color: 'rgb(120, 81, 45)' }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">Showcasing our finest craftsmanship</p>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div 
                className="portfolio-image"
                style={{ backgroundColor: item.color }}
              >
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp link
    const message = `Hi, I'm ${formData.name}. ${formData.message}`;
    const whatsappLink = `https://wa.me/2347087787838?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We'd love to hear from you</p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:wookworkcraft3@gmail.com">wookworkcraft3@gmail.com</a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+2347087787838">+234 708 778 7838</a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>
                <a href="https://wa.me/2347087787838" target="_blank" rel="noopener noreferrer">
                  Chat with us
                </a>
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <span className="btn-text">Send Message</span>
              <span className="btn-ripple"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Wood Work & Craft</h3>
            <p>Premium woodworking solutions for your home and business</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Custom Furniture</a></li>
              <li><a href="#services">Kitchen Cabinets</a></li>
              <li><a href="#services">Wooden Doors</a></li>
              <li><a href="#services">Custom Designs</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:wookworkcraft3@gmail.com">wookworkcraft3@gmail.com</a></p>
            <p>Phone: <a href="tel:+2347087787838">+234 708 778 7838</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Wood Work and Craft Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;