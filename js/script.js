document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }

    // 2. Header Scroll (Floating Effect)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Hero Entrance Animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 300); // Slight delay
    }

    // 4. Soft Parallax for Video
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const videoBg = document.querySelector('.video-bg');
        if (videoBg) {
            // Very subtle movement
            videoBg.style.transform = `translate(-50%, -${50 + (scrolled * 0.01)}%) scale(${1 + (scrolled * 0.0002)})`;
        }
    });

    // 5. Intersection Observer for Fade Elements
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Don't unobserve, let them stay visible (or optional: fade out)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up, .card, .story-sentence').forEach(el => {
        observer.observe(el);
    });

    // 6. Optional: Dreamy Cursor Trail (Simple Dot)
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);

    // Add styles dynamically for the cursor
    const style = document.createElement('style');
    style.innerHTML = `
        .cursor-dot {
            width: 15px;
            height: 15px;
            background: rgba(162, 210, 255, 0.5);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s;
            box-shadow: 0 0 10px rgba(162, 210, 255, 0.5);
            mix-blend-mode: screen;
        }
    `;
    document.head.appendChild(style);

    document.addEventListener('mousemove', (e) => {
        // Simple follow
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';

        // Trail effect logic could go here (complex), keeping it simple for now
    });

    // Expand cursor on hoverable elements
    document.querySelectorAll('a, button, .card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.width = '40px';
            cursorDot.style.height = '40px';
            cursorDot.style.background = 'rgba(255, 215, 0, 0.2)'; // Gold tint
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.style.width = '15px';
            cursorDot.style.height = '15px';
            cursorDot.style.background = 'rgba(162, 210, 255, 0.5)';
        });
    });
});
