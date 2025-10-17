// Ultra Attractive Portfolio JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Create floating particles
    createParticles();
    
    // Enhanced loading screen
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loader"></div><div class="loading-text">Loading Portfolio...</div>';
    document.body.appendChild(loading);

    // Hide loading screen with enhanced animation
    window.addEventListener('load', () => {
        setTimeout(() => {
            loading.style.opacity = '0';
            loading.style.transform = 'scale(0.8)';
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 1500);
    });

    // Navigation functionality with enhanced animations
    const buttons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Add ripple effect
            createRipple(button);
            
            // Remove 'active' class from all buttons and sections
            buttons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add 'active' class to clicked button and corresponding section
            button.classList.add('active');
            const targetSection = document.getElementById(button.dataset.tab);
            targetSection.classList.add('active');
            
            // Add entrance animation to section
            targetSection.style.animation = 'sectionSlideIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
        });
    });

    // Enhanced scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Advanced typing animation with multiple effects
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const texts = [
            'Full Stack Laravel Developer',
            'PHP Developer',
            'Web Developer',
            'Software Engineer',
            'Backend Developer',
            'API Developer',
            'Problem Solver',
            'Tech Enthusiast'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 30 : 80;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500; // Pause before next text
            }

            setTimeout(typeText, typeSpeed);
        }

        // Start typing animation after a delay
        setTimeout(typeText, 2000);
    }

    // Enhanced smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Advanced scroll effects
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
            nav.style.backdropFilter = 'blur(30px)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
            nav.style.backdropFilter = 'blur(20px)';
        }

        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }

        // Hide/show navigation based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        lastScrollY = currentScrollY;
    });

    // Enhanced intersection observer with staggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animate-in');
                }, index * 100); // Staggered animation
            }
        });
    }, observerOptions);

    // Observe all cards with enhanced animations
    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(card);
    });

    // Enhanced hover effects for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
    });

    // Advanced social links with multiple effects
    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-8px) scale(1.1) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });

        link.addEventListener('click', (e) => {
            createRipple(link);
        });
    });

    // Enhanced contact items
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Advanced tag animations
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-3px) scale(1.05) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });

    // Profile image enhanced interactions
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            profileImage.style.transform = 'scale(1.1) rotate(5deg)';
            profileImage.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'scale(1) rotate(0deg)';
            profileImage.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
    }

    // Keyboard navigation enhancements
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // Arrow key navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const currentActive = document.querySelector('.nav-button.active');
            const buttons = Array.from(document.querySelectorAll('.nav-button'));
            const currentIndex = buttons.indexOf(currentActive);
            
            let newIndex;
            if (e.key === 'ArrowDown') {
                newIndex = (currentIndex + 1) % buttons.length;
            } else {
                newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
            }
            
            buttons[newIndex].click();
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });

    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('🚀 Portfolio loaded in:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }

    // Enhanced image error handling
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzY2ZjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlYzQ4OTkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+';
        });
    });

    // Add CSS for enhanced animations
    const style = document.createElement('style');
    style.textContent = `
        .keyboard-navigation .nav-button:focus,
        .keyboard-navigation .social-links a:focus,
        .keyboard-navigation .contact-item:focus {
            outline: 3px solid var(--primary);
            outline-offset: 3px;
        }
        
        .animate-in {
            animation: cardSlideIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        @keyframes cardSlideIn {
            from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Helper functions
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 9; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);
    }
}

function createRipple(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}
