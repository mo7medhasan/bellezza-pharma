# 🌿 Bellezza Pharma — Premium Pharmaceutical Website

A production-ready Next.js 15 pharmaceutical product website for **Bellezza Pharma**, featuring 18 complete products with bilingual Arabic/English content, interactive ingredient explorer, discount system, audio pronunciation, and a premium UI.

---

## ✨ Features

| Feature | Details |
|---|---|
| **18 Products** | Complete content (EN + AR) for all Bellezza Pharma products |
| **Bilingual** | Full Arabic & English content throughout |
| **Audio Pronunciation** | Web Speech API for all product names & ingredients |
| **Discount System** | Password-protected unlock (`638527`) with animations |
| **Ingredient Explorer** | Expandable cards with mechanism of action |
| **Dark / Light Mode** | System-aware with manual toggle |
| **Search** | Global search by name, ingredient, benefit, category |
| **Sidebar Navigation** | Desktop sticky sidebar + Mobile drawer |
| **SEO** | Metadata, Open Graph, JSON-LD structured data per product |
| **Animations** | Framer Motion page transitions, hover effects, reveals |
| **Responsive** | Mobile → Tablet → Desktop → Wide |
| **Accessibility** | WCAG AA — ARIA labels, keyboard navigation, focus rings |

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 + CSS Variables
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Inter + Cairo (Google Fonts)
- **Theme**: next-themes

---

## 📦 Products Included

| # | Product | Category |
|---|---|---|
| 1 | TREO Serum | Serum |
| 2 | Pedro Serum 150 ml | Serum |
| 3 | Pedro Serum 75 ml | Serum |
| 4 | Pedro Shampoo 200 ml | Shampoo |
| 5 | Pedro Lightening Cream 60 gm | Cream |
| 6 | Pedro V.D 250 ml | Feminine Care |
| 7 | Norgin Sun Block 50 gm | Sunscreen |
| 8 | Bellezza Ivy Syrup | Herbal Syrup |
| 9 | Bellezza Vitamin D3 | Supplement |
| 10 | Bellezza Omega 3 | Supplement |
| 11 | VitaPro | Multivitamin |
| 12 | Jackstril Facial Wash | Facial Wash |
| 13 | Suze Cream | Cream |
| 14 | Pedro Mouth Spray | Oral Care |
| 15 | Pedro Vaginal Douche | Feminine Care |
| 16 | Baby Locca Ethyl Alcohol | Baby Care |
| 17 | Strands of Herbs Conditioner | Conditioner |
| 18 | Sevapure Whitening Roll On | Deodorant |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+
- npm, pnpm, or yarn

### Installation

```bash
# 1. Clone or extract the project
cd bellezza-pharma

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
bellezza-pharma/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Homepage
│   ├── not-found.tsx           # 404 page
│   ├── globals.css             # Global styles + CSS variables
│   ├── products/
│   │   ├── page.tsx            # All products listing
│   │   └── [slug]/
│   │       ├── page.tsx        # Product detail (SSG)
│   │       └── ProductDetailClient.tsx  # Interactive client component
│   └── search/
│       ├── page.tsx            # Search page
│       └── SearchPageClient.tsx
│
├── components/
│   ├── ui/                     # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── tabs.tsx
│   │   ├── accordion.tsx
│   │   ├── sheet.tsx
│   │   └── separator.tsx
│   ├── layout/
│   │   ├── Header.tsx          # Sticky header with search + theme toggle
│   │   ├── Sidebar.tsx         # Desktop sticky sidebar navigation
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx     # Animated hero banner
│   │   └── ProductsGrid.tsx    # Filterable product grid
│   └── product/
│       ├── ProductCard.tsx     # Product card for grids
│       ├── ImagePlaceholder.tsx
│       ├── AudioButton.tsx     # Web Speech API pronunciation
│       ├── IngredientCard.tsx  # Expandable ingredient explorer
│       ├── DiscountCard.tsx    # Password-protected discount reveal
│       ├── FAQSection.tsx      # Accordion FAQ
│       ├── WarningsSection.tsx
│       └── RelatedProducts.tsx
│
├── data/
│   └── products.ts             # All 18 products with full content
│
├── hooks/
│   ├── useAudio.ts             # Web Speech API hook
│   ├── useDiscount.ts          # Discount unlock logic
│   └── useSearch.ts            # Product search hook
│
├── lib/
│   └── utils.ts                # cn(), slugify(), category helpers
│
├── providers/
│   └── ThemeProvider.tsx       # next-themes wrapper
│
└── types/
    └── product.ts              # TypeScript interfaces
```

---

## 🔐 Discount System

Every product page has a "Special Offer" card. The discount is revealed by entering the dealer password:

```
Password: 123456
```

The unlock animation plays, revealing:
- Discount percentage
- Original vs discounted price
- Special offer details (EN + AR)
- Bonus products included
- Campaign details

---

## 🔊 Audio Pronunciation

Uses the browser's built-in **Web Speech API** — no external dependencies.

- **Product names** — EN and AR pronunciation buttons on every product page
- **Ingredients** — Speaker icon on each ingredient card
- **Languages** — `en-US` for English, `ar-SA` for Arabic

Supported in all modern browsers. Falls back gracefully if not supported.

---

## 🎨 Design System

### Colors
- **Primary (Pharma green)**: `#16a34a` (pharma-600)
- **Gold accent**: `#f59e0b` (gold-500)
- **Background**: Adaptive light/dark

### Typography
- **English**: Inter (system fallback)
- **Arabic**: Cairo (supports Arabic script, RTL)

### CSS Variables
All colors defined as HSL CSS variables in `globals.css`, enabling seamless dark mode switching.

---

## 🌐 SEO

Every product page generates:
- Dynamic `<title>` and `<meta description>`
- Open Graph tags
- Twitter Card tags
- JSON-LD `Product` structured data
- `generateStaticParams()` for static site generation

---

## ♿ Accessibility

- All interactive elements have `aria-label`
- Images have `role="img"` with descriptive labels
- Keyboard navigation throughout
- Focus visible rings on all focusable elements
- Screen reader announcements for dynamic content
- Color contrast meets WCAG AA

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Mobile (< 640px) | Single column, mobile drawer nav |
| Tablet (640–1024px) | 2-column grid, mobile drawer nav |
| Laptop (1024–1280px) | 3-column grid + sidebar |
| Desktop (> 1280px) | 4-column grid + wider sidebar |

---

## 🔧 Customization

### Adding a New Product
1. Add entry to `data/products.ts` following the `Product` interface
2. The sidebar, grid, search, and routing all update automatically

### Adding Real Product Images
Replace `<ImagePlaceholder />` with `<Image />` from `next/image`:

```tsx
import Image from "next/image";

<Image
  src="/products/treo-serum.jpg"
  alt={product.nameEn}
  width={400}
  height={500}
  className="rounded-2xl object-cover"
/>
```

### Changing the Discount Password
In `lib/utils.ts`:
```ts
export const DISCOUNT_PASSWORD = "YOUR_NEW_PASSWORD";
```

---

## 📄 License

© 2024 Bellezza Pharma. All rights reserved.

> **Medical Disclaimer**: Content on this website is for informational purposes only and not a substitute for professional medical advice. Always consult a qualified healthcare provider.
