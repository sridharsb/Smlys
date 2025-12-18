// Modern Features JavaScript
// Scroll-triggered animations, back-to-top, lightbox, carousel, etc.

// ========== SCROLL-TRIGGERED ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    fadeElements.forEach(el => observer.observe(el));
});

// ========== BACK TO TOP BUTTON ==========
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fa fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== IMAGE LIGHTBOX FOR GALLERY ==========
function initLightbox() {
    const images = document.querySelectorAll('.gallery-image, .mySlides img, .card-image img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-img" src="" alt="">
        <span class="lightbox-prev">&#10094;</span>
        <span class="lightbox-next">&#10095;</span>
    `;
    document.body.appendChild(lightbox);

    let currentImageIndex = 0;
    const imageArray = Array.from(images).map(img => img.src);

    function openLightbox(index) {
        currentImageIndex = index;
        lightbox.classList.add('active');
        lightbox.querySelector('.lightbox-img').src = imageArray[currentImageIndex];
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    images.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openLightbox(index));
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
        lightbox.querySelector('.lightbox-img').src = imageArray[currentImageIndex];
    });

    lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % imageArray.length;
        lightbox.querySelector('.lightbox-img').src = imageArray[currentImageIndex];
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') lightbox.querySelector('.lightbox-prev').click();
            if (e.key === 'ArrowRight') lightbox.querySelector('.lightbox-next').click();
        }
    });
}

// Initialize lightbox when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
} else {
    initLightbox();
}

// ========== TESTIMONIAL CAROUSEL ==========
function initTestimonialCarousel() {
    const testimonialContainer = document.querySelector('.testimonial-carousel');
    if (!testimonialContainer) return;

    const testimonials = testimonialContainer.querySelectorAll('.testimonial-item');
    if (testimonials.length === 0) return;

    let currentIndex = 0;
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    // Auto-rotate every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        showTestimonial(currentIndex);
    }, 5000);

    // Initialize
    showTestimonial(0);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialCarousel);
} else {
    initTestimonialCarousel();
}

// ========== MOBILE MENU TOGGLE ==========
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const topMenu = document.getElementById('top_menu');
    
    if (menuToggle && topMenu) {
        menuToggle.addEventListener('click', () => {
            topMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!topMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                topMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    initMobileMenu();
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== DYNAMIC COUNTERS ==========
function initDynamicCounters() {
    // Configuration - Update this when a new yathra is completed
    const YATHRA_START_COUNT = 723; // Winter Chardham is the 723rd yathra
    const ESTABLISHMENT_YEAR = 1967;
    
    // Calculate years since establishment
    const currentYear = new Date().getFullYear();
    const yearsCompleted = currentYear - ESTABLISHMENT_YEAR;
    
    // Get counter elements
    const yearsCounter = document.getElementById('years-counter');
    const yathraCounter = document.getElementById('yathra-counter');
    
    if (yearsCounter) {
        // Animate years counter
        animateCounter(yearsCounter, 0, yearsCompleted, 2000);
    }
    
    if (yathraCounter) {
        // Animate yathra counter
        // Note: Update YATHRA_START_COUNT in this file when a new yathra is completed
        animateCounter(yathraCounter, 0, YATHRA_START_COUNT, 2000);
    }
}

function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize counters when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDynamicCounters);
} else {
    initDynamicCounters();
}

