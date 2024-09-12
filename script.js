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

document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email-phone').value;
    const password = document.getElementById('sign-in-password').value;

    fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/dashboard'; // Redirect to a different page
        } else {
            alert('Sign In Failed');
        }
    })
    .catch(error => console.error('Error:', error));
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // Simple password validation: must be at least 6 characters
    return password.length >= 6;
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 6 characters');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/signin'; // Redirect to sign-in page
        } else {
            alert('Registration Failed');
        }
    })
    .catch(error => console.error('Error:', error));
});
