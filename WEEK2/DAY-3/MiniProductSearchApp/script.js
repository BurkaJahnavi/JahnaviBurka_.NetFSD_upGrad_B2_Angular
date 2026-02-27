const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");


const state = {
    products: [
        "Laptop",
        "Smartphone",
        "Headphones",
        "Smartwatch",
        "Keyboard",
        "Mouse",
        "Charger",
        "Backpack",
        "Camera",
        "Tablet"
    ],
    filteredProducts: []
};


function renderProducts(products) {
    productList.innerHTML = "";

    if (products.length === 0) {
        productList.innerHTML = `<li class="no-result">No Results Found</li>`;
        return;
    }

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        productList.appendChild(li);
    });
}


function filterProducts(searchText) {
    state.filteredProducts = state.products.filter(product =>
        product.toLowerCase().includes(searchText.toLowerCase())
    );

    renderProducts(state.filteredProducts);
}

searchInput.addEventListener("input", (e) => {
    filterProducts(e.target.value);
});


productList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        alert("You selected: " + e.target.textContent);
    }
});

renderProducts(state.products);