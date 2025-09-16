// Phúc Long Website JavaScript
// File: script.js

// Global variables
let cart = [];
let currentSlideIndex = 0;
let products = [];

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    initializeSlider();
    loadCart();
    updateCartUI();
});

// Product data
function initializeProducts() {
    products = [
        {
            id: 1,
            name: 'Cà Phê Sữa Đá',
            category: 'coffee',
            price: 39000,
            description: 'Cà phê espresso đậm đà kết hợp với sữa tươi',
            image: 'coffee1.jpg',
            badge: 'Best Seller'
        },
        {
            id: 2,
            name: 'Trà Oolong Nhài',
            category: 'tea',
            price: 45000,
            description: 'Trà Oolong thượng hạng với hương nhài tự nhiên',
            image: 'tea1.jpg',
            badge: 'New'
        },
        {
            id: 3,
            name: 'Americano',
            category: 'coffee',
            price: 35000,
            description: 'Cà phê đen nguyên chất theo phong cách Mỹ',
            image: 'coffee2.jpg'
        },
        {
            id: 4,
            name: 'Trà Đào Cam Sả',
            category: 'tea',
            price: 49000,
            description: 'Trà đào thơm ngon với cam và sả tươi',
            image: 'tea2.jpg',
            badge: 'Hot'
        },
        {
            id: 5,
            name: 'Cappuccino',
            category: 'coffee',
            price: 45000,
            description: 'Espresso với lớp foam sữa mịn màng',
            image: 'coffee3.jpg'
        },
        {
            id: 6,
            name: 'Bánh Croissant',
            category: 'bakery',
            price: 35000,
            description: 'Bánh sừng bò Pháp giòn xốp thơm bơ',
            image: 'bakery1.jpg'
        },
        {
            id: 7,
            name: 'Latte',
            category: 'coffee',
            price: 49000,
            description: 'Cà phê sữa với nghệ thuật vẽ hoa văn',
            image: 'coffee4.jpg'
        },
        {
            id: 8,
            name: 'Trà Xanh Latte',
            category: 'tea',
            price: 52000,
            description: 'Matcha latte đậm đà hương vị Nhật Bản',
            image: 'tea3.jpg',
            badge: 'Premium'
        },
        {
            id: 9,
            name: 'Tiramisu',
            category: 'bakery',
            price: 55000,
            description: 'Bánh tiramisu Ý với cà phê và mascarpone',
            image: 'bakery2.jpg'
        }
    ];
    
    displayProducts('all');
}

// Display products
function displayProducts(category) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    let filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="addToCart(${product.id})">
            <div class="product-image">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 250'%3E%3Crect width='300' height='250' fill='%23${product.category === 'coffee' ? 'd4a574' : product.category === 'tea' ? '0a4f3c' : 'f8f8f8'}'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3E${product.name}%3C/text%3E%3C/svg%3E" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products by category
function filterProducts(category) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Display filtered products
    displayProducts(category);
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showToast(`Đã thêm ${product.name} vào giỏ hàng`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    renderCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
        renderCart();
    }
}

function saveCart() {
    localStorage.setItem('phuclong_cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('phuclong_cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (!modal) {
        createCartModal();
    } else {
        modal.classList.toggle('active');
        if (modal.classList.contains('active')) {
            renderCart();
        }
    }
}

function createCartModal() {
    const modal = document.createElement('div');
    modal.className = 'cart-modal';
    modal.id = 'cartModal';
    modal.innerHTML = `
        <div class="cart-content">
            <div class="cart-header">
                <h2>Giỏ hàng của bạn</h2>
                <button class="close-cart" onclick="toggleCart()">✕</button>
            </div>
            <div class="cart-items" id="cartItems"></div>
            <div class="cart-total">
                <span>Tổng cộng:</span>
                <span id="cartTotal">0đ</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Thanh toán</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.classList.add('active');
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 40px;">Giỏ hàng trống</p>';
        cartTotal.textContent = '0đ';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23${item.category === 'coffee' ? 'd4a574' : '0a4f3c'}'/%3E%3C/svg%3E" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: none; border: none; cursor: pointer; font-size: 20px;">🗑️</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

function checkout() {
    if (cart.length === 0) {
        showToast('Giỏ hàng trống!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (confirm(`Xác nhận thanh toán ${formatPrice(total)}?`)) {
        cart = [];
        saveCart();
        updateCartUI();
        toggleCart();
        showToast('Đặt hàng thành công! Chúng tôi sẽ liên hệ bạn sớm.');
    }
}

// Slider functions
function initializeSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    setInterval(() => {
        nextSlide();
    }, 5000);
}

function currentSlide(n) {
    showSlide(n - 1);
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    currentSlideIndex = index;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[index]) slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
}

// Mobile menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Newsletter
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showToast(`Đăng ký thành công với email: ${email}`);
        event.target.reset();
    }
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
}

function performSearch() {
    const searchInput = document.querySelector('.search-box input');
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        displayProducts('all');
        return;
    }
    
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    
    const grid = document.getElementById('productsGrid');
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 40px;">Không tìm thấy sản phẩm nào</p>';
    } else {
        grid.innerHTML = filtered.map(product => `
            <div class="product-card" onclick="addToCart(${product.id})">
                <div class="product-image">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 250'%3E%3Crect width='300' height='250' fill='%23${product.category === 'coffee' ? 'd4a574' : '0a4f3c'}'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3E${product.name}%3C/text%3E%3C/svg%3E" alt="${product.name}">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        <span class="price">${formatPrice(product.price)}</span>
                        <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                            Thêm vào giỏ
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Initialize search when DOM loads
document.addEventListener('DOMContentLoaded', setupSearch);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Export functions for use in HTML
window.filterProducts = filterProducts;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleCart = toggleCart;
window.checkout = checkout;
window.currentSlide = currentSlide;
window.toggleMobileMenu = toggleMobileMenu;
window.subscribeNewsletter = subscribeNewsletter;
