var itemsAdded = {};

function addToCart(itemName, price) {
    if (itemsAdded[itemName]) {
        itemsAdded[itemName].quantity++;
    } else {
        itemsAdded[itemName] = { quantity: 1, price: price };
    }

    updateItemsAdded();
}

function removeFromCart(itemName) {
    if (itemsAdded[itemName] && itemsAdded[itemName].quantity > 0) {
        itemsAdded[itemName].quantity--;
        if (itemsAdded[itemName].quantity === 0) {
            delete itemsAdded[itemName];
        }
    }

    updateItemsAdded();
}

function updateItemsAdded() {
    var itemList = document.getElementById('addedItems');
    itemList.innerHTML = '';
    var totalPrice = 0;

    for (var item in itemsAdded) {
        var listItem = document.createElement('li');
        var totalItemPrice = itemsAdded[item].quantity * itemsAdded[item].price;
        listItem.textContent = item + ': ' + itemsAdded[item].quantity + ' x $' + itemsAdded[item].price + ' = $' + totalItemPrice;
        itemList.appendChild(listItem);
        totalPrice += totalItemPrice;
    }

    // Display total price
    var totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = 'Estimated Price for the Selected Items: $' + totalPrice.toFixed(2);
}

function buyItems() {
    itemsAdded = {};
    updateItemsAdded();
}

function showSection(section) {
    var menuSection = document.getElementById("menuSection");
    menuSection.innerHTML = "";

    if (section === "coffee") {
        menuSection.innerHTML += `
        <!-- Espresso -->
        <div class="card">
            <img class="image" src="images/espresso.webp" alt="Espresso" width="150"><br>
            <span class="item">Espresso</span>: A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely ground coffee beans. <strong>5 calories</strong>. Healthy choice.
            <div>Price: $2.50</div>
            <button class="add-to-cart" onclick="addToCart('Espresso', 2.50)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Espresso')">Remove</button>
        </div>
            
        <!-- Americano -->
        <div class="card">
            <img class="image" src="images/americano.jpeg" alt="Americano" width="150"><br>
            <span class="item">Americano</span>: Made by diluting espresso with hot water, giving it a similar strength to drip coffee but with a different flavor profile. <strong>13 calories</strong>. Healthy choice.
            <div>Price: $3.00</div>
            <button class="add-to-cart" onclick="addToCart('Americano', 3.00)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Americano')">Remove</button>
        </div>
        <!-- Flat White -->
<div class="card">
    <img class="image" src="images/Flat White.jpeg" alt="Flat White" width="150"><br>
    <span class="item">Flat White</span>: An espresso-based coffee drink prepared by pouring microfoam into a single or double shot of espresso. <strong>120 calories</strong>. Contains milk foam.
    <div>Price: $4.00</div>
    <button class="add-to-cart" onclick="addToCart('Flat White', 4.00)">Add</button>
    <button class="remove-from-cart" onclick="removeFromCart('Flat White')">Remove</button>
</div>
    
<!-- Cappuccino -->
<div class="card">
    <img class="image" src="images/capuccino.jpeg" alt="Cappuccino" width="150"><br>
    <span class="item">Cappuccino</span>: Espresso mixed with a small amount of steamed milk and topped with a lot of milk foam. <strong>165 calories</strong>. Contains steamed milk.
    <div>Price: $3.75</div>
    <button class="add-to-cart" onclick="addToCart('Cappuccino', 3.75)">Add</button>
    <button class="remove-from-cart" onclick="removeFromCart('Cappuccino')">Remove</button>
</div>
    
<!-- Latte -->
<div class="card">
    <img class="image" src="images/latte.webp" alt="Latte" width="150"><br>
    <span class="item">Latte</span>: Coffee made with one-third espresso and two-thirds steamed milk, topped with a bit of milk foam. <strong>180 calories</strong>. Contains steamed milk.
    <div>Price: $3.50</div>
    <button class="add-to-cart" onclick="addToCart('Latte', 3.50)">Add</button>
    <button class="remove-from-cart" onclick="removeFromCart('Latte')">Remove</button>
</div>
    
<!-- Mocha -->
<div class="card">
    <img class="image" src="images/mocha.jpeg" alt="Mocha" width="150"><br>
    <span class="item">Mocha</span>: Espresso with steamed milk and chocolate, typically topped with whipped cream. <strong>320 calories</strong>. Contains chocolate syrup.
    <div>Price: $4.25</div>
    <button class="add-to-cart" onclick="addToCart('Mocha', 4.25)">Add</button>
    <button class="remove-from-cart" onclick="removeFromCart('Mocha')">Remove</button>
</div>
    
<!-- Caramel Macchiato -->
<div class="card">
    <img class="image" src="images/Caramel macchiato.jpeg" alt="Caramel Macchiato" width="150"><br>
    <span class="item">Caramel Macchiato</span>: Espresso combined with vanilla-flavored syrup, milk, and caramel sauce on top. <strong>240 calories</strong>. Contains caramel and whipped cream.
    <div>Price: $4.50</div>
    <button class="add-to-cart" onclick="addToCart('Caramel Macchiato',4.50)">Add</button>
    <button class="remove-from-cart" onclick="removeFromCart('Caramel Macchiato')">Remove</button>
</div>


        `;
    } else if (section === "snacks") {
        menuSection.innerHTML += `
        <!-- French Fries -->
        <div class="card">
            <img class="image" src="images/french fries.jpeg" alt="French Fries" width="150"><br>
            <span class="item">French Fries:</span> Golden and crispy fries served with a side of ketchup. <strong>300 calories</strong>.
            <div>Price: $4.50</div>
            <button class="add-to-cart" onclick="addToCart('French Fries', 4.50)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('French Fries')">Remove</button>
        </div>

        <!-- Spaghetti Bolognese -->
        <div class="card">
            <img class="image" src="images/Spaghetti Bolognese.webp" alt="Spaghetti Bolognese" width="150"><br>
            <span class="item">Spaghetti Bolognese:</span> Classic meat sauce. <strong>570 calories</strong>.
            <div>Price: $12.00</div>
            <button class="add-to-cart" onclick="addToCart('Spaghetti Bolognese', 12.00)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Spaghetti Bolognese')">Remove</button>
        </div>
                
        <!-- Pesto Pasta -->
        <div class="card">
            <img class="image" src="images/pesto pasta.jpeg" alt="Pesto Pasta" width="150"><br>
            <span class="item">Pesto Pasta:</span> With fresh basil and pine nuts. <strong>480 calories</strong>.
            <div>Price: $10.00</div>
            <button class="add-to-cart" onclick="addToCart('Pesto Pasta', 10.00)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Pesto Pasta')">Remove</button>
        </div>
                
        <!-- Chicken Sandwich -->
        <div class="card">
            <img class="image" src="images/chicken sandwich.jpeg" alt="Chicken Sandwich" width="150"><br>
            <span class="item">Chicken Sandwich:</span> Grilled chicken and veggies. <strong>500 calories</strong>.
            <div>Price: $8.50</div>
            <button class="add-to-cart" onclick="addToCart('Chicken Sandwich', 8.50)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Chicken Sandwich')">Remove</button>
        </div>
                
        <!-- Veggie Sandwich -->
        <div class="card">
            <img class="image" src="images/veggie sandwich.jpeg" alt="Veggie Sandwich" width="150"><br>
            <span class="item">Veggie Sandwich:</span> Assorted vegetables and feta. <strong>350 calories</strong>.
            <div>Price: $7.00</div>
            <button class="add-to-cart" onclick="addToCart('Veggie Sandwich', 7.00)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Veggie Sandwich')">Remove</button>
        </div>
                
        <!-- Classic Chicken Burger -->
        <div class="card">
            <img class="image" src="images/Chicken burger.jpeg" alt="Classic Chicken Burger" width="150"><br>
            <span class="item">Classic Chicken Burger:</span> Chicken patty with cheddar cheese. <strong>700 calories</strong>.
            <div>Price: $9.00</div>
            <button class="add-to-cart" onclick="addToCart('Classic Chicken Burger', 9.00)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Classic Chicken Burger')">Remove</button>
        </div>
                
    <!-- Veggie Burger -->
    <div class="card">
        <img class="image" src="images/veggie burger.jpeg" alt="Veggie Burger" width="150"><br>
        <span class="item">Veggie Burger:</span> Plant-based patty with avocado. <strong>550 calories</strong>.
        <div>Price: $8.00</div>
        <button class="add-to-cart" onclick="addToCart('Veggie Burger', 8.00)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Veggie Burger')">Remove</button>
    </div>
            
    <!-- Chicken Wings -->
    <div class="card">
        <img class="image" src="images/chicken wings.jpeg" alt="Chicken Wings" width="150"><br>
        <span class="item">Chicken Wings:</span> Spicy glazed wings. <strong>430 calories</strong>.
        <div>Price: $7.50</div>
        <button class="add-to-cart" onclick="addToCart('Chicken Wings', 7.50)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Chicken Wings')">Remove</button>
    </div>

    <!-- Chicken Tenders -->
    <div class="card">
        <img class="image" src="images/chicken tenders .jpeg" alt="Chicken Tenders" width="150"><br>
        <span class="item">Chicken Tenders:</span> Crispy fried with dipping sauces. <strong>350 calories</strong>.
        <div>Price: $6.50</div>
        <button class="add-to-cart" onclick="addToCart('Chicken Tenders', 6.50)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Chicken Tenders')">Remove</button>
    </div>

    <!-- Chicken Lollipop -->
    <div class="card">
        <img class="image" src="images/chicken lollipop.jpg" alt="Chicken Lollipop" width="150"><br>
        <span class="item">Chicken Lollipop:</span> Served with a spicy dip. <strong>390 calories</strong>.
        <div>Price: $7.00</div>
        <button class="add-to-cart" onclick="addToCart('Chicken Lollipop', 7.00)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Chicken Lollipop')">Remove</button>
    </div>

    <!-- Stuffed Mushrooms -->
    <div class="card">
        <img class="image" src="images/stuffed mushrooms.jpeg" alt="Stuffed Mushrooms" width="150"><br>
        <span class="item">Stuffed Mushrooms:</span> Stuffed with cheese and herbs. <strong>310 calories</strong>.
        <div>Price: $6.50</div>
        <button class="add-to-cart" onclick="addToCart('Stuffed Mushrooms', 6.50)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Stuffed Mushrooms')">Remove</button>
    </div>

    <!-- Garlic Bread Sticks -->
    <div class="card">
        <img class="image" src="images/garlic bread sticks.webp" alt="Garlic Bread Sticks" width="150"><br>
        <span class="item">Garlic Bread Sticks:</span> Garlic butter and parmesan. <strong>220 calories</strong>.
        <div>Price: $4.00</div>
        <button class="add-to-cart" onclick="addToCart('Garlic Bread Sticks', 4.00)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Garlic Bread Sticks')">Remove</button>
    </div>
        `;
    } else if (section === "shakes") {
        menuSection.innerHTML += `
        <!-- Oreo Shake -->
        <div class="card">
            <img class="image" src="images/oreo shake.jpeg" alt="Oreo Shake" width="150"><br>
            <span class="item">Oreo Shake:</span> Creamy shake with crushed Oreos. <strong>350 calories</strong>.
            <div>Price: $5.00</div>
            <button class="add-to-cart" onclick="addToCart('Oreo Shake', 5.00)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Oreo Shake')">Remove</button>
        </div>
                
        <!-- Strawberry Shake -->
        <div class="card">
            <img class="image" src="images/strawberry image.jpeg" alt="Strawberry Shake" width="150"><br>
            <span class="item">Strawberry Shake:</span> Made with real strawberries. <strong>310 calories</strong>.
            <div>Price: $5.00</div>
            <button class="add-to-cart" onclick="addToCart('Strawberry Shake', 5.00)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Strawberry Shake')">Remove</button>
        </div>
                
        <!-- Vanilla Shake -->
        <div class="card">
            <img class="image" src="images/vanilla shake.jpeg" alt="Vanilla Shake" width="150"><br>
            <span class="item">Vanilla Shake:</span> Classic vanilla with a creamy texture. <strong>300 calories</strong>.
            <div>Price: $4.50</div>
            <button class="add-to-cart" onclick="addToCart('Vanilla Shake', 4.50)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Vanilla Shake')">Remove</button>
        </div>
                
        <!-- Chocolate Shake -->
        <div class="card">
            <img class="image" src="images/chocolate shake.jpeg" alt="Chocolate Shake" width="150"><br>
            <span class="item">Chocolate Shake:</span> Rich chocolate flavor. <strong>360 calories</strong>.
            <div>Price: $5.00</div>
            <button class="add-to-cart" onclick="addToCart('Chocolate Shake', 5.00)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('Chocolate Shake')">Remove</button>
        </div>
                
        <!-- KitKat Shake -->
        <div class="card">
            <img class="image" src="images/kitkat image.jpeg" alt="KitKat Shake" width="150"><br>
            <span class="item">KitKat Shake:</span> Blended with KitKat pieces. <strong>380 calories</strong>.
            <div>Price: $5.50</div>
            <button class="add-to-cart" onclick="addToCart('KitKat Shake', 5.50)">Add</button>
            <button class="remove-from-cart" onclick="removeFromCart('KitKat Shake')">Remove</button>
        </div>
        `;
    }
    else if (section === "icecreams") {
        menuSection.innerHTML += `
        <!-- Chocolate Lava Cake -->
    <div class="card">
        <img class="image" src="images/chocolate lava cake.jpeg" alt="Chocolate Lava Cake" width="150"><br>
        <span class="item">Chocolate Lava Cake:</span> Moist chocolate cake with a gooey chocolate center. <strong>450 calories</strong>.
        <div>Price: $6.50</div>
        <button class="add-to-cart" onclick="addToCart('Chocolate Lava Cake', 6.50)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Chocolate Lava Cake')">Remove</button>
    </div>
                
    <!-- New York Cheesecake -->
    <div class="card">
        <img class="image" src="images/newyork cheese cake.jpeg" alt="New York Cheesecake" width="150"><br>
        <span class="item">New York Cheesecake:</span> Rich cheesecake with a dense, smooth, and creamy consistency. <strong>400 calories</strong>.
        <div>Price: $7.00</div>
        <button class="add-to-cart" onclick="addToCart('New York Cheesecake', 7.00)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('New York Cheesecake')">Remove</button>
    </div>
                
    <!-- Red Velvet Cake -->
    <div class="card">
        <img class="image" src="images/red velvet.jpeg" alt="Red Velvet Cake" width="150"><br>
        <span class="item">Red Velvet Cake:</span> Light chocolate cake with deep red coloring and cream cheese frosting. <strong>370 calories</strong>.
        <div>Price: $6.00</div>
        <button class="add-to-cart" onclick="addToCart('Red Velvet Cake', 6.00)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Red Velvet Cake')">Remove</button>
    </div>
                
    <!-- Tiramisu -->
    <div class="card">
        <img class="image" src="images/tiramisu cake.webp" alt="Tiramisu" width="150"><br>
        <span class="item">Tiramisu:</span> Coffee-flavored Italian dessert. <strong>450 calories</strong>.
        <div>Price: $6.50</div>
        <button class="add-to-cart" onclick="addToCart('Tiramisu', 6.50)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Tiramisu')">Remove</button>
    </div>
                
    <!-- Carrot Cake -->
    <div class="card">
        <img class="image" src="images/carrot cake.jpeg" alt="Carrot Cake" width="150"><br>
        <span class="item">Carrot Cake:</span> Spiced cake with grated carrots and typically frosted with cream cheese. <strong>340 calories</strong>.
        <div>Price: $5.50</div>
        <button class="add-to-cart" onclick="addToCart('Carrot Cake', 5.50)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Carrot Cake')">Remove</button>
    </div>
    <!-- Vanilla Ice Cream -->
    <div class="card">
        <img class="image" src="images/vanilla icecream.webp" alt="Vanilla Ice Cream" width="150"><br>
        <span class="item">Vanilla Ice Cream:</span> Smooth classic vanilla. <strong>210 calories</strong>.
        <div>Price: $3.00</div>
        <button class="add-to-cart" onclick="addToCart('Vanilla Ice Cream', 3.00)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Vanilla Ice Cream')">Remove</button>
    </div>
                
    <!-- Mint Chocolate Chip Ice Cream -->
    <div class="card">
        <img class="image" src="images/mint chocolate chip icecream.jpeg" alt="Mint Chocolate Chip Ice Cream" width="150"><br>
        <span class="item">Mint Chocolate Chip Ice Cream:</span> Refreshing mint with dark chocolate chips. <strong>230 calories</strong>.
        <div>Price: $4.00</div>
        <button class="add-to-cart" onclick="addToCart('Mint Chocolate Chip Ice Cream', 4.00)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Mint Chocolate Chip Ice Cream')">Remove</button>
    </div>
                
    <!-- Rocky Road Ice Cream -->
    <div class="card">
        <img class="image" src="images/rocky road icecream.jpeg" alt="Rocky Road Ice Cream" width="150"><br>
        <span class="item">Rocky Road Ice Cream:</span> Chocolate ice cream with marshmallows and almonds. <strong>260 calories</strong>.
        <div>Price: $4.50</div>
        <button class="add-to-cart" onclick="addToCart('Rocky Road Ice Cream', 4.50)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Rocky Road Ice Cream')">Remove</button>
    </div>
                
    <!-- Strawberry Ice Cream -->
    <div class="card">
        <img class="image" src="images/strawberry icecream.jpeg" alt="Strawberry Ice Cream" width="150"><br>
        <span class="item">Strawberry Ice Cream:</span> Made with real strawberries. <strong>220 calories</strong>.
        <div>Price: $3.50</div>
        <button class="add-to-cart" onclick="addToCart('Strawberry Ice Cream', 3.50)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Strawberry Ice Cream')">Remove</button>
    </div>
            
    <!-- Lemon Sorbet -->
    <div class="card">
        <img class="image" src="images/lemon sorbet.jpeg" alt="Lemon Sorbet" width="150"><br>
        <span class="item">Lemon Sorbet:</span> Light and refreshing with a tart lemon flavor. <strong>180 calories</strong>.
        <div>Price: $3.00</div>
        <button class="add-to-cart" onclick="addToCart('Lemon Sorbet', 3.00)">Add</button>
        <button class="remove-from-cart" onclick="removeFromCart('Lemon Sorbet')">Remove</button>
    </div>        
        `
    };
}
