# 🚀 Quick Start Guide - Goko Hostel Menu

## ⚡ Get Started in 3 Steps

### Step 1: Update WhatsApp Number (1 minute)

Open `script.js` and update this line:

```javascript
const KITCHEN_WHATSAPP = "919876543210"; // Your kitchen WhatsApp number
```

**Format:** Country code + number (no spaces or +)
- Example: `919876543210` for India +91 9876543210

---

### Step 2: Start the Server (30 seconds)

Open Terminal and run:

```bash
cd /Users/pawandhiran/Documents/GitHub/goko-hostel-menu
./start_server.sh
```

Server will start! ✅

---

### Step 3: Share & Test (1 minute)

**On Your Computer:**
- Open: http://localhost:8000

**Share with Team/Kitchen:**
- Send them: http://192.168.1.11:8000
- (They must be on same WiFi)

---

## 📱 How Orders Work

1. Customer browses menu on phone/laptop
2. Adds items to cart 🛒
3. Clicks "Proceed to Checkout"
4. Enters name & table number
5. WhatsApp opens with order details
6. Clicks "Send" → **Kitchen receives order!** ✅

---

## 🎯 What Kitchen Receives

```
🍽️ NEW ORDER - GOKO HOSTEL
━━━━━━━━━━━━━━━━━━━━

👤 Customer: John Doe
📍 Table/Room: Table 5
🕐 Time: 23/11/2025, 4:30:15 PM

━━━━━━━━━━━━━━━━━━━━

📋 ORDER DETAILS:

1. Butter Chicken Masala
   Qty: 2
   Price: ₹260 × 2 = ₹520

2. Garlic Naan
   Qty: 4
   Price: ₹70 × 4 = ₹280

━━━━━━━━━━━━━━━━━━━━

💰 BILL SUMMARY:
Subtotal: ₹800
Taxes (5%): ₹40
TOTAL: ₹840

✅ Please confirm this order!
```

---

## ✅ Features Included

✨ **14 Categories** - Breakfast, Pizza, Pasta, Steak, Chinese, etc.
✨ **155+ Menu Items** - All your actual menu items
✨ **Beach Theme** - Beautiful Gokarna-inspired design
✨ **Shopping Cart** - Add, remove, adjust quantities
✨ **WhatsApp Orders** - Direct to kitchen
✨ **Mobile Responsive** - Works on all devices
✨ **Local Images** - Fast loading, no internet needed
✨ **Order History** - Saved in WhatsApp chat

---

## 🔧 Quick Commands

**Start Server:**
```bash
./start_server.sh
```

**Stop Server:**
```bash
Ctrl + C
```

**Check if Running:**
```bash
lsof -i :8000
```

**Find Your IP:**
```bash
ipconfig getifaddr en0
```

---

## 📱 Access URLs

| Device | URL |
|--------|-----|
| Your Computer | http://localhost:8000 |
| Same WiFi (Share) | http://192.168.1.11:8000 |

---

## 🆘 Need Help?

**Server not starting?**
- Make sure you're in the right folder
- Check if port 8000 is free: `lsof -i :8000`

**WhatsApp not opening?**
- Update the phone number in script.js
- Check number format (no spaces or +)
- Make sure WhatsApp is installed

**Can't access from other devices?**
- Check if on same WiFi network
- Try http://192.168.1.11:8000
- Check firewall settings

---

## 📚 Detailed Documentation

- **WHATSAPP_SETUP.md** - WhatsApp integration details
- **SERVER_INFO.md** - Server and networking guide
- **MENU_ITEMS.md** - Complete menu list
- **README.md** - Full documentation

---

## 🎊 You're All Set!

Your Goko Hostel Menu website is ready with:
- ✅ Complete menu (155+ items)
- ✅ WhatsApp ordering system
- ✅ Local server running
- ✅ Mobile responsive design
- ✅ Beach-themed UI

**Start taking orders now!** 🚀🏖️

