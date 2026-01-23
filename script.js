
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // --------------------------------------------------------
    // Mobile Menu Logic
    // --------------------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMenu() {
        mobileMenu.classList.remove('closed');
        mobileMenu.classList.add('open');
        overlay.classList.remove('hidden');
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('closed');
        overlay.classList.add('hidden');
    }

    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });


    // --------------------------------------------------------
    // Hero Carousel Logic
    // --------------------------------------------------------
    const slides = document.querySelectorAll('.carousel-item');
    const nextBtn = document.getElementById('next-slide');
    const prevBtn = document.getElementById('prev-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    const slideIntervalTime = 5000;
    let slideInterval;

    function showSlide(index) {
        // Update Slides
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');

        // Update Dots
        dots.forEach(dot => {
            dot.classList.remove('bg-white', 'scale-125');
            dot.classList.add('bg-white/50');
        });
        if (dots[index]) {
            dots[index].classList.remove('bg-white/50');
            dots[index].classList.add('bg-white', 'scale-125');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideTimer() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideIntervalTime);
    }

    if (slides.length > 0) {
        // Init first slide interactions
        showSlide(currentSlide);
        startSlideTimer();

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                startSlideTimer(); // Reset timer
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                startSlideTimer(); // Reset timer
            });
        }

        // Dot Interactions
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
                startSlideTimer();
            });
        });
    }


    // --------------------------------------------------------
    // Scroll Animation Logic (Intersection Observer)
    // --------------------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once visible to run only once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // --------------------------------------------------------
    // Contact Form Logic
    // --------------------------------------------------------
    // Native form submission to FormSubmit is handled by HTML action attribute.
    // No JS interception needed.
});
