let cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartDiv = document.getElementById('cart');
const successMessage = document.getElementById('success-message');

function addToCart() {
    const product = {
        name: 'Zapatillas Dime Stan Smith',
        price: 429.00
    };
    cart.push(product);
    updateCart();
}
function updateCart() {
    cartItems.innerHTML = ''; // Limpiar carrito
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - s/${item.price}`;
        cartItems.appendChild(li);
    });
    cartCount.textContent = cart.length;
}
function emptyCart() {
    cart = [];
    updateCart();
}
function toggleCart() {
    if (cartDiv.style.display === 'none') {
        cartDiv.style.display = 'block';
    } else {
        cartDiv.style.display = 'none';
    }
}
function checkout() {
    if (cart.length > 0) {
        successMessage.style.display = 'block';
        emptyCart();
    } else {
        alert('El carrito está vacío.');
    }
}
function changeMainImage(imageSrc) {
    const mainImg = document.getElementById('main-img');
    mainImg.src = imageSrc;
}
function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = document.getElementById('main-img').src;
}
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
