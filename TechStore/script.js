document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    // Search Logic: Keyup event affects visibility
    searchInput.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        
        products.forEach(product => {
            const title = product.querySelector('.product-title').textContent.toLowerCase();
            if (title.includes(term)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    // Category Logic: Click event affects visibility
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});