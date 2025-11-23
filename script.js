// Goko Hostel Gokarna - Actual Menu Data
// Global variables
let currentCategory = null;
let currentDish = null; // For modal
let cart = []; // Cart items array

// Cart item structure: { categoryKey, dishIndex, name, price, quantity, image }

// Kitchen WhatsApp Configuration
// Replace with your actual WhatsApp number (with country code, no + or spaces)
const KITCHEN_WHATSAPP = "919741707136";

const menuData = {
    breakfast: {
        name: "All-Day Breakfast",
        icon: "🍳",
        description: "Breakfast served all day",
        dishes: [
            {
                name: "Omelette",
                price: "₹80",
                description: "Classic fluffy omelette",
                tags: ["veg"],
                ingredients: ["Eggs", "Butter", "Salt", "Pepper"],
                image: "images/butter-naan.jpg"
            },
            {
                name: "Masala Omelette",
                price: "₹110",
                description: "Spiced Indian-style omelette",
                tags: ["veg"],
                ingredients: ["Eggs", "Onions", "Tomatoes", "Green chili", "Spices"],
                image: "images/garlic-naan.jpg"
            },
            {
                name: "Scrambled Eggs",
                price: "₹80",
                description: "Soft scrambled eggs",
                tags: ["veg"],
                ingredients: ["Eggs", "Butter", "Milk", "Salt", "Pepper"],
                image: "images/tandoori-roti.jpg"
            },
            {
                name: "Sunny-side Up",
                price: "₹100",
                description: "Perfectly fried sunny-side up eggs",
                tags: ["veg"],
                ingredients: ["Eggs", "Butter", "Salt", "Pepper"],
                image: "images/cheese-naan.jpg"
            },
            {
                name: "Boiled Eggs",
                price: "₹70",
                description: "Perfectly boiled eggs",
                tags: ["veg"],
                ingredients: ["Eggs"],
                image: "images/kashmiri-naan.jpg"
            },
            {
                name: "Toast",
                price: "₹30",
                description: "Crispy toasted bread",
                tags: ["veg"],
                ingredients: ["Bread", "Butter"],
                image: "images/butter-naan.jpg"
            },
            {
                name: "Maggi",
                price: "₹80",
                description: "Classic instant noodles",
                tags: ["veg"],
                ingredients: ["Maggi noodles", "Masala", "Vegetables"],
                image: "images/fried-rice.jpg"
            },
            {
                name: "Cheese Maggi",
                price: "₹120",
                description: "Maggi with cheese topping",
                tags: ["veg"],
                ingredients: ["Maggi noodles", "Cheese", "Masala"],
                image: "images/fried-rice.jpg"
            },
            {
                name: "Veg. Maggi",
                price: "₹100",
                description: "Maggi with vegetables",
                tags: ["veg"],
                ingredients: ["Maggi noodles", "Mixed vegetables", "Masala"],
                image: "images/fried-rice.jpg"
            },
            {
                name: "Egg Maggi",
                price: "₹150",
                description: "Maggi with egg",
                tags: ["veg"],
                ingredients: ["Maggi noodles", "Egg", "Masala"],
                image: "images/egg-fried-rice.jpg"
            },
            {
                name: "Chicken Maggi",
                price: "₹160",
                description: "Maggi with chicken",
                tags: ["non-veg"],
                ingredients: ["Maggi noodles", "Chicken", "Masala"],
                image: "images/chicken-biryani.jpg"
            },
            {
                name: "Poori Bhaji",
                price: "₹150",
                description: "Fluffy pooris with potato curry",
                tags: ["veg"],
                ingredients: ["Whole wheat flour", "Potatoes", "Spices"],
                image: "images/tandoori-roti.jpg"
            },
            {
                name: "Chole Bhature",
                price: "₹170",
                description: "Fluffy bhature with chickpea curry",
                tags: ["veg"],
                ingredients: ["All-purpose flour", "Chickpeas", "Spices"],
                image: "images/chana-masala.jpg"
            },
            {
                name: "Aloo Paratha",
                price: "₹120",
                description: "Potato stuffed flatbread",
                tags: ["veg"],
                ingredients: ["Wheat flour", "Potatoes", "Spices", "Butter"],
                image: "images/tandoori-roti.jpg"
            },
            {
                name: "Gobi Paratha",
                price: "₹130",
                description: "Cauliflower stuffed flatbread",
                tags: ["veg"],
                ingredients: ["Wheat flour", "Cauliflower", "Spices", "Butter"],
                image: "images/tandoori-roti.jpg"
            },
            {
                name: "Paneer Paratha",
                price: "₹170",
                description: "Cottage cheese stuffed flatbread",
                tags: ["veg"],
                ingredients: ["Wheat flour", "Paneer", "Spices", "Butter"],
                image: "images/paneer-tikka.jpg"
            },
            {
                name: "Mix Paratha",
                price: "₹160",
                description: "Mixed vegetable stuffed flatbread",
                tags: ["veg"],
                ingredients: ["Wheat flour", "Mixed vegetables", "Spices", "Butter"],
                image: "images/tandoori-roti.jpg"
            },
            {
                name: "Honey Crepes",
                price: "₹150",
                description: "Sweet crepes with honey",
                tags: ["veg"],
                ingredients: ["Flour", "Milk", "Eggs", "Honey"],
                image: "images/chocolate-brownie.jpg"
            },
            {
                name: "Banana Crepes",
                price: "₹160",
                description: "Crepes with banana filling",
                tags: ["veg"],
                ingredients: ["Flour", "Milk", "Eggs", "Banana"],
                image: "images/chocolate-brownie.jpg"
            },
            {
                name: "Nutella Crepes",
                price: "₹200",
                description: "Crepes with Nutella spread",
                tags: ["veg"],
                ingredients: ["Flour", "Milk", "Eggs", "Nutella"],
                image: "images/chocolate-brownie.jpg"
            }
        ]
    },
    beverages_hot: {
        name: "Hot Beverages",
        icon: "☕",
        description: "Fresh hot drinks",
        dishes: [
            {
                name: "Ginger Tea",
                price: "₹40",
                description: "Refreshing ginger-infused tea",
                tags: ["veg"],
                ingredients: ["Tea", "Ginger", "Sugar", "Milk"],
                image: "images/masala-chai.jpg"
            },
            {
                name: "Masala Tea",
                price: "₹50",
                description: "Spiced Indian tea",
                tags: ["veg"],
                ingredients: ["Tea", "Spices", "Sugar", "Milk"],
                image: "images/masala-chai.jpg"
            },
            {
                name: "Black Tea",
                price: "₹20",
                description: "Simple black tea",
                tags: ["veg"],
                ingredients: ["Tea", "Sugar"],
                image: "images/masala-chai.jpg"
            },
            {
                name: "Green Tea",
                price: "₹40",
                description: "Healthy green tea",
                tags: ["veg"],
                ingredients: ["Green tea"],
                image: "images/masala-chai.jpg"
            },
            {
                name: "Honey Ginger Lemon Tea",
                price: "₹40",
                description: "Soothing honey ginger lemon tea",
                tags: ["veg"],
                ingredients: ["Tea", "Honey", "Ginger", "Lemon"],
                image: "images/masala-chai.jpg"
            },
            {
                name: "Milk Tea",
                price: "₹30",
                description: "Classic milk tea",
                tags: ["veg"],
                ingredients: ["Tea", "Milk", "Sugar"],
                image: "images/masala-chai.jpg"
            },
            {
                name: "Milk Coffee",
                price: "₹40",
                description: "Hot milk coffee",
                tags: ["veg"],
                ingredients: ["Coffee", "Milk", "Sugar"],
                image: "images/cold-coffee.jpg"
            },
            {
                name: "Hazelnut Coffee",
                price: "₹60",
                description: "Coffee with hazelnut flavor",
                tags: ["veg"],
                ingredients: ["Coffee", "Hazelnut", "Milk", "Sugar"],
                image: "images/cold-coffee.jpg"
            },
            {
                name: "Vanilla Coffee",
                price: "₹60",
                description: "Coffee with vanilla flavor",
                tags: ["veg"],
                ingredients: ["Coffee", "Vanilla", "Milk", "Sugar"],
                image: "images/cold-coffee.jpg"
            },
            {
                name: "Hot Chocolate",
                price: "₹80",
                description: "Rich hot chocolate",
                tags: ["veg"],
                ingredients: ["Chocolate", "Milk", "Sugar"],
                image: "images/chocolate-brownie.jpg"
            },
            {
                name: "Bournvita",
                price: "₹50",
                description: "Hot Bournvita drink",
                tags: ["veg"],
                ingredients: ["Bournvita", "Milk", "Sugar"],
                image: "images/cold-coffee.jpg"
            },
            {
                name: "Milk",
                price: "₹40",
                description: "Hot or cold milk",
                tags: ["veg"],
                ingredients: ["Milk"],
                image: "images/mango-lassi.jpg"
            }
        ]
    },
    beverages_cold: {
        name: "Cold Beverages",
        icon: "🥤",
        description: "Refreshing cold drinks",
        dishes: [
            {
                name: "Cold Coffee",
                price: "₹150",
                description: "Chilled coffee with milk and ice cream",
                tags: ["veg"],
                ingredients: ["Coffee", "Milk", "Ice cream", "Sugar"],
                image: "images/cold-coffee.jpg"
            },
            {
                name: "Oreo Milkshake",
                price: "₹170",
                description: "Creamy Oreo milkshake",
                tags: ["veg"],
                ingredients: ["Oreo cookies", "Milk", "Ice cream", "Sugar"],
                image: "images/ice-cream.jpg"
            },
            {
                name: "KitKat Milkshake",
                price: "₹160",
                description: "Chocolate KitKat milkshake",
                tags: ["veg"],
                ingredients: ["KitKat", "Milk", "Ice cream", "Sugar"],
                image: "images/ice-cream.jpg"
            },
            {
                name: "Brownie Milkshake",
                price: "₹190",
                description: "Rich brownie milkshake",
                tags: ["veg"],
                ingredients: ["Brownie", "Milk", "Ice cream", "Sugar"],
                image: "images/chocolate-brownie.jpg"
            },
            {
                name: "Iced Tea",
                price: "₹150",
                description: "Refreshing iced tea",
                tags: ["veg"],
                ingredients: ["Tea", "Ice", "Lemon", "Sugar"],
                image: "images/fresh-lime-soda.jpg"
            },
            {
                name: "Fresh Lime Water/ Soda",
                price: "₹50/70",
                description: "Fresh lime with water or soda",
                tags: ["veg"],
                ingredients: ["Lime", "Water/Soda", "Sugar", "Salt"],
                image: "images/fresh-lime-soda.jpg"
            },
            {
                name: "Watermelon/ Orange/ Pineapple Juice",
                price: "₹120",
                description: "Fresh fruit juice",
                tags: ["veg"],
                ingredients: ["Fresh fruit", "Sugar"],
                image: "images/mango-lassi.jpg"
            },
            {
                name: "Kokam Sharbat",
                price: "₹70",
                description: "Traditional kokam drink",
                tags: ["veg"],
                ingredients: ["Kokam", "Sugar", "Spices"],
                image: "images/sweet-lassi.jpg"
            },
            {
                name: "Roohafza Shake",
                price: "₹200",
                description: "Rose-flavored milkshake",
                tags: ["veg"],
                ingredients: ["Roohafza", "Milk", "Ice cream"],
                image: "images/sweet-lassi.jpg"
            },
            {
                name: "Chocolate Shake",
                price: "₹150",
                description: "Classic chocolate milkshake",
                tags: ["veg"],
                ingredients: ["Chocolate", "Milk", "Ice cream"],
                image: "images/ice-cream.jpg"
            },
            {
                name: "Aerated Bottled Beverages",
                price: "MRP",
                description: "Soft drinks",
                tags: ["veg"],
                ingredients: ["Carbonated beverage"],
                image: "images/fresh-lime-soda.jpg"
            }
        ]
    },
    sandwiches: {
        name: "Sandwiches",
        icon: "🥪",
        description: "Served with chips",
        dishes: [
            {
                name: "Veg. Club",
                price: "₹200",
                description: "Classic vegetable club sandwich",
                tags: ["veg"],
                ingredients: ["Bread", "Vegetables", "Cheese", "Mayo", "Chips"],
                image: "images/spring-rolls.jpg"
            },
            {
                name: "Veg. Cheese",
                price: "₹170",
                description: "Grilled vegetable cheese sandwich",
                tags: ["veg"],
                ingredients: ["Bread", "Vegetables", "Cheese", "Butter", "Chips"],
                image: "images/cheese-naan.jpg"
            },
            {
                name: "Paneer Bhurji",
                price: "₹200",
                description: "Scrambled paneer sandwich",
                tags: ["veg"],
                ingredients: ["Bread", "Paneer", "Spices", "Butter", "Chips"],
                image: "images/paneer-butter-masala.jpg"
            },
            {
                name: "Bombay",
                price: "₹170",
                description: "Spiced Bombay-style sandwich",
                tags: ["veg"],
                ingredients: ["Bread", "Potato", "Chutneys", "Spices", "Chips"],
                image: "images/chana-masala.jpg"
            },
            {
                name: "Corn & Cheese S/w",
                price: "₹200",
                description: "Sweet corn and cheese sandwich",
                tags: ["veg"],
                ingredients: ["Bread", "Corn", "Cheese", "Mayo", "Chips"],
                image: "images/cheese-naan.jpg"
            },
            {
                name: "Potato Sandwich",
                price: "₹150",
                description: "Spiced potato sandwich",
                tags: ["veg"],
                ingredients: ["Bread", "Potato", "Spices", "Butter", "Chips"],
                image: "images/tandoori-roti.jpg"
            },
            {
                name: "Peri-peri Chicken",
                price: "₹240",
                description: "Spicy peri-peri chicken sandwich",
                tags: ["non-veg", "spicy"],
                ingredients: ["Bread", "Chicken", "Peri-peri sauce", "Vegetables", "Chips"],
                image: "images/chicken-tikka.jpg"
            },
            {
                name: "Tandoori Chicken",
                price: "₹240",
                description: "Tandoori chicken sandwich",
                tags: ["non-veg"],
                ingredients: ["Bread", "Tandoori chicken", "Mint chutney", "Vegetables", "Chips"],
                image: "images/chicken-tikka.jpg"
            },
            {
                name: "Tuna",
                price: "₹280",
                description: "Tuna fish sandwich",
                tags: ["non-veg"],
                ingredients: ["Bread", "Tuna", "Mayo", "Vegetables", "Chips"],
                image: "images/fish-tikka.jpg"
            }
        ]
    },
    appetizers: {
        name: "Appetizers",
        icon: "🍟",
        description: "Starters and snacks",
        dishes: [
            {
                name: "Crispy Corn",
                price: "₹150",
                description: "Crispy fried corn kernels",
                tags: ["veg"],
                ingredients: ["Corn", "Spices", "Flour"],
                image: "images/vegetable-samosa.jpg"
            },
            {
                name: "Corn Chat",
                price: "₹140",
                description: "Spicy corn chat",
                tags: ["veg"],
                ingredients: ["Corn", "Onions", "Spices", "Lemon"],
                image: "images/vegetable-samosa.jpg"
            },
            {
                name: "French Fries (Salted/ Peri-peri)",
                price: "₹150/160",
                description: "Crispy French fries",
                tags: ["veg"],
                ingredients: ["Potatoes", "Salt/Peri-peri"],
                image: "images/spring-rolls.jpg"
            },
            {
                name: "Chicken Wings (Buffalo/ Peri-peri)",
                price: "₹280/270",
                description: "Spicy chicken wings",
                tags: ["non-veg", "spicy"],
                ingredients: ["Chicken wings", "Spices", "Sauce"],
                image: "images/chicken-wings.jpg"
            },
            {
                name: "Goko Special Fiery Wings",
                price: "₹300",
                description: "Extra spicy signature wings",
                tags: ["non-veg", "spicy"],
                ingredients: ["Chicken wings", "Special spicy sauce"],
                image: "images/chicken-wings.jpg"
            },
            {
                name: "Cheese Jalapeño Poppers",
                price: "₹250",
                description: "Cheese-stuffed jalapeño poppers",
                tags: ["veg", "spicy"],
                ingredients: ["Jalapeños", "Cheese", "Breadcrumbs"],
                image: "images/cheese-naan.jpg"
            },
            {
                name: "Cheese Garlic Toast",
                price: "₹180",
                description: "Garlic bread with cheese",
                tags: ["veg"],
                ingredients: ["Bread", "Garlic", "Cheese", "Butter"],
                image: "images/cheese-garlic-naan.jpg"
            },
            {
                name: "Crispy Chilli Babycorn",
                price: "₹240",
                description: "Spicy crispy babycorn",
                tags: ["veg", "spicy"],
                ingredients: ["Babycorn", "Chilies", "Sauces", "Spices"],
                image: "images/vegetable-samosa.jpg"
            },
            {
                name: "Honey Chilli Potato",
                price: "₹200",
                description: "Sweet and spicy potato",
                tags: ["veg"],
                ingredients: ["Potatoes", "Honey", "Chilies", "Sauces"],
                image: "images/spring-rolls.jpg"
            },
            {
                name: "Gobi Manchurian",
                price: "₹180",
                description: "Indo-Chinese cauliflower",
                tags: ["veg"],
                ingredients: ["Cauliflower", "Sauces", "Spices"],
                image: "images/hara-bhara-kabab.jpg"
            },
            {
                name: "Chilli Paneer",
                price: "₹220",
                description: "Spicy paneer in chili sauce",
                tags: ["veg", "spicy"],
                ingredients: ["Paneer", "Bell peppers", "Chilies", "Sauces"],
                image: "images/paneer-tikka.jpg"
            },
            {
                name: "Deviled Eggs",
                price: "₹200",
                description: "Stuffed boiled eggs",
                tags: ["veg"],
                ingredients: ["Eggs", "Mayo", "Spices"],
                image: "images/egg-fried-rice.jpg"
            },
            {
                name: "Chicken Popcorn",
                price: "₹240",
                description: "Bite-sized crispy chicken",
                tags: ["non-veg"],
                ingredients: ["Chicken", "Breadcrumbs", "Spices"],
                image: "images/chicken-tikka.jpg"
            },
            {
                name: "Chilli Chicken",
                price: "₹240",
                description: "Spicy chicken in chili sauce",
                tags: ["non-veg", "spicy"],
                ingredients: ["Chicken", "Bell peppers", "Chilies", "Sauces"],
                image: "images/kadai-chicken.jpg"
            },
            {
                name: "Butter Garlic Prawn",
                price: "SP",
                description: "Prawns in butter garlic sauce",
                tags: ["non-veg"],
                ingredients: ["Prawns", "Butter", "Garlic", "Spices"],
                image: "images/fish-tikka.jpg"
            },
            {
                name: "Lemon Butter Fish",
                price: "SP",
                description: "Fish in lemon butter sauce",
                tags: ["non-veg"],
                ingredients: ["Fish", "Lemon", "Butter", "Herbs"],
                image: "images/fish-tikka.jpg"
            },
            {
                name: "Peanut Masala",
                price: "₹100",
                description: "Spiced roasted peanuts",
                tags: ["veg"],
                ingredients: ["Peanuts", "Spices", "Onions", "Lemon"],
                image: "images/chana-masala.jpg"
            },
            {
                name: "Onion/ Potato/ Mix Pakora",
                price: "₹150/150/170",
                description: "Crispy fritters",
                tags: ["veg"],
                ingredients: ["Onion/Potato/Mix", "Gram flour", "Spices"],
                image: "images/vegetable-samosa.jpg"
            },
            {
                name: "Chicken Kebab",
                price: "₹220",
                description: "Grilled chicken kebab",
                tags: ["non-veg"],
                ingredients: ["Chicken", "Yogurt", "Spices"],
                image: "images/chicken-tikka.jpg"
            },
            {
                name: "Chilli Cheese Toast",
                price: "₹180",
                description: "Spicy cheese toast",
                tags: ["veg", "spicy"],
                ingredients: ["Bread", "Cheese", "Chilies", "Spices"],
                image: "images/cheese-garlic-naan.jpg"
            },
            {
                name: "Prawn Rava Fry",
                price: "SP",
                description: "Semolina coated fried prawns",
                tags: ["non-veg"],
                ingredients: ["Prawns", "Rava", "Spices"],
                image: "images/fish-tikka.jpg"
            },
            {
                name: "Fish Fry (Masala/ Rava)",
                price: "SP",
                description: "Fried fish fillet",
                tags: ["non-veg"],
                ingredients: ["Fish", "Spices", "Rava/Masala"],
                image: "images/fish-tikka.jpg"
            }
        ]
    },
    bowls: {
        name: "Bowls",
        icon: "🍲",
        description: "Hearty bowl meals",
        dishes: [
            {
                name: "Rajma Chawal",
                price: "₹190",
                description: "Kidney beans curry with rice",
                tags: ["veg"],
                ingredients: ["Rajma", "Rice", "Tomatoes", "Spices"],
                image: "images/dal-makhani.jpg"
            },
            {
                name: "Chole Chawal",
                price: "₹170",
                description: "Chickpea curry with rice",
                tags: ["veg"],
                ingredients: ["Chickpeas", "Rice", "Spices"],
                image: "images/chana-masala.jpg"
            },
            {
                name: "Dal Makhani Rice",
                price: "₹170",
                description: "Creamy dal with rice",
                tags: ["veg"],
                ingredients: ["Black lentils", "Rice", "Butter", "Cream"],
                image: "images/dal-makhani.jpg"
            },
            {
                name: "Khichdi",
                price: "₹150",
                description: "Rice and lentil porridge",
                tags: ["veg"],
                ingredients: ["Rice", "Lentils", "Spices", "Ghee"],
                image: "images/jeera-rice.jpg"
            },
            {
                name: "Paneer Masala Rice",
                price: "₹230",
                description: "Paneer curry with rice",
                tags: ["veg"],
                ingredients: ["Paneer", "Rice", "Tomatoes", "Cream", "Spices"],
                image: "images/paneer-butter-masala.jpg"
            },
            {
                name: "Home-made Chicken Curry",
                price: "₹240",
                description: "Traditional chicken curry with rice",
                tags: ["non-veg"],
                ingredients: ["Chicken", "Rice", "Onions", "Tomatoes", "Spices"],
                image: "images/butter-chicken.jpg"
            },
            {
                name: "Fish Curry",
                price: "SP",
                description: "Coastal fish curry with rice",
                tags: ["non-veg"],
                ingredients: ["Fish", "Rice", "Coconut", "Spices"],
                image: "images/fish-tikka.jpg"
            },
            {
                name: "Prawn Rice",
                price: "SP",
                description: "Prawn curry with rice",
                tags: ["non-veg"],
                ingredients: ["Prawns", "Rice", "Spices"],
                image: "images/fish-tikka.jpg"
            }
        ]
    },
    salads: {
        name: "Salads",
        icon: "🥗",
        description: "Fresh healthy salads",
        dishes: [
            {
                name: "Caesar Salad",
                price: "₹210",
                description: "Classic Caesar with croutons and parmesan",
                tags: ["veg"],
                ingredients: ["Romaine lettuce", "Parmesan", "Croutons", "Caesar dressing"],
                image: "images/caesar-salad.jpg"
            },
            {
                name: "Green Salad",
                price: "₹100",
                description: "Fresh mixed greens",
                tags: ["veg"],
                ingredients: ["Mixed greens", "Vegetables", "Dressing"],
                image: "images/greek-salad.jpg"
            },
            {
                name: "Fruit Salad",
                price: "₹150",
                description: "Fresh seasonal fruits",
                tags: ["veg"],
                ingredients: ["Seasonal fruits"],
                image: "images/greek-salad.jpg"
            },
            {
                name: "Red-Hot Salad",
                price: "₹150",
                description: "Spicy salad with chilies",
                tags: ["veg", "spicy"],
                ingredients: ["Mixed vegetables", "Chilies", "Spices"],
                image: "images/asian-noodle-salad.jpg"
            },
            {
                name: "Tuna Salad",
                price: "₹270",
                description: "Fresh tuna with greens",
                tags: ["non-veg"],
                ingredients: ["Tuna", "Mixed greens", "Vegetables", "Dressing"],
                image: "images/grilled-chicken-salad.jpg"
            }
        ]
    },
    pizza: {
        name: "Pizza",
        icon: "🍕",
        description: "Wood-fired pizzas",
        dishes: [
            {
                name: "Margarita",
                price: "₹270",
                description: "Classic tomato and mozzarella",
                tags: ["veg"],
                ingredients: ["Pizza base", "Tomato sauce", "Mozzarella", "Basil"],
                image: "images/cheese-naan.jpg"
            },
            {
                name: "Country Special",
                price: "₹320",
                description: "Loaded vegetable pizza",
                tags: ["veg"],
                ingredients: ["Pizza base", "Mixed vegetables", "Cheese", "Sauce"],
                image: "images/paneer-butter-masala.jpg"
            },
            {
                name: "Farmhouse",
                price: "₹340",
                description: "Fresh vegetable farmhouse pizza",
                tags: ["veg"],
                ingredients: ["Pizza base", "Capsicum", "Mushrooms", "Onions", "Cheese"],
                image: "images/paneer-butter-masala.jpg"
            },
            {
                name: "Tandoori Chicken",
                price: "₹350",
                description: "Tandoori chicken pizza",
                tags: ["non-veg"],
                ingredients: ["Pizza base", "Tandoori chicken", "Onions", "Cheese"],
                image: "images/chicken-tikka-masala.jpg"
            },
            {
                name: "Peri-peri Chicken",
                price: "₹360",
                description: "Spicy peri-peri chicken pizza",
                tags: ["non-veg", "spicy"],
                ingredients: ["Pizza base", "Chicken", "Peri-peri sauce", "Cheese"],
                image: "images/kadai-chicken.jpg"
            },
            {
                name: "BBQ Chicken",
                price: "₹360",
                description: "BBQ chicken pizza",
                tags: ["non-veg"],
                ingredients: ["Pizza base", "BBQ chicken", "Onions", "Cheese"],
                image: "images/chicken-tikka-masala.jpg"
            }
        ]
    },
    pasta: {
        name: "Pasta",
        icon: "🍝",
        description: "Penne/Spaghetti/Fusilli - Veg/Non Veg",
        dishes: [
            {
                name: "Alfredo",
                price: "₹270/320",
                description: "Creamy white sauce pasta",
                tags: ["veg"],
                ingredients: ["Pasta", "Cream", "Cheese", "Garlic", "Butter"],
                image: "images/paneer-butter-masala.jpg"
            },
            {
                name: "Arrabiata",
                price: "₹290/340",
                description: "Spicy tomato sauce pasta",
                tags: ["veg", "spicy"],
                ingredients: ["Pasta", "Tomatoes", "Chilies", "Garlic", "Olive oil"],
                image: "images/chana-masala.jpg"
            },
            {
                name: "Panna Rosé",
                price: "₹290/340",
                description: "Pink sauce pasta",
                tags: ["veg"],
                ingredients: ["Pasta", "Tomato sauce", "Cream", "Cheese"],
                image: "images/paneer-butter-masala.jpg"
            },
            {
                name: "Mac & Cheese",
                price: "₹350/400",
                description: "Classic mac and cheese",
                tags: ["veg"],
                ingredients: ["Macaroni", "Cheese sauce", "Butter"],
                image: "images/cheese-naan.jpg"
            }
        ]
    },
    steak: {
        name: "Steak",
        icon: "🥩",
        description: "Served with Mashed Potatoes, Stir-fry Veggies & Gravy",
        dishes: [
            {
                name: "Herb-run Paneer Steak",
                price: "₹340",
                description: "Herb-marinated grilled paneer",
                tags: ["veg"],
                ingredients: ["Paneer", "Herbs", "Mashed potatoes", "Vegetables", "Gravy"],
                image: "images/paneer-tikka.jpg"
            },
            {
                name: "Tandoori Paneer Steak",
                price: "₹340",
                description: "Tandoori spiced paneer steak",
                tags: ["veg"],
                ingredients: ["Paneer", "Tandoori spices", "Mashed potatoes", "Vegetables", "Gravy"],
                image: "images/paneer-tikka.jpg"
            },
            {
                name: "Herb-run Chicken Steak",
                price: "₹390",
                description: "Herb-marinated grilled chicken",
                tags: ["non-veg"],
                ingredients: ["Chicken", "Herbs", "Mashed potatoes", "Vegetables", "Gravy"],
                image: "images/chicken-tikka.jpg"
            },
            {
                name: "Tandoori Chicken Steak",
                price: "₹390",
                description: "Tandoori spiced chicken steak",
                tags: ["non-veg"],
                ingredients: ["Chicken", "Tandoori spices", "Mashed potatoes", "Vegetables", "Gravy"],
                image: "images/chicken-tikka.jpg"
            }
        ]
    },
    chinese: {
        name: "Chinese",
        icon: "🥡",
        description: "Indo-Chinese favorites",
        dishes: [
            {
                name: "Veg Fried Rice",
                price: "₹200",
                description: "Mixed vegetable fried rice",
                tags: ["veg"],
                ingredients: ["Rice", "Mixed vegetables", "Soy sauce", "Spices"],
                image: "images/fried-rice.jpg"
            },
            {
                name: "Egg Fried Rice",
                price: "₹220",
                description: "Fried rice with egg",
                tags: ["veg"],
                ingredients: ["Rice", "Egg", "Vegetables", "Soy sauce"],
                image: "images/egg-fried-rice.jpg"
            },
            {
                name: "Chicken Fried Rice",
                price: "₹240",
                description: "Fried rice with chicken",
                tags: ["non-veg"],
                ingredients: ["Rice", "Chicken", "Vegetables", "Soy sauce"],
                image: "images/chicken-biryani.jpg"
            },
            {
                name: "Prawn Fried Rice",
                price: "SP",
                description: "Fried rice with prawns",
                tags: ["non-veg"],
                ingredients: ["Rice", "Prawns", "Vegetables", "Soy sauce"],
                image: "images/fish-tikka.jpg"
            },
            {
                name: "Veg. Noodles",
                price: "₹210",
                description: "Stir-fried vegetable noodles",
                tags: ["veg"],
                ingredients: ["Noodles", "Mixed vegetables", "Soy sauce", "Spices"],
                image: "images/asian-noodle-salad.jpg"
            },
            {
                name: "Egg Noodles",
                price: "₹210",
                description: "Noodles with egg",
                tags: ["veg"],
                ingredients: ["Noodles", "Egg", "Vegetables", "Soy sauce"],
                image: "images/asian-noodle-salad.jpg"
            },
            {
                name: "Chicken Noodles",
                price: "₹250",
                description: "Noodles with chicken",
                tags: ["non-veg"],
                ingredients: ["Noodles", "Chicken", "Vegetables", "Soy sauce"],
                image: "images/asian-noodle-salad.jpg"
            },
            {
                name: "Prawn Noodles",
                price: "SP",
                description: "Noodles with prawns",
                tags: ["non-veg"],
                ingredients: ["Noodles", "Prawns", "Vegetables", "Soy sauce"],
                image: "images/asian-noodle-salad.jpg"
            },
            {
                name: "Paneer Chilli Gravy",
                price: "₹230",
                description: "Paneer in spicy Chinese gravy",
                tags: ["veg", "spicy"],
                ingredients: ["Paneer", "Bell peppers", "Sauces", "Spices"],
                image: "images/paneer-tikka.jpg"
            },
            {
                name: "Mushroom Chilli Gravy",
                price: "₹260",
                description: "Mushrooms in spicy Chinese gravy",
                tags: ["veg", "spicy"],
                ingredients: ["Mushrooms", "Bell peppers", "Sauces", "Spices"],
                image: "images/hara-bhara-kabab.jpg"
            },
            {
                name: "Egg Chilli Gravy",
                price: "₹210",
                description: "Eggs in spicy Chinese gravy",
                tags: ["veg", "spicy"],
                ingredients: ["Eggs", "Bell peppers", "Sauces", "Spices"],
                image: "images/egg-fried-rice.jpg"
            },
            {
                name: "Chicken Chilli Gravy",
                price: "₹240",
                description: "Chicken in spicy Chinese gravy",
                tags: ["non-veg", "spicy"],
                ingredients: ["Chicken", "Bell peppers", "Sauces", "Spices"],
                image: "images/kadai-chicken.jpg"
            }
        ]
    },
    indian_mains: {
        name: "Indian Mains",
        icon: "🍛",
        description: "Traditional Indian curries",
        dishes: [
            {
                name: "Chana Masala",
                price: "₹180",
                description: "Spiced chickpea curry",
                tags: ["veg"],
                ingredients: ["Chickpeas", "Tomatoes", "Onions", "Spices"],
                image: "images/chana-masala.jpg"
            },
            {
                name: "Dal Fry",
                price: "₹150",
                description: "Tempered lentils",
                tags: ["veg"],
                ingredients: ["Lentils", "Onions", "Tomatoes", "Spices"],
                image: "images/dal-makhani.jpg"
            },
            {
                name: "Paneer Butter Masala",
                price: "₹230",
                description: "Paneer in rich tomato gravy",
                tags: ["veg"],
                ingredients: ["Paneer", "Tomatoes", "Butter", "Cream", "Spices"],
                image: "images/paneer-butter-masala.jpg"
            },
            {
                name: "Mushroom Masala",
                price: "₹250",
                description: "Mushrooms in spiced gravy",
                tags: ["veg"],
                ingredients: ["Mushrooms", "Tomatoes", "Onions", "Cream", "Spices"],
                image: "images/dal-makhani.jpg"
            },
            {
                name: "Mix Veg",
                price: "₹170",
                description: "Mixed vegetable curry",
                tags: ["veg"],
                ingredients: ["Mixed vegetables", "Tomatoes", "Spices"],
                image: "images/paneer-butter-masala.jpg"
            },
            {
                name: "Aloo Matar",
                price: "₹170",
                description: "Potato and peas curry",
                tags: ["veg"],
                ingredients: ["Potatoes", "Peas", "Tomatoes", "Spices"],
                image: "images/chana-masala.jpg"
            },
            {
                name: "Matar Paneer",
                price: "₹220",
                description: "Peas and paneer curry",
                tags: ["veg"],
                ingredients: ["Paneer", "Peas", "Tomatoes", "Cream", "Spices"],
                image: "images/paneer-butter-masala.jpg"
            },
            {
                name: "Egg Curry",
                price: "₹180",
                description: "Boiled eggs in spiced gravy",
                tags: ["veg"],
                ingredients: ["Eggs", "Tomatoes", "Onions", "Spices"],
                image: "images/egg-fried-rice.jpg"
            },
            {
                name: "Egg Keema",
                price: "₹220",
                description: "Scrambled eggs with spices",
                tags: ["veg"],
                ingredients: ["Eggs", "Onions", "Tomatoes", "Spices"],
                image: "images/egg-fried-rice.jpg"
            },
            {
                name: "Kadhai Paneer",
                price: "₹240",
                description: "Paneer with bell peppers in kadhai",
                tags: ["veg"],
                ingredients: ["Paneer", "Bell peppers", "Tomatoes", "Spices"],
                image: "images/paneer-tikka.jpg"
            },
            {
                name: "Butter Chicken Masala",
                price: "₹260",
                description: "Classic butter chicken",
                tags: ["non-veg"],
                ingredients: ["Chicken", "Tomatoes", "Butter", "Cream", "Spices"],
                image: "images/butter-chicken.jpg"
            },
            {
                name: "Kadhai Chicken",
                price: "₹250",
                description: "Chicken with bell peppers in kadhai",
                tags: ["non-veg"],
                ingredients: ["Chicken", "Bell peppers", "Tomatoes", "Spices"],
                image: "images/kadai-chicken.jpg"
            },
            {
                name: "Fish Curry",
                price: "SP",
                description: "Fresh fish in coastal curry",
                tags: ["non-veg"],
                ingredients: ["Fish", "Coconut", "Spices", "Tamarind"],
                image: "images/fish-tikka.jpg"
            },
            {
                name: "Prawn Masala",
                price: "SP",
                description: "Prawns in spiced masala",
                tags: ["non-veg"],
                ingredients: ["Prawns", "Tomatoes", "Onions", "Spices"],
                image: "images/fish-tikka.jpg"
            }
        ]
    },
    breads: {
        name: "Breads",
        icon: "🥖",
        description: "Fresh Indian breads",
        dishes: [
            {
                name: "Chapati",
                price: "₹20",
                description: "Whole wheat flatbread",
                tags: ["veg"],
                ingredients: ["Whole wheat flour", "Water", "Salt"],
                image: "images/tandoori-roti.jpg"
            },
            {
                name: "Butter Chapati",
                price: "₹30",
                description: "Chapati with butter",
                tags: ["veg"],
                ingredients: ["Whole wheat flour", "Butter"],
                image: "images/butter-naan.jpg"
            },
            {
                name: "Ghee Paratha",
                price: "₹60",
                description: "Layered flatbread with ghee",
                tags: ["veg"],
                ingredients: ["Wheat flour", "Ghee"],
                image: "images/butter-naan.jpg"
            },
            {
                name: "Naan",
                price: "₹60",
                description: "Leavened flatbread",
                tags: ["veg"],
                ingredients: ["All-purpose flour", "Yogurt", "Yeast"],
                image: "images/butter-naan.jpg"
            },
            {
                name: "Butter Naan",
                price: "₹70",
                description: "Naan with butter",
                tags: ["veg"],
                ingredients: ["All-purpose flour", "Butter", "Yogurt"],
                image: "images/butter-naan.jpg"
            },
            {
                name: "Cheese Naan",
                price: "₹120",
                description: "Naan stuffed with cheese",
                tags: ["veg"],
                ingredients: ["All-purpose flour", "Cheese", "Butter"],
                image: "images/cheese-naan.jpg"
            },
            {
                name: "Cheese Garlic Naan",
                price: "₹140",
                description: "Cheese naan with garlic",
                tags: ["veg"],
                ingredients: ["All-purpose flour", "Cheese", "Garlic", "Butter"],
                image: "images/cheese-garlic-naan.jpg"
            }
        ]
    },
    rice: {
        name: "Rice",
        icon: "🍚",
        description: "Rice preparations",
        dishes: [
            {
                name: "Steam Rice",
                price: "₹80",
                description: "Plain steamed rice",
                tags: ["veg"],
                ingredients: ["Basmati rice"],
                image: "images/jeera-rice.jpg"
            },
            {
                name: "Jeera Rice",
                price: "₹100",
                description: "Cumin flavored rice",
                tags: ["veg"],
                ingredients: ["Basmati rice", "Cumin", "Ghee"],
                image: "images/jeera-rice.jpg"
            },
            {
                name: "Curd Rice",
                price: "₹140",
                description: "Rice with yogurt",
                tags: ["veg"],
                ingredients: ["Rice", "Yogurt", "Tempering"],
                image: "images/jeera-rice.jpg"
            },
            {
                name: "Ghee Rice",
                price: "₹140",
                description: "Fragrant ghee rice",
                tags: ["veg"],
                ingredients: ["Basmati rice", "Ghee", "Spices"],
                image: "images/jeera-rice.jpg"
            },
            {
                name: "Veg. Biryani",
                price: "₹200",
                description: "Aromatic vegetable biryani",
                tags: ["veg"],
                ingredients: ["Basmati rice", "Vegetables", "Spices", "Saffron"],
                image: "images/vegetable-biryani.jpg"
            },
            {
                name: "Egg Biryani",
                price: "₹220",
                description: "Biryani with boiled eggs",
                tags: ["veg"],
                ingredients: ["Basmati rice", "Eggs", "Spices", "Saffron"],
                image: "images/egg-fried-rice.jpg"
            },
            {
                name: "Chicken Biryani",
                price: "₹250",
                description: "Classic chicken biryani",
                tags: ["non-veg"],
                ingredients: ["Basmati rice", "Chicken", "Spices", "Saffron"],
                image: "images/chicken-biryani.jpg"
            },
            {
                name: "Prawn Biryani",
                price: "SP",
                description: "Biryani with prawns",
                tags: ["non-veg"],
                ingredients: ["Basmati rice", "Prawns", "Spices", "Saffron"],
                image: "images/mutton-biryani.jpg"
            }
        ]
    }
};

// Initialize the app
function init() {
    renderCategories();
    loadCartFromStorage();
    updateCartBadge();
}

// Render categories
function renderCategories() {
    const categoriesSection = document.getElementById('categories');
    categoriesSection.innerHTML = '';
    
    Object.keys(menuData).forEach(categoryKey => {
        const category = menuData[categoryKey];
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.onclick = () => showDishes(categoryKey);
        
        categoryCard.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        `;
        
        categoriesSection.appendChild(categoryCard);
    });
}

// Helper function to check if item is in cart and get quantity
function getItemQuantityInCart(categoryKey, dishIndex) {
    const item = cart.find(
        item => item.categoryKey === categoryKey && item.dishIndex === dishIndex
    );
    return item ? item.quantity : 0;
}

// Show dishes for a category
function showDishes(categoryKey, shouldScrollToTop = true) {
    currentCategory = categoryKey;
    const category = menuData[categoryKey];
    
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('dishes').classList.remove('hidden');
    document.getElementById('category-title').textContent = category.name;
    
    const dishesGrid = document.querySelector('.dishes-grid');
    dishesGrid.innerHTML = '';
    
    category.dishes.forEach((dish, index) => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.onclick = () => showDishModal(categoryKey, index);
        
        const tagsHTML = dish.tags.map(tag => 
            `<span class="tag ${tag}">${tag}</span>`
        ).join('');
        
        // Check if item is in cart
        const quantity = getItemQuantityInCart(categoryKey, index);
        
        let cartControlsHTML = '';
        if (quantity > 0) {
            // Show quantity controls for items in cart
            cartControlsHTML = `
                <div class="quantity-controls">
                    <button class="qty-btn minus" onclick="event.stopPropagation(); decrementItemFromMenu('${categoryKey}', ${index})">−</button>
                    <span class="qty-display">${quantity}</span>
                    <button class="qty-btn plus" onclick="event.stopPropagation(); addToCart('${categoryKey}', ${index})">+</button>
                </div>
            `;
        } else {
            // Show add to cart button
            cartControlsHTML = `
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${categoryKey}', ${index})">
                    Add to Cart
                </button>
            `;
        }
        
        dishCard.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" class="dish-image" loading="lazy">
            <div class="dish-content">
                <h4>${dish.name}</h4>
                <div class="price">${dish.price}</div>
                <div class="description">${dish.description}</div>
                <div class="tags">${tagsHTML}</div>
                ${cartControlsHTML}
            </div>
        `;
        
        dishesGrid.appendChild(dishCard);
    });
    
    // Only scroll to top when initially opening a category, not when refreshing
    if (shouldScrollToTop) {
        scrollToTop();
    }
}

// Show categories view
function showCategories() {
    document.getElementById('categories').classList.remove('hidden');
    document.getElementById('dishes').classList.add('hidden');
    currentCategory = null;
    // Scroll to top for better UX
    scrollToTop();
}

// Show dish modal with details
function showDishModal(categoryKey, dishIndex) {
    currentDish = { categoryKey, dishIndex };
    const dish = menuData[categoryKey].dishes[dishIndex];
    const modal = document.getElementById('dishModal');
    const modalBody = document.getElementById('modal-body');
    
    const tagsHTML = dish.tags.map(tag => 
        `<span class="tag ${tag}">${tag}</span>`
    ).join('');
    
    const ingredientsHTML = dish.ingredients.map(ingredient => 
        `<li>${ingredient}</li>`
    ).join('');
    
    modalBody.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="modal-image" loading="lazy">
        <h2>${dish.name}</h2>
        <div class="modal-price">${dish.price}</div>
        <div class="modal-tags">${tagsHTML}</div>
        <div class="modal-description">${dish.description}</div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>${ingredientsHTML}</ul>
        </div>
    `;
    
    // Update modal cart controls
    const modalControls = document.getElementById('modal-cart-controls');
    const quantity = getItemQuantityInCart(categoryKey, dishIndex);
    
    if (quantity > 0) {
        // Show quantity controls
        modalControls.innerHTML = `
            <div class="quantity-controls-modal">
                <button class="qty-btn-modal minus" onclick="decrementItemFromModal()">−</button>
                <span class="qty-display-modal">${quantity}</span>
                <button class="qty-btn-modal plus" onclick="addToCartFromModal()">+</button>
            </div>
        `;
    } else {
        // Show add to cart button
        modalControls.innerHTML = `
            <button class="add-to-cart-modal-btn" onclick="addToCartFromModal()">
                Add to Cart
            </button>
        `;
    }
    
    modal.style.display = 'block';
    // Prevent body scroll on mobile when modal is open
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('dishModal').style.display = 'none';
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('dishModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Add smooth scrolling to top when switching views
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Cart Functions

// Add item to cart
function addToCart(categoryKey, dishIndex) {
    const dish = menuData[categoryKey].dishes[dishIndex];
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(
        item => item.categoryKey === categoryKey && item.dishIndex === dishIndex
    );
    
    if (existingItemIndex !== -1) {
        // Increment quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item
        cart.push({
            categoryKey,
            dishIndex,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartBadge();
    showCartNotification();
    
    // Refresh the dishes view to update button states (without scrolling)
    if (currentCategory) {
        showDishes(currentCategory, false);
    }
}

// Decrement item quantity from menu view
function decrementItemFromMenu(categoryKey, dishIndex) {
    const existingItemIndex = cart.findIndex(
        item => item.categoryKey === categoryKey && item.dishIndex === dishIndex
    );
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity -= 1;
        
        if (cart[existingItemIndex].quantity <= 0) {
            // Remove item from cart
            cart.splice(existingItemIndex, 1);
        }
        
        saveCartToStorage();
        updateCartBadge();
        
        // Refresh the dishes view to update button states (without scrolling)
        if (currentCategory) {
            showDishes(currentCategory, false);
        }
        
        // Update cart display if open
        renderCart();
    }
}

// Add to cart from modal
function addToCartFromModal() {
    if (currentDish) {
        const dish = menuData[currentDish.categoryKey].dishes[currentDish.dishIndex];
        
        // Check if item already exists in cart
        const existingItemIndex = cart.findIndex(
            item => item.categoryKey === currentDish.categoryKey && item.dishIndex === currentDish.dishIndex
        );
        
        if (existingItemIndex !== -1) {
            // Increment quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // Add new item
            cart.push({
                categoryKey: currentDish.categoryKey,
                dishIndex: currentDish.dishIndex,
                name: dish.name,
                price: dish.price,
                image: dish.image,
                quantity: 1
            });
        }
        
        saveCartToStorage();
        updateCartBadge();
        showCartNotification();
        
        // Update modal controls
        const modalControls = document.getElementById('modal-cart-controls');
        const quantity = getItemQuantityInCart(currentDish.categoryKey, currentDish.dishIndex);
        
        modalControls.innerHTML = `
            <div class="quantity-controls-modal">
                <button class="qty-btn-modal minus" onclick="decrementItemFromModal()">−</button>
                <span class="qty-display-modal">${quantity}</span>
                <button class="qty-btn-modal plus" onclick="addToCartFromModal()">+</button>
            </div>
        `;
        
        // Refresh the dishes view to update button states (without scrolling)
        if (currentCategory) {
            showDishes(currentCategory, false);
        }
    }
}

// Decrement item from modal
function decrementItemFromModal() {
    if (currentDish) {
        const existingItemIndex = cart.findIndex(
            item => item.categoryKey === currentDish.categoryKey && item.dishIndex === currentDish.dishIndex
        );
        
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity -= 1;
            
            if (cart[existingItemIndex].quantity <= 0) {
                // Remove item from cart
                cart.splice(existingItemIndex, 1);
            }
            
            saveCartToStorage();
            updateCartBadge();
            
            // Update modal controls
            const modalControls = document.getElementById('modal-cart-controls');
            const quantity = getItemQuantityInCart(currentDish.categoryKey, currentDish.dishIndex);
            
            if (quantity > 0) {
                modalControls.innerHTML = `
                    <div class="quantity-controls-modal">
                        <button class="qty-btn-modal minus" onclick="decrementItemFromModal()">−</button>
                        <span class="qty-display-modal">${quantity}</span>
                        <button class="qty-btn-modal plus" onclick="addToCartFromModal()">+</button>
                    </div>
                `;
            } else {
                modalControls.innerHTML = `
                    <button class="add-to-cart-modal-btn" onclick="addToCartFromModal()">
                        Add to Cart
                    </button>
                `;
            }
            
            // Refresh the dishes view to update button states (without scrolling)
            if (currentCategory) {
                showDishes(currentCategory, false);
            }
            
            // Update cart display if open
            renderCart();
        }
    }
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartBadge();
    renderCart();
    
    // Refresh the dishes view to update button states (without scrolling)
    if (currentCategory) {
        showDishes(currentCategory, false);
    }
}

// Update item quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        saveCartToStorage();
        renderCart();
        
        // Refresh the dishes view to update button states (without scrolling)
        if (currentCategory) {
            showDishes(currentCategory, false);
        }
    }
}

// Show cart view
function showCart() {
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('dishes').classList.add('hidden');
    document.getElementById('cart').classList.remove('hidden');
    renderCart();
    scrollToTop();
}

// Close cart and return to previous view
function closeCart() {
    document.getElementById('cart').classList.add('hidden');
    
    if (currentCategory) {
        document.getElementById('dishes').classList.remove('hidden');
    } else {
        document.getElementById('categories').classList.remove('hidden');
    }
}

// Load saved customer details
function loadCustomerDetails() {
    const savedDetails = localStorage.getItem('gokoCustomerDetails');
    if (savedDetails) {
        const details = JSON.parse(savedDetails);
        const nameField = document.getElementById('customer-name');
        const mobileField = document.getElementById('customer-mobile');
        const roomField = document.getElementById('customer-room');
        
        if (nameField && details.name) nameField.value = details.name;
        if (mobileField && details.mobile) mobileField.value = details.mobile;
        if (roomField && details.room) roomField.value = details.room;
    }
}

// Save customer details
function saveCustomerDetails(name, mobile, room) {
    const details = { name, mobile, room };
    localStorage.setItem('gokoCustomerDetails', JSON.stringify(details));
}

// Render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartSummary = document.getElementById('cart-summary');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        cartEmpty.classList.remove('hidden');
        cartSummary.style.display = 'none';
        return;
    }
    
    cartEmpty.classList.add('hidden');
    cartSummary.style.display = 'block';
    
    // Load customer details when cart is shown
    loadCustomerDetails();
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        // Extract numeric price (handle SP and multi-price items)
        let priceNum = 0;
        if (item.price !== 'SP' && item.price !== 'MRP') {
            const priceMatch = item.price.match(/₹(\d+)/);
            if (priceMatch) {
                priceNum = parseFloat(priceMatch[1]);
            }
        }
        const totalPrice = priceNum * item.quantity;
        
        cartItem.innerHTML = `
            <div class="cart-item-clickable" onclick="openDishModalFromCart('${item.categoryKey}', ${item.dishIndex})" title="Click to view details">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name} <span class="view-details-hint">ℹ️</span></div>
                    <div class="cart-item-price">${item.price}${priceNum > 0 ? ` × ${item.quantity} = ₹${totalPrice}` : ''}</div>
                </div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)" aria-label="Decrease quantity">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)" aria-label="Increase quantity">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    updateCartSummary();
}

// Open dish modal from cart
function openDishModalFromCart(categoryKey, dishIndex) {
    showDishModal(categoryKey, dishIndex);
}

// Update cart summary with totals
function updateCartSummary() {
    let subtotal = 0;
    
    cart.forEach(item => {
        if (item.price !== 'SP' && item.price !== 'MRP') {
            const priceMatch = item.price.match(/₹(\d+)/);
            if (priceMatch) {
                const priceNum = parseFloat(priceMatch[1]);
                subtotal += priceNum * item.quantity;
            }
        }
    });
    
    const taxes = Math.round(subtotal * 0.05); // 5% tax
    const total = subtotal + taxes;
    
    document.getElementById('cart-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('cart-taxes').textContent = `₹${taxes}`;
    document.getElementById('cart-total').textContent = `₹${total}`;
}

// Update cart badge count
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    
    if (totalItems > 0) {
        badge.classList.add('pulse');
        setTimeout(() => badge.classList.remove('pulse'), 500);
    }
}

// Show notification when item added
function showCartNotification() {
    // Simple visual feedback - you can enhance this
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('gokoHostelCart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('gokoHostelCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Checkout function - Send order via WhatsApp
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Get customer details from form
    const customerName = document.getElementById('customer-name').value.trim();
    const customerMobile = document.getElementById('customer-mobile').value.trim();
    const customerRoom = document.getElementById('customer-room').value.trim();
    const specialInstructions = document.getElementById('special-instructions').value.trim();
    
    // Validate required fields
    if (!customerName) {
        alert('Please enter your name');
        document.getElementById('customer-name').focus();
        return;
    }
    
    if (!customerMobile) {
        alert('Please enter your mobile number');
        document.getElementById('customer-mobile').focus();
        return;
    }
    
    // Validate mobile number format (basic validation)
    const mobilePattern = /^[0-9]{10}$/;
    const cleanMobile = customerMobile.replace(/[\s\-\(\)]/g, '');
    if (cleanMobile.length < 10) {
        alert('Please enter a valid 10-digit mobile number');
        document.getElementById('customer-mobile').focus();
        return;
    }
    
    // Save customer details for future orders
    saveCustomerDetails(customerName, customerMobile, customerRoom);
    
    // Format order message for WhatsApp
    const orderMessage = formatOrderForWhatsApp(customerName, customerMobile, customerRoom, specialInstructions);
    
    // Send to WhatsApp
    sendOrderViaWhatsApp(orderMessage);
}

// Format order details for WhatsApp message
function formatOrderForWhatsApp(customerName, customerMobile, roomNumber, instructions) {
    let message = `🍽️ *NEW ORDER - GOKO HOSTEL*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    // Customer details
    message += `👤 *Customer:* ${customerName}\n`;
    message += `📱 *Mobile:* ${customerMobile}\n`;
    if (roomNumber) {
        message += `🏠 *Room:* ${roomNumber}\n`;
    }
    message += `🕐 *Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n`;
    message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    
    // Order items
    message += `\n📋 *ORDER DETAILS:*\n\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   Qty: ${item.quantity}\n`;
        
        // Handle different price formats
        if (item.price !== 'SP' && item.price !== 'MRP') {
            const priceMatch = item.price.match(/₹(\d+)/);
            if (priceMatch) {
                const priceNum = parseFloat(priceMatch[1]);
                const itemTotal = priceNum * item.quantity;
                message += `   Price: ${item.price} × ${item.quantity} = ₹${itemTotal}\n`;
            } else {
                message += `   Price: ${item.price}\n`;
            }
        } else {
            message += `   Price: ${item.price}\n`;
        }
        message += `\n`;
    });
    
    // Calculate totals
    let subtotal = 0;
    cart.forEach(item => {
        if (item.price !== 'SP' && item.price !== 'MRP') {
            const priceMatch = item.price.match(/₹(\d+)/);
            if (priceMatch) {
                const priceNum = parseFloat(priceMatch[1]);
                subtotal += priceNum * item.quantity;
            }
        }
    });
    
    const taxes = Math.round(subtotal * 0.05);
    const total = subtotal + taxes;
    
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `💰 *BILL SUMMARY:*\n`;
    message += `Subtotal: ₹${subtotal}\n`;
    message += `Taxes (5%): ₹${taxes}\n`;
    message += `*TOTAL: ₹${total}*\n`;
    
    // Special instructions
    if (instructions) {
        message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
        message += `\n📝 *Special Instructions:*\n${instructions}\n`;
    }
    
    message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    message += `\n✅ Please confirm this order!`;
    
    return message;
}

// Send order to kitchen via WhatsApp
function sendOrderViaWhatsApp(message) {
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${KITCHEN_WHATSAPP}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab/window
    window.open(whatsappURL, '_blank');
    
    // Show confirmation
    alert('Opening WhatsApp to send your order to the kitchen!\n\nYour order will be sent when you click Send in WhatsApp.');
    
    // Clear cart and form after successful order
    setTimeout(() => {
        const confirmClear = confirm('Order sent! Clear your cart and form?');
        if (confirmClear) {
            cart = [];
            saveCartToStorage();
            updateCartBadge();
            renderCart();
            
            // Refresh the dishes view to update button states (without scrolling)
            if (currentCategory) {
                showDishes(currentCategory, false);
            }
            
            // Clear form fields
            document.getElementById('customer-name').value = '';
            document.getElementById('customer-mobile').value = '';
            document.getElementById('customer-room').value = '';
            document.getElementById('special-instructions').value = '';
        }
    }, 2000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

