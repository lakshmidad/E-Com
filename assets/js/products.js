// Product Data mock
const productsData = [
    { id: 1, title: 'Wireless Noise Cancelling Headphones', category: 'electronics', price: 299.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', rating: 4.8, description: 'Premium noise-canceling headphones with 30 hours of battery life and immersive sound.' },
    { id: 2, title: 'Minimalist Leather Watch', category: 'accessories', price: 149.50, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', rating: 4.5, description: 'Elegant and simple leather watch perfect for everyday wear or formal occasions.' },
    { id: 3, title: 'Smart Fitness Tracker v2', category: 'electronics', price: 89.00, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80', rating: 4.2, description: 'Track your health effortlessly with advanced sensors and a 7-day battery.' },
    { id: 4, title: 'Men\'s Classic Denim Jacket', category: 'fashion', price: 75.00, image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=500&q=80', rating: 4.7, description: 'A timeless staple for your wardrobe. High quality, durable denim.' },
    { id: 5, title: 'Modern Ceramic Coffee Mug', category: 'home', price: 24.99, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80', rating: 4.6, description: 'Handcrafted ceramic mug that keeps your coffee warm longer.' },
    { id: 6, title: 'Professional DSLR Camera', category: 'electronics', price: 1200.00, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80', rating: 4.9, description: 'Capture stunning photos and 4K video with this industry-leading DSLR.' },
    { id: 7, title: 'Ergonomic Office Chair', category: 'home', price: 199.99, image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80', rating: 4.3, description: 'Support your back with an ergonomic mesh chair designed for long working hours.' },
    { id: 8, title: 'Unisex Aviator Sunglasses', category: 'accessories', price: 55.00, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80', rating: 4.4, description: 'Classic aviator design with UV400 protection.' }
];

const categoriesData = [
    { id: 'electronics', name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80', desc: 'Latest gadgets and devices.' },
    { id: 'fashion', name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80', desc: 'Trendy clothing and apparel.' },
    { id: 'home', name: 'Home & Living', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80', desc: 'Decor and furniture for your space.' },
    { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80', desc: 'Watches, glasses, and more.' }
];

// Helper to get cart items from localStorage
function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function addToCart(productId, quantity = 1) {
    const cart = getCartItems();
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
    showToast(`${product.title} added to cart!`);
}

function removeFromCart(productId) {
    let cart = getCartItems();
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
}

function updateCartQuantity(productId, quantity) {
    const cart = getCartItems();
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity = Math.max(1, quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartIcon();
}

function updateCartIcon() {
    const cart = getCartItems();
    const counts = document.querySelectorAll('.cart-count');
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    counts.forEach(count => count.textContent = totalQty);
}

function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

function createProductCard(product) {
    const stars = Array(5).fill(0).map((_, i) => 
        `<i class="${i < Math.floor(product.rating) ? 'fas' : 'far'} fa-star"></i>`
    ).join('');

    return `
        <div class="product-card">
            <div class="product-image">
                <a href="product-view.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.title}">
                </a>
                <div class="product-actions">
                    <button class="action-btn" title="Add to Cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <a href="product-view.html?id=${product.id}" class="action-btn" title="View details">
                        <i class="fas fa-eye"></i>
                    </a>
                </div>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <a href="product-view.html?id=${product.id}"><h3 class="product-title" title="${product.title}">${product.title}</h3></a>
                <div class="product-rating">${stars} <span>(${product.rating})</span></div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
        </div>
    `;
}

// Ensure updateCartIcon runs universally
document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon();
});
