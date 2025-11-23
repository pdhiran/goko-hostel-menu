# 🚀 Deploy to GitHub Pages

Your local repository is ready! Follow these simple steps to host your website on GitHub Pages.

---

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `goko-hostel-menu` (or any name you prefer)
   - **Description**: "Goko Hostel Menu website with cart and WhatsApp ordering"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have files)
4. Click **"Create repository"**

---

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/pawandhiran/Documents/GitHub/goko-hostel-menu

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/goko-hostel-menu.git

# Push your code
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top navigation)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**

---

## Step 4: Access Your Website

After 1-2 minutes, your website will be live at:

```
https://YOUR_USERNAME.github.io/goko-hostel-menu/
```

GitHub will show you the exact URL in the Pages settings.

---

## 🎉 Done!

Your website is now live and accessible from anywhere in the world!

### Updating Your Website

Whenever you make changes:

```bash
cd /Users/pawandhiran/Documents/GitHub/goko-hostel-menu
git add .
git commit -m "Description of your changes"
git push
```

Changes will appear on your live site within 1-2 minutes.

---

## ⚙️ Important Configuration

### Update WhatsApp Number

Before going live, update the kitchen WhatsApp number in `script.js`:

```javascript
// Around line 1850
const KITCHEN_WHATSAPP = "919876543210"; // Replace with your actual number
```

Then commit and push:

```bash
git add script.js
git commit -m "Update WhatsApp number"
git push
```

---

## 📱 Share Your Website

Once live, you can share the URL with:
- Hostel guests (print QR codes, add to booking confirmations)
- Staff members
- Anyone with internet access

### Create a QR Code

Use a free QR code generator like:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR Monkey](https://www.qrcode-monkey.com/)

Point it to your GitHub Pages URL and print it for easy access!

---

## 🔧 Troubleshooting

### Site not loading?
- Wait 2-3 minutes after enabling GitHub Pages
- Make sure repository is **Public**
- Check that Pages is enabled in Settings

### Changes not showing?
- GitHub Pages can take 1-2 minutes to update
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check if your commit was pushed: `git push`

### Images not loading?
- All images are in the `images/` folder
- Check browser console (F12) for errors

---

## 💡 Need Help?

If you run into any issues, check:
1. Repository is Public
2. Pages is enabled with `main` branch
3. Files are committed and pushed
4. Wait a few minutes for deployment

Happy hosting! 🎉

