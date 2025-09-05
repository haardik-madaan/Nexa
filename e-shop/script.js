document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Optional: save preference to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });

    // Optional: check for saved preference on page load
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from('.hero-title', { duration: 1, y: -50, opacity: 0, ease: 'power4.out' });
    gsap.from('.hero-subtitle', { duration: 1, y: -50, opacity: 0, delay: 0.5, ease: 'power4.out' });
    gsap.from('.hero-button', { duration: 1, y: 50, opacity: 0, delay: 1, ease: 'power4.out' });

    // Section Title Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        });
    });

    // Product Card Animation
    gsap.utils.toArray('.product-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            delay: i * 0.2,
            ease: 'power4.out'
        });
    });

    // Category Card Animation
    gsap.utils.toArray('.category-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            delay: i * 0.2,
            ease: 'power4.out'
        });
    });

    // Testimonials Slider
    const swiper = new Swiper('.testimonial-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        }
    });
});
