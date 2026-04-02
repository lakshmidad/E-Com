// Inject Navigation and Footer to keep common elements unified
document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <a href="index.html"><i class="fas fa-shopping-bag"></i> LuxeBuy</a>
            </div>
            <div class="menu-toggle" id="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-links" id="nav-links">
                <li><a href="index.html" class="nav-home">Home</a></li>
                <li><a href="products.html" class="nav-products">Products</a></li>
                <li><a href="categories.html" class="nav-categories">Category</a></li>
                <li><a href="about.html" class="nav-about">About Us</a></li>
                <li><a href="contact.html" class="nav-contact">Contact Us</a></li>
            </ul>
            <div class="nav-icons">
                <a href="search.html"><i class="fas fa-search"></i></a>
                <a href="cart.html">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-badge cart-count">0</span>
                </a>
            </div>
        </div>
    </nav>
    `;

    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>LuxeBuy</h3>
                    <p>Your one-stop destination for the best premium products online. Quality guaranteed.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="products.html">All Products</a></li>
                        <li><a href="categories.html">Categories</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Customer Service</h3>
                    <ul class="footer-links">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Returns & Refunds</a></li>
                        <li><a href="#">Track Order</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Connect With Us</h3>
                    <ul class="footer-links">
                        <li><a href="#"><i class="fab fa-facebook mr-2"></i> Facebook</a></li>
                        <li><a href="#"><i class="fab fa-twitter mr-2"></i> Twitter</a></li>
                        <li><a href="#"><i class="fab fa-instagram mr-2"></i> Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 LuxeBuy E-Commerce. All rights reserved. Developed for Internship Project.</p>
            </div>
        </div>
    </footer>
    `;

    const scrollTopHTML = `
    <button class="scroll-top" id="scrollToTop">
        <i class="fas fa-arrow-up"></i>
    </button>
    `;

    // Inject Navbar
    const navContainer = document.getElementById("navbar-container");
    if (navContainer) {
        navContainer.innerHTML = navbarHTML;
        
        // Highlight active link based on current path
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const activeLink = document.querySelector(`.nav-links a[href="${currentPath}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        } else if (currentPath.includes('product-view')) {
            document.querySelector('.nav-products').classList.add('active');
        } else if (currentPath.includes('checkout') || currentPath.includes('cart')) {
            // no nav link active needed or can highlight something else
        }

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Inject Footer
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }

    // Inject Scroll To Top
    document.body.insertAdjacentHTML('beforeend', scrollTopHTML);
    const scrollTopBtn = document.getElementById("scrollToTop");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
