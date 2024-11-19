// Data
const products = {
    blancos: [
        { id: 1, name: "Sábanas Dos Plaza y Media", price: 15000, image: "img/sabanas-dos-plaza-y-media.jpg", description: "Sábanas de alta calidad para cama dos plaza y media." },
        { id: 2, name: "Sábanas Plaza y Media", price: 12000, image: "img/sabanas-plaza-y-media.jpg", description: "Sábanas disponibles en lisa o estampada para cama plaza y media." },
        { id: 3, name: "Sábanas Ajustables Dos Plaza y Media", price: 13000, image: "img/sabanas-ajustables-dos-plaza-y-media.jpg", description: "Sábanas ajustables para cama dos plaza y media." },
        { id: 4, name: "Sábanas Ajustables Plaza y Media", price: 11000, image: "img/sabanas-ajustables-plaza-y-media.jpg", description: "Sábanas ajustables para cama plaza y media." },
        { id: 5, name: "Sábanas Ajustables Queen", price: 16000, image: "img/sabanas-ajustables-queen.jpg", description: "Sábanas ajustables para cama Queen size." },
        { id: 6, name: "Sábanas Ajustables King", price: 18000, image: "img/sabanas-ajustables-king.jpg", description: "Sábanas ajustables para cama King size." },
        { id: 7, name: "Almohadas", price: 5000, image: "img/almohadas.jpg", description: "Almohadas cómodas y duraderas." },
        { id: 8, name: "Cubre Colchones Multiflex", price: 8000, image: "img/cubre-colchones-multiflex.jpg", description: "Cubre colchones Multiflex de alta calidad." },
        { id: 9, name: "Cubre Cama de Verano", price: 9000, image: "img/cubre-cama-verano.jpg", description: "Cubre cama ligero ideal para el verano." },
        { id: 10, name: "Acolchados de Invierno", price: 14000, image: "img/acolchados-invierno.jpg", description: "Acolchados cálidos para el invierno." },
        { id: 11, name: "Juego de Toallones Domiciliarios", price: 7000, image: "img/toallones-domiciliarios.jpg", description: "Juego de toallones para uso domiciliario." },
        { id: 12, name: "Juego de Toallones Hoteleros", price: 9000, image: "img/toallones-hoteleros.jpg", description: "Juego de toallones de calidad hotelera." },
        { id: 13, name: "Toallas de Mano 50x86 cm", price: 3000, image: "img/toallas-mano.jpg", description: "Toallas de mano de 50x86 cm." },
        { id: 14, name: "Mantas Playeras", price: 6000, image: "img/mantas-playeras.jpg", description: "Mantas ideales para la playa." },
        { id: 15, name: "Alfombras", price: 8000, image: "img/alfombras.jpg", description: "Alfombras de diversos diseños y tamaños." },
        { id: 16, name: "Manteles", price: 5000, image: "img/manteles.jpg", description: "Manteles para diferentes ocasiones." },
        { id: 17, name: "Repasadores", price: 2000, image: "img/repasadores.jpg", description: "Repasadores absorbentes y duraderos." },
    ],
    indumentariaYCalzado: [
        { id: 18, name: "Camperas Cargo", price: 25000, image: "img/camperas-cargo.jpg", description: "Camperas cargo resistentes y funcionales." },
        { id: 19, name: "Bermudas Cargo", price: 15000, image: "img/bermudas-cargo.jpg", description: "Bermudas cargo cómodas y versátiles." },
        { id: 20, name: "Pantalones de Gabardina", price: 18000, image: "img/pantalones-gabardina.jpg", description: "Pantalones de gabardina de alta calidad." },
        { id: 21, name: "Remeras", price: 8000, image: "img/remeras.jpg", description: "Remeras de diversos estilos y colores." },
        { id: 22, name: "Shorts", price: 12000, image: "img/shorts.jpg", description: "Shorts cómodos para el verano." },
        { id: 23, name: "Alpargatas", price: 6000, image: "img/alpargatas.jpg", description: "Alpargatas tradicionales y cómodas." },
        { id: 24, name: "Ojotas", price: 4000, image: "img/ojotas.jpg", description: "Ojotas para la playa o el uso diario." },
        { id: 25, name: "Zapatillas", price: 20000, image: "img/zapatillas.jpg", description: "Zapatillas deportivas y casuales." },
        { id: 26, name: "Gomones", price: 30000, image: "img/gomones.jpg", description: "Gomones inflables para la playa o la piscina." },
    ],
    ferreteria: [
        { id: 27, name: "Baldes de Albañil", price: 3000, image: "img/baldes-albanil.jpg", description: "Baldes resistentes para albañilería." },
        { id: 28, name: "Guantes Moteados", price: 1000, image: "img/guantes-moteados.jpg", description: "Guantes moteados para trabajo general." },
        { id: 29, name: "Guantes de Baqueta", price: 2000, image: "img/guantes-baqueta.jpg", description: "Guantes de baqueta para trabajo pesado." },
        { id: 30, name: "Guantes Baqueta Especial", price: 2500, image: "img/guantes-baqueta-especial.jpg", description: "Guantes de baqueta de calidad superior." },
        { id: 31, name: "Guante Baqueta Naranja", price: 2200, image: "img/guante-baqueta-naranja.jpg", description: "Guantes de baqueta color naranja." },
        { id: 32, name: "Guantes Antideslizantes Naranja", price: 1800, image: "img/guantes-antideslizantes-naranja.jpg", description: "Guantes antideslizantes color naranja." },
        { id: 33, name: "Guantes Antideslizante Gris", price: 1800, image: "img/guantes-antideslizantes-gris.jpg", description: "Guantes antideslizantes color gris." },
        { id: 34, name: "Guantes Soldador", price: 3000, image: "img/guantes-soldador.jpg", description: "Guantes especiales para soldadura." },
        { id: 35, name: "Pala Ancha", price: 5000, image: "img/pala-ancha.jpg", description: "Pala ancha para jardinería y construcción." },
        { id: 36, name: "Pala de Punta", price: 5000, image: "img/pala-punta.jpg", description: "Pala de punta para excavación." },
        { id: 37, name: "Filtro de Goma Espuma", price: 500, image: "img/filtro-goma-espuma.jpg", description: "Filtro de goma espuma para diversos usos." },
        { id: 38, name: "Tarugos N6", price: 100, image: "img/tarugos-n6.jpg", description: "Tarugos N6 para fijaciones." },
        { id: 39, name: "Tarugos N8", price: 120, image: "img/tarugos-n8.jpg", description: "Tarugos N8 para fijaciones." },
        { id: 40, name: "Tarugos N10", price: 150, image: "img/tarugos-n10.jpg", description: "Tarugos N10 para fijaciones." },
        { id: 41, name: "Pantalón Cargo", price: 18000, image: "img/pantalon-cargo.jpg", description: "Pantalón cargo resistente para trabajo." },
        { id: 42, name: "Borcegos de Seguridad", price: 25000, image: "img/borcegos-seguridad.jpg", description: "Borcegos de seguridad para trabajo pesado." },
        { id: 43, name: "Zapatillas de Seguridad", price: 22000, image: "img/zapatillas-seguridad.jpg", description: "Zapatillas de seguridad cómodas y resistentes." },
    ],
};

const bannerMessages = [
    "¡Nueva colección de blancos disponible!",
    "Envíos a todo Villa del Dique y alrededores",
    "¡Ofertas especiales en ferretería!"
];

const heroImages = [
    "img/hero-blancos.jpg",
    "img/hero-ferreteria.jpg",
    "img/hero-indumentaria.jpg"
];

// State
let cart = [];
let currentBanner = 0;
let currentHeroImage = 0;
let shippingCost = 0;
let shippingOptions = {};

// DOM Elements
const bannerMessageEl = document.getElementById('bannerMessage');
const cartItemCountEl = document.getElementById('cartItemCount');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const heroEl = document.querySelector('.hero-section');
const productContainers = {
    blancos: document.getElementById('blancosContainer'),
    indumentariaYCalzado: document.getElementById('indumentariaCalzadoContainer'),
    ferreteria: document.getElementById('ferreteriaContainer'),
};

// Functions
function updateBanner() {
    bannerMessageEl.textContent = bannerMessages[currentBanner];
    currentBanner = (currentBanner + 1) % bannerMessages.length;
}

function updateHero() {
    const img = document.createElement('img');
    img.src = heroImages[currentHeroImage];
    img.alt = "Hero image";
    img.className = "w-full h-full object-cover";
    
    heroEl.innerHTML = '';
    heroEl.appendChild(img);
    
    currentHeroImage = (currentHeroImage + 1) % heroImages.length;
}

function renderProducts() {
    for (const [category, productList] of Object.entries(products)) {
        console.log(`Rendering products for category: ${category}`);
        console.log(`Number of products: ${productList.length}`);
        if (productContainers[category]) {
            productContainers[category].innerHTML = productList.map(product => `
                <div class="product-card flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="p-4">
                        <div class="relative mb-4 aspect-square">
                            <img src="${product.image}" alt="${product.name}" class="object-contain w-full h-full">
                        </div>
                        <h3 class="text-sm font-medium line-clamp-2">${product.name}</h3>
                        <p class="mt-2 text-lg font-bold">$${product.price.toLocaleString()}</p>
                        <button class="w-full mt-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors" onclick="openProductModal(${product.id}, '${category}')">
                            Ver detalles
                        </button>
                    </div>
                </div>
            `).join('');
        } else {
            console.warn(`Container for category ${category} not found`);
        }
    }
}

function openProductModal(productId, category) {
    const product = products[category].find(p => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById('productModalTitle');
    const modalContent = document.getElementById('productModalContent');

    modalTitle.textContent = product.name;
    modalContent.innerHTML = `
        <div class="grid gap-4 py-4">
            <div class="relative h-64 w-full">
                <img src="${product.image}" alt="${product.name}" class="object-contain w-full h-full">
            </div>
            <p class="text-gray-600">${product.description}</p>
            <p class="text-lg font-bold">$${product.price.toLocaleString()}</p>
            <div class="flex items-center justify-between">
                <label for="quantity" class="text-sm font-medium">Cantidad:</label>
                <div class="flex items-center">
                    <button class="bg-gray-200 px-2 py-1 rounded-l" onclick="updateQuantity(-1)">-</button>
                    <input id="quantity" type="number" class="w-16 text-center border-t border-b" value="1" min="1">
                    <button class="bg-gray-200 px-2 py-1 rounded-r" onclick="updateQuantity(1)">+</button>
                </div>
            </div>
            <button class="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors" onclick="addToCart(${product.id}, '${category}')">
                Agregar al carrito
            </button>
        </div>
    `;

    document.getElementById('productModal').classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
}

function updateQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let newQuantity = parseInt(quantityInput.value) + change;
    if (newQuantity < 1) newQuantity = 1;
    quantityInput.value = newQuantity;
}

function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    if (!product) return;

    const quantity = parseInt(document.getElementById('quantity').value);
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    updateCartUI();
    closeProductModal();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal + shippingCost;

    cartItemCountEl.textContent = totalItems;
    cartItemCountEl.classList.toggle('hidden', totalItems === 0);

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain">
                <div>
                    <p class="font-medium">${item.name}</p>
                    <p class="text-sm text-gray-500">$${item.price.toLocaleString()} x ${item.quantity}</p>
                </div>
            </div>
            <button class="text-red-500 hover:text-red-700" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash h-4 w-4"></i>
            </button>
        </div>
    `).join('');

    cartTotalEl.textContent = formatPrice(total);
    document.getElementById('discountedTotal').textContent = formatPrice(total * 0.8);
}

function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
    }).format(price);
}

function calculateShipping(postalCode) {
    return new Promise((resolve) => {
        setTimeout(() => {
            shippingOptions = {
                correoArgentinoDomicilio: {
                    name: "Correo Argentino Envío a domicilio clásico",
                    price: 9742,
                    estimatedDelivery: '3 a 6 días hábiles (luego de ser despachado)',
                    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/correo-argentino-shipment-icon-Lk0cW7gu5xXw5o1TDUht0qHCPguHn4.png'
                },
                correoArgentinoSucursal: {
                    name: "Correo Argentino Envío a sucursal",
                    price: 6135,
                    estimatedDelivery: '3 a 6 días hábiles (luego de ser despachado)',
                    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/correo-argentino-shipment-icon-Lk0cW7gu5xXw5o1TDUht0qHCPguHn4.png'
                },
                andreaniEstandar: {
                    name: "Andreani Estandar Envío a domicilio",
                    price: 10457.39,
                    estimatedDelivery: '3-4 días hábiles (luego de ser despachado)',
                    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga-3IKzLYo9d0C1H0FACUsSAZkuDgCuAi.svg'
                },
                retiroLocal: {
                    name: "Retiro en local",
                    price: 0,
                    estimatedDelivery: 'Inmediato',
                    logo: 'path/to/local-icon.png',
                    description: 'Distri Pou - Villa del Dique, Córdoba - Atención de lunes a viernes de 9 a 18 hs y sábados de 9 a 13 hs.'
                }
            };
            resolve(shippingOptions);
        }, 1000);
    });
}

function updateShippingOptions(shippingOptions) {
    const shippingSelect = document.getElementById('shippingMethod');
    shippingSelect.innerHTML = Object.entries(shippingOptions).map(([key, option]) => `
        <option value="${key}">
            ${option.name} - ${option.price > 0 ? `$${option.price.toFixed(2)}` : 'Gratis'} (${option.estimatedDelivery})
        </option>
    `).join('');
}

function calculateShippingPrice(basePrice, itemCount) {
    if (itemCount <= 1) {
        return basePrice;
    } else {
        return basePrice * (1 + 0.28 * (itemCount - 1));
    }
}

function updateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const shippingMethod = document.getElementById('shippingMethod').value;
    const selectedShipping = shippingOptions[shippingMethod];
    
    if (selectedShipping) {
        shippingCost = calculateShippingPrice(selectedShipping.price, itemCount);
    }

    const total = subtotal + shippingCost;
    document.getElementById('cartTotal').textContent = formatPrice(total);
    document.getElementById('discountedTotal').textContent = formatPrice(total * 0.8);
}

function updateAdvertisingBanner() {
    const advertisingBanner = document.getElementById('advertisingBanner');
    const advertisingMessage = document.getElementById('advertisingMessage');
    const currentHour = new Date().getHours();
    let message, backgroundImage;

    if (currentHour >= 6 && currentHour < 12) {
        message = "¡Oferta matutina! 15% de descuento en todos los blancos";
        backgroundImage = "url('img/morning-banner.jpg')";
    } else if (currentHour >= 12 && currentHour < 18) {
        message = "¡Especial de la tarde! Compra una indumentaria y lleva la segunda a mitad de precio";
        backgroundImage = "url('img/afternoon-banner.jpg')";
    } else {
        message = "¡Oferta nocturna! Envío gratis en compras superiores a $20000";
        backgroundImage = "url('img/night-banner.jpg')";
    }

    advertisingMessage.textContent = message;
    advertisingBanner.style.backgroundImage = backgroundImage;
}

function prepareCartData() {
    return JSON.stringify(cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity
    })));
}

function validateForm() {
    const requiredFields = document.querySelectorAll('#checkoutForm [required]');
    for (let field of requiredFields) {
        if (!field.value) {
            alert(`Por favor, completa el campo ${field.name}`);
            return false;
        }
    }
    return true;
}

// Implementación del slider automático para el banner de publicidad
let currentAdSlide = 0;
const adSlides = document.querySelectorAll('.ad-slide');

function showAdSlide(index) {
    adSlides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextAdSlide() {
    currentAdSlide = (currentAdSlide + 1) % adSlides.length;
    showAdSlide(currentAdSlide);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('closeBanner').addEventListener('click', () => {
        document.getElementById('topBanner').classList.add('hidden');
    });

    document.getElementById('mobileMenuButton').addEventListener('click', () => {
        const menuIcon = document.querySelector('.menu-icon');
        menuIcon.classList.toggle('open');
        document.getElementById('mobileMenu').classList.toggle('hidden');
    });

    document.getElementById('closeMobileMenu').addEventListener('click', () => {
        const menuIcon = document.querySelector('.menu-icon');
        menuIcon.classList.remove('open');
        document.getElementById('mobileMenu').classList.add('hidden');
    });

    document.getElementById('cartButton').addEventListener('click', () => {
        document.getElementById('cartModal').classList.remove('hidden');
    });

    document.getElementById('closeCart').addEventListener('click', () => {
        document.getElementById('cartModal').classList.add('hidden');
    });

    document.getElementById('closeProductModal').addEventListener('click', closeProductModal);

    document.getElementById('whatsappButton').addEventListener('click', () => {
        window.open('https://wa.me/5491134386409', '_blank');
    });

    document.getElementById('closeWhatsappNotification').addEventListener('click', () => {
        document.getElementById('whatsappNotification').classList.add('hidden');
    });

    document.getElementById('searchShipping').addEventListener('click', () => {
        const postalCode = document.getElementById('postalCode').value;
        if (postalCode.length === 4) {
            calculateShipping(postalCode)
                .then(shippingOptions => {
                    updateShippingOptions(shippingOptions);
                    document.getElementById('shippingOptions').classList.remove('hidden');
                    shippingCost = shippingOptions.correoArgentinoDomicilio.price;
                    updateTotal();
                });
        } else {
            alert('Por favor, ingrese un código postal válido.');
        }
    });

    document.getElementById('shippingMethod').addEventListener('change', function() {
        const selectedOption = shippingOptions[this.value];
        if (selectedOption) {
            shippingCost = selectedOption.price;
            updateTotal();
        }
    });

    document.getElementById('checkoutButton').addEventListener('click', function() {
        document.getElementById('cartModal').classList.add('hidden');
        document.getElementById('checkoutModal').classList.remove('hidden');
    });

    document.getElementById('closeCheckoutModal').addEventListener('click', function() {
        document.getElementById('checkoutModal').classList.add('hidden');
    });

    document.getElementById('paymentMethod').addEventListener('change', function() {
        if (this.value === 'transferencia') {
            document.getElementById('bankDetailsModal').classList.remove('hidden');
            document.getElementById('mercadopago-button').classList.add('hidden');
        } else if (this.value === 'mercadopago') {
            document.getElementById('bankDetailsModal').classList.add('hidden');
            document.getElementById('mercadopago-button').classList.remove('hidden');
        }
    });

    document.getElementById('checkoutForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (!validateForm()) return;

        const formData = new FormData(this);
        formData.append('cartItems', prepareCartData());

        console.log('Datos del formulario:', Object.fromEntries(formData));

        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text().then(text => {
                    throw new Error(`Error en el envío del formulario: ${response.status} ${response.statusText}\n${text}`);
                });
            }
        }).then(data => {
            console.log('Respuesta exitosa de Formspree:', data);
            if (document.getElementById('paymentMethod').value === 'mercadopago') {
                initiateMercadoPagoPayment();
            } else {
                alert('Gracias por tu compra. Por favor, realiza la transferencia según los datos proporcionados.');
            }
        }).catch(error => {
            console.error('Error detallado:', error);
            alert('Hubo un problema al procesar tu pedido. Por favor, revisa la consola para más detalles e intenta de nuevo.');
        });
    });

    updateBanner();
    setInterval(updateBanner, 5000);

    updateHero();
    setInterval(updateHero, 5000);

    renderProducts();
    console.log("Products rendered");

    updateAdvertisingBanner();
    setInterval(updateAdvertisingBanner, 3600000); // Update every hour

    setTimeout(() => {
        document.getElementById('whatsappNotification').classList.remove('hidden');
    }, 10000);

    showAdSlide(currentAdSlide);
    setInterval(nextAdSlide, 5000);

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });

    document.getElementById('preloader').style.display = 'none';
});

console.log("Script loaded successfully!");