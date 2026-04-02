// Slider Logic
let slideIndex = 0;
let slideInterval;

function initSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    showSlides(slideIndex);
    startSlideTimer();
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slideIndex = n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    slides[slideIndex].classList.add('active');
    if (dots.length > 0) dots[slideIndex].classList.add('active');
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(n);
    startSlideTimer();
}

function startSlideTimer() {
    slideInterval = setInterval(() => {
        showSlides(slideIndex + 1);
    }, 5000);
}

// Render dynamic content for Home Page
function renderHomePage() {
    const homeProducts = document.getElementById('home-products');
    if (homeProducts) {
        // Display 4 latest products
        const html = productsData.slice(0, 4).map(createProductCard).join('');
        homeProducts.innerHTML = html;
    }

    const homeCategories = document.getElementById('home-categories');
    if (homeCategories) {
        const html = categoriesData.map(cat => `
            <div class="category-card" onclick="window.location.href='products.html?category=${cat.id}'">
                <img src="${cat.image}" alt="${cat.name}">
                <div class="category-content">
                    <h3>${cat.name}</h3>
                    <p>${cat.desc}</p>
                </div>
            </div>
        `).join('');
        homeCategories.innerHTML = html;
    }
}

// Render Products Page
function renderProductsPage() {
    const productsGrid = document.getElementById('all-products-grid');
    if (!productsGrid) return;

    // Get URL params for filtering
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('category');
    
    let filteredProducts = [...productsData];

    // Filter by Category if URL param exists
    if (urlCategory) {
        filteredProducts = filteredProducts.filter(p => p.category === urlCategory);
        // Maybe check the radio button
        const radio = document.querySelector(`input[name="category"][value="${urlCategory}"]`);
        if (radio) radio.checked = true;
    }

    function renderList(products) {
        if(products.length === 0){
            productsGrid.innerHTML = '<p>No products found matching your criteria.</p>';
            return;
        }
        productsGrid.innerHTML = products.map(createProductCard).join('');
    }

    renderList(filteredProducts);

    // Filter Logic
    const categoryRadios = document.querySelectorAll('input[name="category"]');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const applyFilterBtn = document.getElementById('apply-filter');

    if(applyFilterBtn) {
        applyFilterBtn.addEventListener('click', () => {
            let catValue = document.querySelector('input[name="category"]:checked').value;
            let minP = parseFloat(minPriceInput.value) || 0;
            let maxP = parseFloat(maxPriceInput.value) || Infinity;

            let result = productsData.filter(p => {
                let catMatch = catValue === 'all' ? true : p.category === catValue;
                let priceMatch = p.price >= minP && p.price <= maxP;
                return catMatch && priceMatch;
            });

            renderList(result);
        });
    }
}

// Render Product View Page
function renderProductView() {
    const detailContainer = document.getElementById('product-detail-container');
    const relatedContainer = document.getElementById('related-products-grid');
    if (!detailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = productsData.find(p => p.id === productId);

    if (!product) {
        detailContainer.innerHTML = '<h2>Product not found</h2>';
        return;
    }

    const stars = Array(5).fill(0).map((_, i) => 
        `<i class="${i < Math.floor(product.rating) ? 'fas' : 'far'} fa-star"></i>`
    ).join('');

    detailContainer.innerHTML = `
        <div class="product-gallery">
            <img src="${product.image}" id="mainImg" alt="${product.title}">
        </div>
        <div class="product-meta">
            <p class="p-brand">Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <h1 class="p-title">${product.title}</h1>
            <div class="product-rating" style="margin-bottom: 20px;">${stars} <span style="color:#6B7280; margin-left:10px;">(${product.rating} ratings)</span></div>
            <div class="p-price">$${product.price.toFixed(2)}</div>
            <p class="p-desc">${product.description}</p>
            
            <div class="quantity-selector">
                <button class="qty-btn" onclick="decreaseQty()">-</button>
                <input type="number" class="qty-input" id="buy-qty" value="1" min="1">
                <button class="qty-btn" onclick="increaseQty()">+</button>
            </div>
            
            <div class="action-buttons">
                <button class="btn btn-primary btn-block" onclick="addCurrentToCart(${product.id})">
                    <i class="fas fa-shopping-cart" style="margin-right: 8px;"></i> Add to Cart
                </button>
            </div>
        </div>
    `;

    // Render Related Products
    if (relatedContainer) {
        const related = productsData.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
        if(related.length > 0) {
            relatedContainer.innerHTML = related.map(createProductCard).join('');
        } else {
            document.getElementById('related-section').style.display = 'none';
        }
    }
}

function decreaseQty() {
    const input = document.getElementById('buy-qty');
    if(input.value > 1) input.value = parseInt(input.value) - 1;
}

function increaseQty() {
    const input = document.getElementById('buy-qty');
    input.value = parseInt(input.value) + 1;
}

function addCurrentToCart(id) {
    const qty = parseInt(document.getElementById('buy-qty').value);
    addToCart(id, qty);
}

// Render Categories Page
function renderCategoriesPage() {
    const catGrid = document.getElementById('all-categories-grid');
    if(!catGrid) return;
    
    catGrid.innerHTML = categoriesData.map(cat => `
        <div class="category-card" onclick="window.location.href='products.html?category=${cat.id}'">
            <img src="${cat.image}" alt="${cat.name}">
            <div class="category-content">
                <h3>${cat.name}</h3>
                <p>${cat.desc}</p>
            </div>
        </div>
    `).join('');
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    renderHomePage();
    renderProductsPage();
    renderProductView();
    renderCategoriesPage();
});
