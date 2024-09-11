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

// Optionally, add an event listener to the input field for real-time search
document.getElementById('search-input').addEventListener('input', searchProducts);
