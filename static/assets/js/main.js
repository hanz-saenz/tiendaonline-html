const categories = [
    { id: 1, name: "Smartphones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Accesorios" },
    { id: 4, name: "Tablets" },
    { id: 5, name: "Periféricos" }
];

const brands = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Xiaomi" },
    { id: 4, name: "HP" },
    { id: 5, name: "Sony" },
    { id: 6, name: "Logitech" }
];

const providers = [
    { id: 1, name: "TechDist" },
    { id: 2, name: "GlobalTech" },
    { id: 3, name: "ElectroSupply" },
    { id: 4, name: "InnoTech" }
];

const products = [
    { id: 1, name: "iPhone 14 Pro", category: "Smartphones", brand: "Apple", provider: "TechDist", price: 999, image: "img/product1.jpg" },
    { id: 2, name: "Galaxy S22", category: "Smartphones", brand: "Samsung", provider: "GlobalTech", price: 799, image: "img/product2.jpg" },
    { id: 3, name: "MacBook Pro M2", category: "Laptops", brand: "Apple", provider: "TechDist", price: 1299, image: "img/product3.jpg" },
    { id: 4, name: "Redmi Pad", category: "Tablets", brand: "Xiaomi", provider: "InnoTech", price: 349, image: "img/product4.jpg" },
    { id: 5, name: "AirPods Max", category: "Accesorios", brand: "Apple", provider: "TechDist", price: 549, image: "img/product5.jpg" },
    { id: 6, name: "HP Pavilion 15", category: "Laptops", brand: "HP", provider: "ElectroSupply", price: 699, image: "img/product6.jpg" },
    { id: 7, name: "Sony WH-1000XM5", category: "Accesorios", brand: "Sony", provider: "GlobalTech", price: 399, image: "img/product7.jpg" },
    { id: 8, name: "Logitech MX Keys", category: "Periféricos", brand: "Logitech", provider: "InnoTech", price: 129, image: "img/product8.jpg" },
    { id: 9, name: "Samsung Galaxy Tab S8", category: "Tablets", brand: "Samsung", provider: "GlobalTech", price: 649, image: "img/product9.jpg" },
    { id: 10, name: "Xiaomi 12T", category: "Smartphones", brand: "Xiaomi", provider: "InnoTech", price: 499, image: "img/product10.jpg" },
    { id: 11, name: "Sony PlayStation 5", category: "Accesorios", brand: "Sony", provider: "ElectroSupply", price: 499, image: "img/product11.jpg" },
    { id: 12, name: "Logitech G502 Mouse", category: "Periféricos", brand: "Logitech", provider: "TechDist", price: 79, image: "img/product12.jpg" }
];

function populateFilters() {
    const categorySelect = document.getElementById('category');
    const brandSelect = document.getElementById('brand');
    const providerSelect = document.getElementById('provider');

    if (categorySelect) {
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = category.name;
            categorySelect.appendChild(option);
        });
    }

    if (brandSelect) {
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand.name;
            option.textContent = brand.name;
            brandSelect.appendChild(option);
        });
    }

    if (providerSelect) {
        providers.forEach(provider => {
            const option = document.createElement('option');
            option.value = provider.name;
            option.textContent = provider.name;
            providerSelect.appendChild(option);
        });
    }
}

function displayProducts() {
    const catalog = document.getElementById('product-catalog');
    if (!catalog) return;

    catalog.innerHTML = '';
    const category = document.getElementById('category')?.value;
    const brand = document.getElementById('brand')?.value;
    const provider = document.getElementById('provider')?.value;

    const filteredProducts = products.filter(product => {
        return (!category || product.category === category) &&
               (!brand || product.brand === brand) &&
               (!provider || product.provider === provider);
    });

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white p-4 rounded-lg shadow-md';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="rounded">
            <h3 class="text-lg font-semibold mt-2">${product.name}</h3>
            <p class="text-gray-600">Categoría: ${product.category}</p>
            <p class="text-gray-600">Marca: ${product.brand}</p>
            <p class="text-gray-600">Proveedor: ${product.provider}</p>
            <p class="text-blue-600 font-bold mt-2">$${product.price}</p>
            <div class="mt-4 flex space-x-2">
                <button onclick="alert('Editar producto ID: ${product.id}')" class="action-button edit-button">Editar</button>
                <button onclick="alert('Eliminar producto ID: ${product.id}')" class="action-button delete-button">Eliminar</button>
                <button onclick="alert('Detalles del producto: ${product.name}\\nCategoría: ${product.category}\\nMarca: ${product.brand}\\nProveedor: ${product.provider}\\nPrecio: $${product.price}')" class="action-button details-button">Detalles</button>
            </div>
        `;
        catalog.appendChild(productCard);
    });
}

function displayCategories() {
    const categoryList = document.getElementById('category-list');
    if (!categoryList) return;

    categoryList.innerHTML = '';
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card bg-white p-4 rounded-lg shadow-md';
        categoryCard.innerHTML = `
            <h3 class="text-lg font-semibold">${category.name}</h3>
            <div class="mt-4 flex space-x-2">
                <button onclick="alert('Editar categoría ID: ${category.id}')" class="action-button edit-button">Editar</button>
                <button onclick="alert('Eliminar categoría ID: ${category.id}')" class="action-button delete-button">Eliminar</button>
                <button onclick="alert('Detalles de la categoría: ${category.name}')" class="action-button details-button">Detalles</button>
            </div>
        `;
        categoryList.appendChild(categoryCard);
    });
}

function displayBrands() {
    const brandList = document.getElementById('brand-list');
    if (!brandList) return;

    brandList.innerHTML = '';
    brands.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card bg-white p-4 rounded-lg shadow-md';
        brandCard.innerHTML = `
            <h3 class="text-lg font-semibold">${brand.name}</h3>
            <div class="mt-4 flex space-x-2">
                <button onclick="alert('Editar marca ID: ${brand.id}')" class="action-button edit-button">Editar</button>
                <button onclick="alert('Eliminar marca ID: ${brand.id}')" class="action-button delete-button">Eliminar</button>
                <button onclick="alert('Detalles de la marca: ${brand.name}')" class="action-button details-button">Detalles</button>
            </div>
        `;
        brandList.appendChild(brandCard);
    });
}

function displayProviders() {
    const providerList = document.getElementById('provider-list');
    if (!providerList) return;

    providerList.innerHTML = '';
    providers.forEach(provider => {
        const providerCard = document.createElement('div');
        providerCard.className = 'provider-card bg-white p-4 rounded-lg shadow-md';
        providerCard.innerHTML = `
            <h3 class="text-lg font-semibold">${provider.name}</h3>
            <div class="mt-4 flex space-x-2">
                <button onclick="alert('Editar proveedor ID: ${provider.id}')" class="action-button edit-button">Editar</button>
                <button onclick="alert('Eliminar proveedor ID: ${provider.id}')" class="action-button delete-button">Eliminar</button>
                <button onclick="alert('Detalles del proveedor: ${provider.name}')" class="action-button details-button">Detalles</button>
            </div>
        `;
        providerList.appendChild(providerCard);
    });
}

// Initialize page based on current URL
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('products.html')) {
        populateFilters();
        displayProducts();
        document.getElementById('category')?.addEventListener('change', displayProducts);
        document.getElementById('brand')?.addEventListener('change', displayProducts);
        document.getElementById('provider')?.addEventListener('change', displayProducts);
    } else if (path.includes('categories.html')) {
        displayCategories();
    } else if (path.includes('brands.html')) {
        displayBrands();
    } else if (path.includes('providers.html')) {
        displayProviders();
    }
});