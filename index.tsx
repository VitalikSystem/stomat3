
// Initialize Lucide icons
// @ts-ignore
lucide.createIcons();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.classList.add('nav-scrolled');
    } else {
        navbar?.classList.remove('nav-scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu?.classList.toggle('hidden');
}

menuToggle?.addEventListener('click', toggleMenu);

// Close menu when clicking on a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu?.classList.add('hidden');
    });
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

