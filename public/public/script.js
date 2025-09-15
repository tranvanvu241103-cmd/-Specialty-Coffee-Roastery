// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get references to key DOM elements
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    const heroSection = document.getElementById('hero');
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

    // Toggle the mobile menu on button click
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent the default anchor behavior
            e.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close the mobile menu after clicking a link
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Handle contact form submission
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate form submission
            // In a real application, you would send this data to a server
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                formStatus.innerHTML = '<p class="text-red-600 font-semibold">Please fill in all fields.</p>';
                return;
            }

            console.log('Form data:', { name, email, message });

            // Display success message
            formStatus.innerHTML = '<p class="text-green-600 font-semibold">Thank you for your message! We will get back to you shortly.</p>';
            contactForm.reset();

            // Clear status message after a few seconds
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
        });
    }

    // Animate hero section content on page load
    if (heroSection) {
        setTimeout(() => {
            heroSection.style.opacity = 1;
        }, 300); // 300ms delay to ensure smooth transition
    }
});
