# 🌐 Goko Hostel Menu - Web Server Information

## ✅ Server Status: RUNNING

Your local web server is now running and the Goko Hostel Menu website is live!

---

## 📱 Access the Website

### On Your Computer (Mac):
Open any browser and go to:
- **http://localhost:8000**
- **http://127.0.0.1:8000**

### Share with Others on Same WiFi:
Anyone on the same WiFi network can access:
- **http://192.168.1.11:8000**

---

## 🔗 Share for Review

Send this URL to your team/colleagues:
```
http://192.168.1.11:8000
```

They must be connected to the **same WiFi network** as you.

---

## 📋 How to Use

1. **You**: Keep your computer on with the server running
2. **Team**: Connect to the same WiFi
3. **Team**: Open the URL above in their browser (phone/laptop)
4. **Everyone**: Browse the menu, test cart, add items, etc.

---

## 🛠️ Server Controls

### Check if Server is Running:
```bash
lsof -i :8000
```

### Stop the Server:
Press `Ctrl + C` in the terminal where server is running

### Restart the Server:
```bash
cd /Users/pawandhiran/Documents/GitHub/goko-hostel-menu
./start_server.sh
```

---

## 📱 Testing on Mobile Devices

### iPhone/iPad:
1. Connect to same WiFi
2. Open Safari
3. Type: `http://192.168.1.11:8000`

### Android:
1. Connect to same WiFi
2. Open Chrome/Browser
3. Type: `http://192.168.1.11:8000`

---

## 🌍 Access from Outside (Internet)

**Current Setup**: Local network only (same WiFi)

**To make it accessible from anywhere on internet**, you would need:
- Deploy to a hosting service (Vercel, Netlify, GitHub Pages)
- Or use ngrok for temporary internet access

Want me to set that up?

---

## 🚨 Troubleshooting

### Can't Access from Other Devices?
1. Check if both devices are on same WiFi
2. Check if firewall is blocking port 8000
3. Try: `http://192.168.1.11:8000` (your IP may be different)

### Server Not Running?
Run: `./start_server.sh` in the menu folder

### Different IP Address?
Run this to find your IP:
```bash
ipconfig getifaddr en0
```

---

## 📞 Quick Links

- **Your Computer**: http://localhost:8000
- **Share with Team**: http://192.168.1.11:8000
- **Server Folder**: /Users/pawandhiran/Documents/GitHub/goko-hostel-menu

---

**Enjoy reviewing the Goko Hostel Menu! 🏖️🍽️**

