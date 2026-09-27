// --- CENTRAL DATA STORE ---
const inventoryData = {
    1: {
        name: "Premium Deadwake Graphic Tee",
        price: 34.99,
        sizes: {
            "Aqua": ["S", "M", "L"],
            "White": ["M", "L", "XL"],
            "Sage Green": ["M", "XL"]
        },
        stock: {
            "Aqua-S": 2, "Aqua-M": 5, "Aqua-L": 0,
            "White-M": 4, "White-L": 3, "White-XL": 1,
            "Sage Green-M": 8, "Sage Green-XL": 2
        }
    },
    2: {
        name: "Performance Longsleeve",
        price: 42.99,
        sizes: {
            "Blue Camo": ["M", "L"],
            "White": ["L", "XL"]
        },
        stock: {
            "Blue Camo-M": 3, "Blue Camo-L": 4,
            "White-L": 2, "White-XL": 0
        }
    },
    3: {
        name: "DW Classic Snapback Hat",
        price: 28.50,
        sizes: {
            "Black": ["One Size"],
            "Blue Camo": ["One Size"],
            "Charcoal": ["One Size"]
        },
        stock: {
            "Black-One Size": 5,
            "Blue Camo-One Size": 0,
            "Charcoal-One Size": 3
        }
    }
};

// --- SECURITY PROTOCOL BOUNDARIES ---
const ADMIN_EMAIL = "admin@deadwake.com"; 
const ADMIN_PASSWORD_REQUIREMENT = "Spaded6900!"; 
const activeProductIds = ["1", "2", "3"];

// --- SYNCHRONIZED MEMORY STATES ---
let cart = JSON.parse(localStorage.getItem('dw_cart')) || [];
let loggedInUser = localStorage.getItem('dw_user') || null;
let currentStockData = JSON.parse(localStorage.getItem('dw_stock')) || inventoryData;

function init() {
    if (!localStorage.getItem('dw_stock')) {
        localStorage.setItem('dw_stock', JSON.stringify(inventoryData));
    }

    const detailsExist = document.getElementById('color-1');
    if (detailsExist) {
        activeProductIds.forEach(idStr => {
            const id = parseInt(idStr);
            const colorSelect = document.getElementById(`color-${id}`);
            if(colorSelect) {
                colorSelect.addEventListener('change', () => {
                    updateSizeOptions(id);
                    updateStockUI(id);
                });
                updateSizeOptions(id);
                updateStockUI(id);
            }

            const sizeSelect = document.getElementById(`size-${id}`);
            if(sizeSelect) {
                sizeSelect.addEventListener('change', () => updateStockUI(id));
            }

            const btn = document.getElementById(`btn-${id}`);
            if(btn) {
                btn.addEventListener('click', () => handleAddToCart(id));
            }
        });
    }

    setupModals();
    checkAdminPrivileges(); 
    renderCart();
    updateUserNavbarUI();
}

function updateSizeOptions(id) {
    const item = currentStockData[id];
    const colorSelect = document.getElementById(`color-${id}`);
    const sizeSelect = document.getElementById(`size-${id}`);
    if (!colorSelect || !sizeSelect) return;
    
    const color = colorSelect.value;
    const availableSizes = item.sizes[color] || [];
    sizeSelect.innerHTML = availableSizes.map(size => `<option value="${size}">${size}</option>`).join('');
}

// Fixed bracket reference issue from prior loops
function updateStockUI(id) {
    const item = currentStockData[id];
    const card = document.getElementById(`prod-card-${id}`);
    const colorSelect = document.getElementById(`color-${id}`);
    const sizeSelect = document.getElementById(`size-${id}`);
    const tracker = document.getElementById(`tracker-${id}`);
    const btn = document.getElementById(`btn-${id}`);
    const soldOutBadge = document.getElementById(`soldout-badge-${id}`);

    if(!colorSelect || !sizeSelect) return;

    if(!sizeSelect.value) {
        if(tracker) tracker.innerText = "Style Unavailable";
        if(btn) btn.disabled = true;
        return;
    }

    const key = `${colorSelect.value}-${sizeSelect.value}`;
    const currentStock = item.stock[key] !== undefined ? item.stock[key] : 0;

    const totalItemStock = Object.values(item.stock).reduce((a, b) => a + b, 0);
    if(soldOutBadge) soldOutBadge.style.display = totalItemStock === 0 ? 'block' : 'none';

    if (currentStock === 0) {
        if(tracker) {
            tracker.innerText = "Out of Stock";
            tracker.className = "inventory-tracker low-stock";
        }
        if(btn) {
            btn.disabled = true;
            btn.innerText = "Style Unavailable";
        }
        if(card) card.classList.add('out-of-style');
    } else {
        if(tracker) {
            tracker.innerText = `${currentStock} left in style`;
            tracker.className = "inventory-tracker";
            if (currentStock <= 2) tracker.className = "inventory-tracker low-stock";
        }
        if(btn) {
            btn.disabled = false;
            btn.innerText = "Add To Cart";
        }
        if(card) card.classList.remove('out-of-style');
    }
}

function checkAdminPrivileges() {
    const adminPanel = document.getElementById('adminControlPanel');
    if (!adminPanel) return; 

    if (localStorage.getItem('dw_user_role') === 'admin') {
        adminPanel.style.display = 'block';
        setupAdminDashboard();
    } else {
        adminPanel.style.display = 'none';
    }
}

function setupAdminDashboard() {
    const prodSelect = document.getElementById('adminProductSelect');
    const varSelect = document.getElementById('adminVariantSelect');
    
    if(!prodSelect || !varSelect) return;

    prodSelect.removeEventListener('change', populateAdminVariants);
    prodSelect.addEventListener('change', populateAdminVariants);
    populateAdminVariants();
}

function populateAdminVariants() {
    const prodSelect = document.getElementById('adminProductSelect');
    const varSelect = document.getElementById('adminVariantSelect');
    if(!prodSelect || !varSelect) return;
    
    const targetId = prodSelect.value;
    const item = currentStockData[targetId];

    varSelect.innerHTML = Object.keys(item.stock).map(key => {
        return `<option value="${key}">${key} (${item.stock[key]} left)</option>`;
    }).join('');
}

window.adjustAdminStock = function(targetQuantity) {
    const prodSelect = document.getElementById('adminProductSelect');
    const varSelect = document.getElementById('adminVariantSelect');
    if(!prodSelect || !varSelect) return;

    const productId = prodSelect.value;
    const variantKey = varSelect.value;

    currentStockData[productId].stock[variantKey] = targetQuantity;
    localStorage.setItem('dw_stock', JSON.stringify(currentStockData));
    
    populateAdminVariants();
    updateStockUI(productId);
};

function handleAddToCart(id) {
    const item = currentStockData[id];
    const color = document.getElementById(`color-${id}`).value;
    const size = document.getElementById(`size-${id}`).value;
    const key = `${color}-${size}`;
    
    const maxStock = item.stock[key];
    const existing = cart.find(c => c.id === id && c.color === color && c.size === size);

    if (existing) {
        if (existing.quantity < maxStock) {
            existing.quantity++;
        } else {
            alert("No more variant items available in stock layout configurations.");
            return;
        }
    } else {
        cart.push({ id, name: item.name, price: item.price, color, size, quantity: 1 });
    }

    syncAndSaveCartState();
    updateStockUI(id);
    if(document.getElementById('adminVariantSelect')) populateAdminVariants();
}

window.updateCartQty = function(index, change) {
    const cartItem = cart[index];
    const itemData = currentStockData[cartItem.id];
    const key = `${cartItem.color}-${cartItem.size}`;

    if (change > 0) {
        if (cartItem.quantity >= itemData.stock[key]) {
            alert("Inventory limit reached!");
            return;
        }
        cartItem.quantity++;
    } else {
        cartItem.quantity--;
        if (cartItem.quantity <= 0) {
            cart.splice(index, 1);
        }
    }
    syncAndSaveCartState();
    
    if (document.getElementById(`color-${cartItem.id}`)) {
        updateStockUI(cartItem.id);
    }
    if(document.getElementById('adminVariantSelect')) populateAdminVariants();
};

function syncAndSaveCartState() {
    localStorage.setItem('dw_cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cartItemsContainer');
    const totalVal = document.getElementById('cartTotalValue');
    const badge = document.getElementById('cartBadgeCount');

    if (!container) return;
    container.innerHTML = '';

    let totalCost = 0;
    let totalItems = 0;

    cart.forEach((item, index) => {
        totalCost += item.price * item.quantity;
        totalItems += item.quantity;

        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted);">${item.color} / ${item.size}</p>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn" onclick="updateCartQty(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
        `;
        container.appendChild(row);
    });

    if(cart.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem 0;">Your cart is empty.</p>';
    }

    if(totalVal) totalVal.innerText = `$${totalCost.toFixed(2)}`;
    if(badge) badge.innerText = totalItems;
}

function updateUserNavbarUI() {
    const authBtn = document.getElementById('authNavBtn');
    if(authBtn) {
        if(loggedInUser) {
            authBtn.innerText = `Hi, ${loggedInUser} (Logout)`;
        } else {authBtn.innerText = "Login / Signup";
}
}
}
function setupModals() {
const authModal = document.getElementById('authModal');
const cartModal = document.getElementById('cartModal');
document.getElementById('authNavBtn').addEventListener('click', () => {
if(loggedInUser) {
localStorage.removeItem('dw_user');
localStorage.removeItem('dw_user_role');
localStorage.removeItem('dw_user_raw');
loggedInUser = null;
updateUserNavbarUI();
checkAdminPrivileges();
alert("Logged out successfully.");
} else {
authModal.classList.add('active');
}
});
document.getElementById('cartNavBtn').addEventListener('click', () => cartModal.classList.add('active'));
document.getElementById('closeAuthBtn').addEventListener('click', () => authModal.classList.remove('active'));
document.getElementById('closeCartBtn').addEventListener('click', () => cartModal.classList.remove('active'));
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const usernameGroup = document.getElementById('usernameGroup');
const authSubmitBtn = document.getElementById('authSubmitBtn');
loginTab.addEventListener('click', () => {
loginTab.classList.add('active');
signupTab.classList.remove('active');
usernameGroup.style.display = 'none';
authSubmitBtn.innerText = 'Login';
});
signupTab.addEventListener('click', () => {
signupTab.classList.add('active');
loginTab.classList.remove('active');
usernameGroup.style.display = 'block';
authSubmitBtn.innerText = 'Create Account';
});
document.getElementById('authForm').addEventListener('submit', (e) => {
e.preventDefault();
const email = document.getElementById('authEmail').value.trim().toLowerCase();
const password = document.getElementById('authPassword').value;
if (email === ADMIN_EMAIL) {
if (password === ADMIN_PASSWORD_REQUIREMENT) {
loggedInUser = "Admin";
localStorage.setItem('dw_user', loggedInUser);
localStorage.setItem('dw_user_role', 'admin');
localStorage.setItem('dw_user_raw', email);
alert("Admin Access Unlocked. Stock Controller loaded successfully.");
} else {
alert("Access Denied: Incorrect administrator password sequence entered.");
return;
}
} else {
loggedInUser = email.split('@');
localStorage.setItem('dw_user', loggedInUser);
localStorage.setItem('dw_user_role', 'customer');
localStorage.setItem('dw_user_raw', email);
alert(Logged in successfully as ${loggedInUser}.);
}
updateUserNavbarUI();
checkAdminPrivileges();
authModal.classList.remove('active');
});
document.getElementById('checkoutBtn').addEventListener('click', () => {
if(cart.length === 0) {
alert("Cart is empty!");
return;
}
cart.forEach(cartItem => {
const item = currentStockData[cartItem.id];
const key = ${cartItem.color}-${cartItem.size};
item.stock[key] -= cartItem.quantity;
});
localStorage.setItem('dw_stock', JSON.stringify(currentStockData));
alert(loggedInUser ? Thanks for your purchase, ${loggedInUser}! : "Order processed as guest customer!");
cart = [];
syncAndSaveCartState();
cartModal.classList.remove('active');
if (document.getElementById('color-1')) {
activeProductIds.forEach(idStr => updateStockUI(parseInt(idStr)));
}
if(document.getElementById('adminVariantSelect')) populateAdminVariants();
});
}
// Run initialization line directly
init();