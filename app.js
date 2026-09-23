const MENU_ITEMS = [
    {
        id: 1,
        name: "Звичайна Шаурма",
        price: 100,
        category: "Шаурма",
        ingredients: ["Звичайний лаваш", "куряче м'ясо 300 грамм","капуста", "Морква" ,"Часниковий соус","Мариновані огірки", "Картопля фрі", "кетчуп"],
        image: "https://assets.dots.live/misteram-public/01966c9d-33a1-7148-853f-e732b6221a8b-826x0.png"
    },
    {
        id: 2,
        name: "Подвійна Шаурма",
        price: 200,
        category: "Шаурма",
        ingredients: ["Звичайний лаваш", "куряче м'ясо 600 грамм","капуста", "Морква" ,"Часниковий соус","Мариновані огірки", "Картопля фрі", "кетчуп"],
        image: "https://img.ps.me/cdn-cgi/image/width=390,format=webp/https://img.postershop.me/26705/672d8f67-e501-44de-833a-4d9f80d9f27f_image.png"
    },
    {
        id: 3,
        name: "вірменска Шаурма",
        price: 120,
        category: "Шаурма",
        ingredients: ["Вірменський лаваш", "куряче м'ясо 300 грамм", "Часниковий соус","Мариновані огірки", "Картопля фрі", "кеичуп"],
        image: "https://klopotenko.com/wp-content/uploads/2025/03/burum-img-1000x600.jpg?v=1740997066"
    },
    {
        id: 4,
        name: "подвійна вірменска Шаурма",
        price: 220,
        category: "Шаурма",
        ingredients: ["Вірменський лаваш", "куряче м'ясо 600 грамм","капуста", "Морква" ,"Часниковий соус","Мариновані огірки", "Картопля фрі", "кетчуп"],
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "куриіні бургер",
        price: 75,
        category: "Бургер",
        ingredients: [" булька ", " жареную котлету ", " соус ", " листья салата", " маринованный огурец", " помідор ", " сиру або смажену цибулю ", " сир"],
        image: "chicken burger.jpg"
    },
    {
        id: 6,
        name: "бургер телятина",
        price: 120,
        category: "Бургер",
        ingredients: [" булька ", " жареную котлету ", " соус ", " листья салата", " маринованный огурец", " помідор ", " сиру або смажену цибулю ", " сир"],
        image: "meat burger.jpg"
    },
    {
        id: 7,
        name: "молочні",
        price: 70,
        category: "Хот Дог",
        ingredients: ["Лаваш", "Молочні сосиски", "капуста", "морква", "картопля фрі", "кетчуп", "майонез", ],
        image: "molochni hotdog.jpg"
    },
    {
        id: 8,
        name: "мисливські ",
        price: 85,
        category: "Хот Дог",
        ingredients: ["Лаваш", "мисливські сосиски", "капуста", "морква", "картопля фрі", "кетчуп", "майонез", ],
        image: "охот.jpg"
    },
    {
        id: 9,
        name: "coca cola",
        price: 40,
        category: "Напо",
        ingredients: [],
        image: "coca cola.jpg"
    },
    {
        id: 10,
        name: "Pepsi",
        price: 40,
        category: "Напо",
        ingredients: [],
        image: "pepsi.jpg"
    },
    {
        id: 11,
        name: "Ice Tea",
        price: 50,
        category: "Напо",
        ingredients: [],
        image: "ice tea.jpg"
    },
    {
        id: 12,
        name: "Airan",
        price: 35,
        category: "Напо",
        ingredients: [],
        image: "airan.jpg"
    },
    
];

function renderMenu(items) {
    const container = document.getElementById('menu-container');
    if (!container) return; 

    if (items.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 2rem;">У цій категорії немає доступних страв.</p>';
        return;
    }

    container.innerHTML = items.map(item => `
        <div class="meal-card" onclick="window.location.href='meal.html?id=${item.id}'" style="cursor: pointer;">
            <div class="meal-image-container">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="meal-price">${item.price} гр </span>
            </div>
            <div class="meal-info">
                <h3>${item.name}</h3>
                ${item.ingredients.length ? `<p class="meal-ingredients"><strong>Інгредієнти:</strong> ${item.ingredients.join(' • ')}</p>` : ''}
                <span class="details-link">Більше деталей ⬅️</span>
            </div>
        </div>
    `).join('');
}

// كود خاص بصفحة تفاصيل الوجبة (meal.html)
function initMealDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const mealId = parseInt(urlParams.get('id'));

    const meal = MENU_ITEMS.find(m => m.id === mealId);
    const detailsContainer = document.getElementById('meal-details-container');

    if (!detailsContainer) return; 

    if (!meal) {
        detailsContainer.innerHTML = '<h2>Вибачте, цієї страви не існує.!</h2><a href="index.html" class="buy-btn" style="display:inline-block; margin-top:20px; text-decoration:none;">العودة للرئيسية</a>';
        return;
    }

    detailsContainer.innerHTML = `
        <div class="meal-detail-card">
            <div class="meal-detail-image">
                <img src="${meal.image}" alt="${meal.name}">
            </div>
            <div class="meal-detail-info">
                <span class="category-tag">${meal.category}</span>
                <h2>${meal.name}</h2>
                <p class="detail-price">ціна: <strong>${meal.price} гр </strong></p>
                
                ${meal.ingredients.length ? `
                    <h3>Інгредієнти:</h3>
                    <ul class="ingredients-list">
                        ${meal.ingredients.map(ing => `<li>✅ ${ing}</li>`).join('')}
                    </ul>
                ` : ''}

                <button class="buy-btn" onclick="openCheckoutForMeal('${meal.name}', ${meal.price})">Купуйте карткою зараз 💳</button>
                <br><br>
                <a href="index.html" class="back-btn">⬅️ Повернутися до головного меню</a>
            </div>
        </div>
    `;
}

// دالة الدفع الخاصة بصفحة التفاصيل
window.openCheckoutForMeal = function(name, price) {
    const modal = document.getElementById('checkout-modal');
    document.getElementById('modal-item-title').textContent = `الطلب: ${name} (${price} гр)`;
    modal.style.display = 'flex';
};

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('menu-container')) {
        renderMenu(MENU_ITEMS);
    }
    if (document.getElementById('meal-details-container')) {
        initMealDetails();
    }
});

// ربط أزرار التصفية في الرئيسية
const filterButtons = document.querySelectorAll('.filter-btn');
if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const category = e.target.getAttribute('data-category');
            if (category === 'all') {
                renderMenu(MENU_ITEMS);
            } else {
                renderMenu(MENU_ITEMS.filter(item => item.category === category));
            }
        });
    });
}



// نموذج الدفع في صفحة التفاصيل
document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const cardName = document.getElementById('card-name').value;
    const address = document.getElementById('delivery-address').value;

    // توليد رقم حجز عشوائي مكون من 4 أرقام (مثلاً: #8492)
    const bookingNumber = Math.floor(1000 + Math.random() * 9000);

    // عرض رسالة النجاح متضمنة رقم الحجز
    alert(`تم الدفع بنجاح! 🎉\n\nشكراً لك يا ${cardName}.\nرقم حجز طلبك هو: #${bookingNumber}\n\nسيتم توصيل طلبك إلى عنوانك (${address}) في أقرب وقت.`);

    // إغلاق النافذة وإعادة ضبط النموذج
    document.getElementById('checkout-modal').style.display = 'none';
    document.getElementById('payment-form').reset();
    
    if (typeof selectedItem !== 'undefined') {
        selectedItem = null;
    }
});