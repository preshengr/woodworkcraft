/* ============================================
   WOODWORK & CRAFT LTD - JAVASCRIPT
   ============================================ */

// ============================================
// GALLERY DATA
// ============================================

const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=500&fit=crop",
        title: "Modern Living Room Furniture"
    },
    {
        url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=500&fit=crop",
        title: "Custom Kitchen Cabinets"
    },
    {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=500&fit=crop",
        title: "Elegant Dining Set"
    },
    {
        url: "https://images.unsplash.com/photo-1616484514937-a4e0a85eb1c7?w=600&h=500&fit=crop",
        title: "Library Cabinet Design"
    },
    {
        url: "https://images.unsplash.com/photo-1571232406681-5854d440fbb2?w=600&h=500&fit=crop",
        title: "Handcrafted Wooden Door"
    },
    {
        url: "https://images.unsplash.com/photo-1586324398187-5a83f9ef6a93?w=600&h=500&fit=crop",
        title: "Premium Wine Bar Cabinet"
    },
    {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=500&fit=crop",
        title: "Luxury Bedroom Set"
    },
    {
        url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=500&fit=crop",
        title: "Custom Shelving Unit"
    },
    {
        url: "https://images.unsplash.com/photo-1516627145497-ae3ddd112e38?w=600&h=500&fit=crop",
        title: "Interior Design Showcase"
    }
];

let currentImageIndex = 0;

// ============================================
// GALLERY INITIALIZATION
// ============================================

/**
 * Initialize the gallery by creating cards from image data
 */
function initializeGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    // Clear existing content
    galleryGrid.innerHTML = '';

    // Create gallery cards
    galleryImages.forEach((image, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${image.url}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">Click to enlarge</div>
            <div class="gallery-info">
                <h3>${image.title}</h3>
            </div>
        `;
        
        // Add click listener to open modal
        card.addEventListener('click', () => openModal(index));
        
        // Add error handling for images
        card.querySelector('img').addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/600x500?text=Image+Not+Available';
        });
        
        galleryGrid.appendChild(card);
    });
}

// ============================================
// MODAL (LIGHTBOX) FUNCTIONS
// ============================================

/**
 * Open modal and display image at specified index
 * @param {number} index - Index of image in galleryImages array
 */
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    // Set image source
    modalImage.src = galleryImages[index].url;
    
    // Handle image loading error
    modalImage.addEventListener('error', function() {
        this.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
    });
    
    // Show modal with animation
    modal.classList.add('active');
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Log for debugging
    console.log(`Opened modal with image: ${galleryImages[index].title}`);
}

/**
 * Close the modal
 */
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
    
    console.log('Closed modal');
}

/**
 * Navigate to next image in modal
 */
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = galleryImages[currentImageIndex].url;
    
    console.log(`Next image: ${galleryImages[currentImageIndex].title}`);
}

/**
 * Navigate to previous image in modal
 */
function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = galleryImages[currentImageIndex].url;
    
    console.log(`Previous image: ${galleryImages[currentImageIndex].title}`);
}

// ============================================
// PAGE NAVIGATION
// ============================================

/**
 * Navigate to specified page
 * @param {string} pageId - ID of page to navigate to
 */
function navigate(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });

    // Scroll to top of page
    window.scrollTo(0, 0);
    
    console.log(`Navigated to page: ${pageId}`);
}

/**
 * Smooth scroll to contact section
 */
function scrollToContact() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Setup navigation link event listeners
 */
function setupNavigationListeners() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            navigate(pageId);
        });
    });
}

/**
 * Setup modal event listeners
 */
function setupModalListeners() {
    const modal = document.getElementById('imageModal');
    
    // Close modal when clicking outside of image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('active')) {
            if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                previousImage();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
    });
}

/**
 * Setup smooth scroll for anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/**
 * Add scroll effects
 */
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Woodwork & Craft website...');
    
    // Initialize gallery
    initializeGallery();
    
    // Setup event listeners
    setupNavigationListeners();
    setupModalListeners();
    setupSmoothScroll();
    setupScrollEffects();
    
    console.log('Website initialization complete!');
});

/**
 * Alternative initialization if DOM is already loaded
 */
window.addEventListener('load', () => {
    // Re-initialize gallery in case images weren't loaded
    if (document.getElementById('gallery-grid').children.length === 0) {
        initializeGallery();
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Add animation to elements on scroll
 */
function addScrollAnimation() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Handle window resize events
 */
const handleResize = debounce(() => {
    console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);

// ============================================
// ANALYTICS & LOGGING
// ============================================

/**
 * Log page views
 */
function logPageView(pageName) {
    console.log(`Page view: ${pageName} at ${new Date().toLocaleTimeString()}`);
}

/**
 * Track button clicks
 */
function trackButtonClick(buttonName) {
    console.log(`Button clicked: ${buttonName}`);
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

/**
 * Lazy load images
 */
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// EXPORT FUNCTIONS FOR TESTING
// ============================================

// Make functions globally available if needed
window.woodworkApp = {
    navigate,
    openModal,
    closeModal,
    nextImage,
    previousImage,
    scrollToContact,
    initializeGallery,
    galleryImages,
    getCurrentImageIndex: () => currentImageIndex
};
