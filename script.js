function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const category = item.getAttribute('data-category').toLowerCase();
        if (category.includes(searchInput)) {
            item.style.display = ''; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
}

function clearSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.value = ''; // Clear the input field
    searchProducts(); // Show all items
}

// Add event listeners
document.getElementById('search-input').addEventListener('input', debounce(searchProducts, 300));
document.getElementById('clear-button').addEventListener('click', clearSearch);

// Debounce function to limit the rate of function execution
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
