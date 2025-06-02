// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded
            navToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle menu visibility
            if (isExpanded) {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'block';
            }
        });
        
        // Close menu when clicking on a link (mobile)
        const navLinks = navMenu.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.style.display = 'none';
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when window is resized to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                navMenu.style.display = '';
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
