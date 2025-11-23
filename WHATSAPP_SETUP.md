# 📱 WhatsApp Order Integration Setup

## 🎉 Feature Overview

Customers can now send orders directly to your kitchen via WhatsApp! When they click "Proceed to Checkout", the order details are formatted and sent to your WhatsApp number.

---

## ⚙️ Setup Instructions

### Step 1: Update Kitchen WhatsApp Number

Open `script.js` and find this line (near the top):

```javascript
const KITCHEN_WHATSAPP = "919876543210"; // Replace with your actual WhatsApp number
```

**Replace with your actual number:**

```javascript
const KITCHEN_WHATSAPP = "919876543210"; // Example: India +91 9876543210
```

### Important Number Format:
- ✅ **Include country code** (no + sign)
- ✅ **No spaces, dashes, or special characters**
- ✅ **Example formats:**
  - India: `919876543210` (for +91 9876543210)
  - USA: `14155552671` (for +1 415-555-2671)
  - UAE: `971501234567` (for +971 50 123 4567)

❌ **Wrong formats:**
- `+91 9876543210` (has + and space)
- `+91-9876-543-210` (has + and dashes)
- `9876543210` (missing country code)

---

## 🔄 How It Works

### Customer Flow:
1. 🛒 Customer browses menu and adds items to cart
2. 📝 In cart, fills customer details form:
   - Name (required)
   - Mobile number (required)
   - Room number (optional - if staying at hostel)
   - Special instructions (optional)
3. 🛒 Clicks "Place Order via WhatsApp"
4. ✅ Form validation (name and mobile must be filled)
5. 📱 WhatsApp opens with formatted order message
6. ✅ Customer clicks "Send" in WhatsApp

### Kitchen Receives:
```
🍽️ NEW ORDER - GOKO HOSTEL
━━━━━━━━━━━━━━━━━━━━

👤 Customer: John Doe
📱 Mobile: 9876543210
🏠 Room: 205
🕐 Time: 23/11/2025, 4:30:15 PM

━━━━━━━━━━━━━━━━━━━━

📋 ORDER DETAILS:

1. Butter Chicken Masala
   Qty: 2
   Price: ₹260 × 2 = ₹520

2. Garlic Naan
   Qty: 4
   Price: ₹70 × 4 = ₹280

3. Cold Coffee
   Qty: 1
   Price: ₹150 × 1 = ₹150

━━━━━━━━━━━━━━━━━━━━

💰 BILL SUMMARY:
Subtotal: ₹950
Taxes (5%): ₹48
TOTAL: ₹998

━━━━━━━━━━━━━━━━━━━━

📝 Special Instructions:
Extra spicy, no onions

━━━━━━━━━━━━━━━━━━━━

✅ Please confirm this order!
```

---

## 📱 Testing the Integration

### Test on Desktop:
1. Open website: http://localhost:8000
2. Add items to cart
3. Click "Proceed to Checkout"
4. Enter test details
5. WhatsApp Web will open with the message

### Test on Mobile:
1. Open website: http://192.168.1.11:8000
2. Add items to cart
3. Click checkout
4. WhatsApp app will open directly

---

## 🎯 Benefits

✅ **Instant Order Notification** - Kitchen gets orders immediately
✅ **No App Installation** - Uses WhatsApp (everyone has it!)
✅ **Order History** - All orders saved in WhatsApp chat
✅ **Easy Confirmation** - Kitchen can reply to confirm
✅ **Customer Details** - Name, table, time included
✅ **Special Instructions** - Customers can add notes
✅ **Automatic Calculations** - Subtotal, tax, total

---

## 🔧 Customization Options

### Change Tax Rate:
In `script.js`, find:
```javascript
const taxes = Math.round(subtotal * 0.05); // 5% tax
```
Change `0.05` to your tax rate (e.g., `0.08` for 8%)

### Change Message Format:
Edit the `formatOrderForWhatsApp()` function in `script.js` to customize:
- Message structure
- Emojis
- Additional fields
- Message formatting

### Add Multiple Kitchen Numbers:
You can add logic to send to different WhatsApp numbers based on:
- Time of day (breakfast kitchen vs lunch kitchen)
- Item type (bar orders vs food orders)
- Order value (VIP orders to manager)

---

## 🚨 Troubleshooting

### WhatsApp Doesn't Open?
- Check if WhatsApp is installed
- Verify the phone number format
- Make sure it's a valid WhatsApp number

### Orders Not Sending?
- Check browser console for errors
- Verify internet connection
- Test the WhatsApp number manually

### Wrong Number?
- Update `KITCHEN_WHATSAPP` in script.js
- Refresh the website (Ctrl+R or Cmd+R)

---

## 📞 Multiple Kitchen Departments

Want to send different orders to different numbers? Add this:

```javascript
// At the top with KITCHEN_WHATSAPP
const KITCHEN_NUMBERS = {
    food: "919876543210",
    bar: "919876543211",
    manager: "919876543212"
};

// Then in checkout, ask which department
const department = prompt('Select department:\n1. Food\n2. Bar\n3. Manager', '1');
const phoneNumber = department === '2' ? KITCHEN_NUMBERS.bar : 
                     department === '3' ? KITCHEN_NUMBERS.manager : 
                     KITCHEN_NUMBERS.food;
```

---

## 🌟 Pro Tips

1. **Save Kitchen Number in Contacts** - Easy to identify orders
2. **Enable WhatsApp Notifications** - Never miss an order
3. **Create WhatsApp Group** - For kitchen staff coordination
4. **Pin Order Chats** - Keep order chats at top
5. **Use WhatsApp Business** - Get analytics and quick replies

---

## 📈 Future Enhancements

Possible additions:
- Order confirmation from kitchen
- Estimated prep time
- Order status tracking
- Payment integration
- Order history for customers
- Analytics and reporting

---

**Your WhatsApp ordering system is ready! 🎊**

Just update the phone number in `script.js` and you're good to go!

