# AD Dairy Farm - Official Website & Ordering Portal

A modern, responsive, high-performance website and daily milk subscription portal built with **React**, **Vite**, and **Tailwind CSS**.

## 🌟 Key Features

1. **Brand Showcase & Trust**:
   - 100% Pure & Organic farm messaging.
   - Quality checkpoints (Untouched by hand, 4°C instant chilling, zero hormones/oxytocin, glass bottles).
   - Side-by-side comparison table between AD Dairy Farm and commercial packet/street milk.

2. **Full Dairy Product Catalog**:
   - Pure Desi Cow Milk (A2)
   - Farm Buffalo Milk (High cream/malai)
   - Traditional Bilona Desi Ghee
   - Farm Fresh White Makhan (Butter)
   - Organic Soft Malai Paneer
   - Natural Thick Set Dahi (Curd)
   - Pure Khoya / Mawa & Heavy Table Cream
   - Category filtering, detailed product modals, quick "Add to Basket".

3. **Interactive Daily Milk Subscription Calculator**:
   - Customizable by milk type (Cow, Buffalo, Combo).
   - Delivery frequency (Daily, Alternate days, Weekdays).
   - Quantity selector (1L to 5L per day).
   - Morning (6:00 AM - 7:30 AM) or Evening (5:30 PM - 7:00 PM) delivery slot selection.
   - Real-time monthly cost breakdown with recurring subscriber discounts.
   - **1-Click WhatsApp Subscription Link**: Generates a pre-formatted subscription message.

4. **Interactive Shopping Basket (Cart)**:
   - Slide-over drawer with item quantity adjustments and auto-saved `localStorage`.
   - Free delivery threshold calculation.
   - Customer details input (Name, phone, address).
   - **One-Click WhatsApp Order Receipt**: Sends formatted invoice directly to farm WhatsApp.

5. **5-Step Farm-to-Table Visual Journey**:
   - Lush pastures -> automated pipeline milking -> instant 4°C chilling -> glass bottling -> early morning doorstep delivery.

6. **Farm Tour & Family Visit Booking**:
   - Open-door transparency: visitors can schedule a weekend farm tour directly via WhatsApp.

7. **Floating Instant WhatsApp Contact**:
   - Quick floating chat button for instant questions or orders.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Running Locally
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser.

### Building for Production
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory.

---

## 🌐 Deploy to Vercel or Netlify

### Deploying to Vercel:
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel automatically detects Vite:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### Deploying to Netlify:
1. Push to GitHub and link to [netlify.com](https://netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Click **Deploy Site**.

---

## ⚙️ Customization

- **Phone Numbers & WhatsApp:** Search for `+92 300 1234567` or `923001234567` in the components to update with your official farm contact number.
- **Products & Prices:** Edit [`src/data/products.js`](src/data/products.js).
- **Testimonials & FAQs:** Edit [`src/data/testimonials.js`](src/data/testimonials.js).
