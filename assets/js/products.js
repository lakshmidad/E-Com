// Product Data mock
const productsData = [
    { id: 1, title: 'Wireless Noise Cancelling Headphones', category: 'electronics', price: 299.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', rating: 4.8, description: 'Premium over-ear noise-canceling headphones featuring memory foam ear cups, Bluetooth 5.0 connectivity, and 30 hours of continuous battery life.' },
    { id: 2, title: 'Minimalist Leather Watch', category: 'accessories', price: 149.50, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', rating: 4.5, description: 'Elegant analog timepiece with a genuine calfskin leather belt and a scratch-resistant sapphire crystal face. Water resistant up to 50 meters.' },
    { id: 3, title: 'Smart Fitness Tracker v2', category: 'electronics', price: 89.00, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80', rating: 4.2, description: 'Track your health effortlessly with advanced optical heart rate sensors, sleep monitoring, and a flexible, skin-friendly silicone band.' },
    { id: 4, title: 'Men\'s Classic Denim Jacket', category: 'fashion', price: 75.00, image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=500&q=80', rating: 4.7, description: 'A timeless wardrobe staple built from 100% heavyweight cotton denim. Features a classic button-front closure and reinforced chest pockets.' },
    { id: 5, title: 'Modern Ceramic Coffee Mug', category: 'home', price: 24.99, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80', rating: 4.6, description: 'Handcrafted matte ceramic 12oz mug that provides superior heat retention. Microwave and dishwasher safe for daily convenience.' },
    { id: 6, title: 'Professional DSLR Camera', category: 'electronics', price: 1200.00, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80', rating: 4.9, description: 'Capture stunning 24MP photos and 4K video. Features a robust magnesium-alloy body, fast autofocus, and an included 18-55mm standard lens.' },
    { id: 7, title: 'Ergonomic Office Chair', category: 'home', price: 199.99, image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80', rating: 4.3, description: 'Support your back with high-density foam seating and a breathable mesh backrest. Fully adjustable armrests and height mechanism.' },
    { id: 8, title: 'Unisex Aviator Sunglasses', category: 'accessories', price: 55.00, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80', rating: 4.4, description: 'Classic lightweight wire frame aviator design featuring polarized lenses with full UV400 protection against harmful sun rays.' },
    { id: 9, title: 'Portable Bluetooth Speaker', category: 'electronics', price: 65.00, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80', rating: 4.7, description: 'Compact and rugged waterproof speaker delivering surprising 360-degree bass. Covered in a durable mesh fabric wrapper ideal for travel.' },
    { id: 10, title: 'Classic Canvas Sneakers', category: 'fashion', price: 55.00, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80', rating: 4.6, description: 'Iconic low-top sneakers constructed with a breathable cotton canvas upper, metal brass eyelets, and a durable thick rubber sole for grip.' },
    { id: 11, title: 'Wool Blend Winter Coat', category: 'fashion', price: 145.00, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80', rating: 4.8, description: 'Stay warm throughout the coldest months. Tailored jacket featuring a premium 60% sheep wool outer layer and smooth satin inner lining.' },
    { id: 12, title: 'Handwoven Cotton Throw Blanket', category: 'home', price: 45.00, image: 'https://thoppia.com/wp-content/uploads/2023/07/Grey-yellow_straw_3.jpg', rating: 4.9, description: 'Cozy and decorative 50x60 inch woven throw blanket. Made from purely sustainably sourced organic cotton with decorative fringe edges.' },
    { id: 13, title: 'Geometric Ceramic Planter', category: 'home', price: 32.00, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80', rating: 4.5, description: 'A beautifully sculpted minimalist indoor planter with a built-in drainage hole and matching catch plate. Excellent for succulents or small ferns.' },
    { id: 14, title: 'Sterling Silver Pendant', category: 'accessories', price: 85.00, image: 'https://lh5.googleusercontent.com/proxy/4L3aFiU-TX8JBIPpT0CglOtwdm0xf6T50cpMBpgkV67TPsDItEp8f4G1gk3UZko2r1wR20Hb7j-VhNQm1QSr1YB6cyIPMJ4t6KpoGGWh9SW7hYylGQ', rating: 4.8, description: 'Hypoallergenic 925 sterling silver chain featuring an intricately cut cubic zirconia pendant. Comes in a soft velvet protective presentation box.' },
    { id: 15, title: 'Canvas Weekend Duffel Bag', category: 'accessories', price: 95.00, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', rating: 4.6, description: 'Spacious 45L travel duffel crafted from heavy-duty waxed canvas with authentic full-grain leather carrying handles and brass hardware.' },
    { id: 16, title: 'Smart LED Desk Lamp', category: 'home', price: 49.99, image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&q=80', rating: 4.5, description: 'Dimmable LED desk lamp with adjustable color temperature, wireless charging base, and flexible gooseneck design.' },
    { id: 17, title: 'Wireless Mechanical Keyboard', category: 'electronics', price: 129.00, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80', rating: 4.8, description: 'Compact 75% layout mechanical keyboard with hot-swappable switches, RGB backlighting, and dual-mode wireless connectivity.' },
    { id: 18, title: 'Premium Running Shoes', category: 'fashion', price: 135.00, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', rating: 4.7, description: 'Lightweight breathable running shoes featuring responsive cushioning and durable rubber outsoles for optimum performance.' },
    { id: 19, title: 'Stainless Steel Water Bottle', category: 'accessories', price: 29.50, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80', rating: 4.9, description: 'Double-wall vacuum insulated water bottle keeping beverages cold for 24 hours or hot for 12 hours. BPA-free design.' },
    { id: 20, title: 'Noise Isolating Earbuds', category: 'electronics', price: 59.99, image: 'https://images.unsplash.com/photo-1572569431925-8f2e29302636?w=500&q=80', rating: 4.4, description: 'In-ear true wireless earbuds with immersive sound, active noise isolation, and up to 24 hours of total playback time.' }
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

// ----- WISHLIST LOGIC -----
function getWishlistItems() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function toggleWishlist(productId) {
    let wishlist = getWishlistItems();
    const index = wishlist.findIndex(item => item.id === productId);
    const product = productsData.find(p => p.id === productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`${product.title} removed from wishlist`);
    } else if (product) {
        wishlist.push(product);
        showToast(`${product.title} added to wishlist!`);
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistIcon();
    
    // Re-render grids if they exist to update the heart icon colors immediately
    if (typeof renderHomePage === "function") renderHomePage();
    if (typeof renderProductsPage === "function") renderProductsPage();
    if (typeof performSearch === "function") {
      const searchInput = document.getElementById('searchInput');
      if(searchInput && searchInput.value !== undefined) performSearch();
    }
    if (typeof renderWishlistPage === "function") renderWishlistPage();
}

function clearWishlist() {
    localStorage.removeItem('wishlist');
    updateWishlistIcon();
    showToast('Wishlist cleared!');
    if (typeof renderWishlistPage === "function") renderWishlistPage();
}

function addAllToCart() {
    const wishlist = getWishlistItems();
    if (wishlist.length === 0) return;
    
    let cart = getCartItems();
    wishlist.forEach(item => {
        let existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
    showToast('All items added to cart!');
}

function updateWishlistIcon() {
    const wishlist = getWishlistItems();
    const counts = document.querySelectorAll('.wishlist-count');
    counts.forEach(count => count.textContent = wishlist.length);
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

    const wishlist = getWishlistItems();
    const isWished = wishlist.some(item => item.id === product.id);
    const heartState = isWished ? 'wishlist-active fas' : 'far';

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
                    <button class="action-btn ${isWished ? 'wishlist-active' : ''}" title="Wishlist" onclick="toggleWishlist(${product.id})">
                        <i class="${heartState} fa-heart"></i>
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

// Ensure icons run universally
document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon();
    updateWishlistIcon();
});
