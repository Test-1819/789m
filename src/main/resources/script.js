const menuItems = [
    { id: 1, name: "Garlic Bread", category: "starter", price: "$5.99", desc: "Crispy bread with garlic butter and herbs." },
    { id: 2, name: "Bruschetta", category: "starter", price: "$6.50", desc: "Toasted bread topped with fresh tomatoes and basil." },
    { id: 3, name: "Margherita Pizza", category: "main", price: "$12.99", desc: "Classic cheese and tomato pizza." },
    { id: 4, name: "Grilled Salmon", category: "main", price: "$18.50", desc: "Served with asparagus and lemon butter sauce." },
    { id: 5, name: "Tiramisu", category: "dessert", price: "$7.00", desc: "Traditional Italian coffee-flavored dessert." },
    { id: 6, name: "Chocolate Lava Cake", category: "dessert", price: "$8.00", desc: "Warm chocolate cake with a gooey molten center." }
];

function renderMenu(items) {
    const container = document.getElementById('menu-container');
    container.innerHTML = items.map(item => `
        <div class="food-card" data-category="${item.category}">
            <div>
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
            </div>
            <div>
                <div class="price">${item.price}</div>
                <button class="order-btn" onclick="alert('Added ${item.name} to cart!')">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function filterMenu(category) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderMenu(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// Initial render
document.addEventListener('DOMContentLoaded', () => renderMenu(menuItems));