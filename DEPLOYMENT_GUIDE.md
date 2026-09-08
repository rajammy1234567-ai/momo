# 🚀 Vercel Deployment Guide for Chaow Momo

Aapki **Chaow Momo** website Vercel par deploy hone ke liye 100% ready hai! 🥟🔥

Humne dono deployment modes configure kar diye hain:
1. **Root Monorepo Deploy** (`vercel.json` at root directory)
2. **Frontend Subfolder Deploy** (`frontend/vercel.json`)

---

## 🌟 Option 1: Vercel Web Dashboard (Sabse Easy & Recommended)

### Step 1: GitHub par code push karein
Agar aapka code GitHub repo par hai:
```bash
git add .
git commit -m "Add full 75+ menu, Himalayan-Punjabi café branding & Vercel config"
git push origin main
```

### Step 2: Vercel Dashboard par jaayein
1. [https://vercel.com](https://vercel.com) par login karein.
2. **"Add New..."** ➔ **"Project"** par click karein.
3. Apni GitHub repository (`CHAOW MOMO` / `momo`) ko **Import** karein.

### Step 3: Project Settings & Deploy
- **Framework Preset**: `Vite` (Vercel automatically detect kar lega)
- **Root Directory**:
  - *Option A*: Agar aap root directory ko aise hi chhod dete hain (`./`), humara root `vercel.json` automatically `npm run build --prefix frontend` chalaakar `frontend/dist` deploy kar dega!
  - *Option B*: Ya fir aap **Root Directory** ko `frontend` select kar sakte hain.
- **Environment Variables (Optional)**:
  - `VITE_API_URL`: (Agar aapka backend server live hai toh URL daalein, otherwise forms directly WhatsApp par switch ho jaate hain).
- **Click "Deploy"** button!

1 se 2 minute mein aapki website live ho jaayegi aur aapko ek live link milega (jaise `chaow-momo.vercel.app`).

---

## ⚡ Option 2: Vercel CLI (Direct Terminal se 1-Minute Deploy)

Agar aap terminal se deploy karna chahte hain:

1. Terminal mein command run karein:
   ```bash
   npx vercel
   ```
2. Prompts aayenge:
   - `Set up and deploy?` ➔ **y**
   - `Which scope?` ➔ **Press Enter** (Aapka account)
   - `Link to existing project?` ➔ **n**
   - `Project name?` ➔ `chaow-momo` (ya koi bhi name)
   - `In which directory is your code located?` ➔ `./`
3. Production deploy karne ke liye:
   ```bash
   npx vercel --prod
   ```

---

## 🥟 Key Features Ready on Vercel:
- ✅ **All 11 Menu Categories & 75+ Items** (Momos, Thukpa, Punjabi Tadka, Burgers, Pastas, Pizzas, Coffees, Teas, Coolers).
- ✅ **Himalayan-Punjabi Café Branding**: "Himalayan Taste • Punjabi Tadka • Café & Quick Bites".
- ✅ **Interactive Search & Dietary Filters**: Pure Veg 🟢, Non-Veg 🔴, Punjabi Tadka 🌶️, Chef Specials ⭐.
- ✅ **WhatsApp Order Tray**: Direct order placement formatted for +91 9780524008.
- ✅ **SPA Routing Rewrites**: Clean page routing without 404 errors on refresh.
- ✅ **SEO & OpenGraph Tags**: Configured for Google and WhatsApp link previews.
