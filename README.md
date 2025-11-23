# 🌊 Goko Hostel Gokarna - Beach Menu Website

A beautiful, beach-themed, and responsive menu website for Goko Hostel in Gokarna. Experience coastal dining with ocean-inspired design and **the complete actual menu** with 155+ items from all-day breakfast to Indian mains, pizzas, pasta, and more!

## Features

- **Category Navigation**: Browse through 14 categories including:
  - All-Day Breakfast (20 items)
  - Hot & Cold Beverages (23 items)
  - Sandwiches, Appetizers, Bowls
  - Pizza, Pasta, Steak
  - Chinese, Indian Mains
  - Breads, Rice, Salads
  - **Total: 155+ menu items!**
- **Beautiful Food Images** 📸:
  - High-quality images for all 38 dishes
  - **Stored locally** for fast loading (no external dependencies!)
  - Originally sourced from Unsplash
  - Lazy loading for optimal performance
  - Hover zoom effect on dish cards
  - Large images in detail modal
  - Thumbnails in shopping cart
- **Detailed Dish View**: Click on any dish to view full details including ingredients, price, and dietary tags
- **Shopping Cart** 🛒: 
  - Add items to cart with one click
  - Adjust quantities (increase/decrease)
  - Remove items from cart
  - View cart total with taxes
  - Cart persists using localStorage (items saved even after closing browser)
  - Visual cart badge showing item count
  - Smooth animations when adding items
  - Thumbnails of items in cart
- **WhatsApp Order Integration** 📱:
  - Send orders directly to kitchen via WhatsApp
  - Automatic order formatting with customer details
  - Includes: Name, Table/Room, Time, Items, Total
  - Support for special instructions
  - Works on desktop (WhatsApp Web) and mobile
  - No additional app installation needed
  - Instant order notifications to kitchen
- **Fully Responsive Design**: Optimized for all devices
  - 📱 Mobile phones (portrait & landscape)
  - 📱 Tablets (iPad, Android tablets)
  - 💻 Laptops (MacBook, Windows laptops)
  - 🖥️ Desktop computers (large screens)
- **Beach-Themed Design** 🏖️:
  - Ocean-inspired color palette (coral, turquoise, sandy yellow)
  - Gradient backgrounds mimicking beach sunset to ocean depths
  - Beach wave overlay effects
  - Coastal aesthetic throughout
- **Modern UI/UX**: Beautiful gradient backgrounds, smooth animations, and intuitive navigation
- **Touch-Optimized**: Enhanced touch targets and interactions for mobile devices
- **Dietary Tags**: Visual indicators for vegetarian, non-vegetarian, and spicy items
- **Smooth Scrolling**: Auto-scroll to top when navigating between views
- **Mobile-Friendly Modals**: Prevents background scrolling on mobile devices

## How to Use

1. Open `index.html` in your web browser
2. Browse through the food categories on the home page
3. Click on any category to view all dishes in that category
4. Click on individual dishes to see detailed information including ingredients
5. **Add items to cart**: 
   - Click "Add to Cart" button on any dish card
   - Or open dish details and click "Add to Cart" in the modal
6. **View your cart**: Click the 🛒 cart button in the header
7. **Manage cart items**:
   - Increase/decrease quantities using + and - buttons
   - Remove items with the "Remove" button
   - View subtotal, taxes, and total amount
8. **Place Order via WhatsApp**: 
   - Click "Proceed to Checkout"
   - Enter your name
   - Enter table/room number (optional)
   - Add special instructions (optional)
   - WhatsApp opens with formatted order
   - Click "Send" to send order to kitchen!
9. Use the "Back" button to return to browsing

## 📱 WhatsApp Setup

Before using, update your kitchen WhatsApp number in `script.js`:

```javascript
const KITCHEN_WHATSAPP = "919876543210"; // Replace with your number
```

See [WHATSAPP_SETUP.md](WHATSAPP_SETUP.md) for detailed instructions.

## File Structure

```
goko-hostel-menu/
├── index.html                                    # Main HTML file
├── styles.css                                    # Beach-themed styling
├── script.js                                     # Menu + WhatsApp integration
├── images/                                       # Local food images (38 items)
├── WhatsApp Image 2025-11-23 at 4.35.36 PM.jpeg # Original menu reference
├── MENU_ITEMS.md                                # Complete menu list (155+ items)
├── WHATSAPP_SETUP.md                            # WhatsApp integration guide
├── SERVER_INFO.md                               # Local server setup guide
├── start_server.sh                              # Quick server start script
├── download_images.sh                           # Image download script
├── download_images.py                           # Python alternative
└── README.md                                    # This file
```

## Setting Up Images

The website uses **local images** for faster loading (no dependency on external URLs).

### Images Already Downloaded ✓

All 38 menu item images are already downloaded in the `images/` folder. The website will load them locally for fast performance!

### Re-downloading Images (Optional)

If you need to re-download the images:

**Option 1: Using bash script (Recommended)**
```bash
cd goko-hostel-menu
./download_images.sh
```

**Option 2: Using Python script**
```bash
cd goko-hostel-menu
python3 download_images.py
```

Both scripts will download all 38 images from Unsplash to the `images/` folder.

## Customization

### Adding New Dishes

Edit the `menuData` object in `script.js`:

```javascript
dishes: [
    {
        name: "Dish Name",
        price: "₹XXX",
        description: "Dish description",
        tags: ["veg", "spicy"],
        ingredients: ["Ingredient 1", "Ingredient 2"],
        image: "https://images.unsplash.com/photo-XXXXXX?w=400&h=300&fit=crop"
    }
]
```

**Image URLs**: The website uses **local images** stored in the `images/` folder for faster loading. You can:
- Keep using the local images (already downloaded)
- Replace with your own images in the `images/` folder
- Re-download images by running `./download_images.sh`

### Adding New Categories

Add a new category to the `menuData` object:

```javascript
newCategory: {
    name: "Category Name",
    icon: "🍕",
    description: "Category description",
    dishes: [...]
}
```

### Customizing Colors

The website uses a beach-themed color palette. Modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #FF6B35;      /* Coral/sunset orange */
    --secondary-color: #00B4D8;    /* Ocean blue */
    --accent-color: #FFD166;       /* Sandy yellow */
    --ocean-dark: #0077B6;         /* Deep ocean blue */
    --ocean-light: #90E0EF;        /* Light ocean blue */
    --sand: #F4E4C1;               /* Beach sand */
}
```

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)

## Browser Compatibility

Works on all modern browsers:
- Chrome (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (Desktop & Mobile/iOS)
- Edge (Desktop & Mobile)
- Samsung Internet
- Opera

## Responsive Breakpoints

The website adapts to different screen sizes:

| Device Type | Screen Width | Layout |
|------------|--------------|---------|
| Large Desktop | ≥ 1400px | 4 columns for categories, 3 for dishes |
| Desktop/Laptop | 1024px - 1399px | 3 columns for categories, 2 for dishes |
| Tablet | 769px - 1023px | 2 columns for both |
| Mobile | 481px - 768px | 2 columns for categories, 1 for dishes |
| Small Mobile | ≤ 480px | 1 column for all content |

## Testing on Different Devices

### Desktop/Laptop
Simply open `index.html` in your browser

### Mobile Browser Testing
1. **Option 1**: Transfer the folder to your phone and open `index.html`
2. **Option 2**: Use browser developer tools
   - Chrome: Press F12 → Click device icon (or Ctrl+Shift+M)
   - Firefox: Press F12 → Click responsive design mode
   - Safari: Enable Developer Menu → Enter Responsive Design Mode
3. **Option 3**: Host locally and access from phone
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   # Then visit http://YOUR_IP:8000 from your phone
   ```

### Test Different Screen Sizes
The website is optimized for:
- iPhone (375px - 428px width)
- Android phones (360px - 414px width)
- iPad (768px - 1024px width)
- Laptops (1280px - 1920px width)
- Large displays (> 1920px width)

## Design Theme

The website features a **beach-side Gokarna theme** with:
- **Ocean gradient** background (light blue to deep ocean blue)
- **Coral and turquoise** accent colors inspired by beach sunsets
- **Sandy yellow** highlights reminiscent of Gokarna's beaches
- **Wave overlay** effects at the bottom
- **Ocean-inspired** buttons and interactive elements

Perfect for a beach-side hostel atmosphere! 🌊🏖️

## Location

**Gokarna, Karnataka, India**  
A beautiful beach town known for its pristine beaches, relaxed atmosphere, and coastal cuisine.

## License

© 2025 Goko Hostel Gokarna. All rights reserved.

