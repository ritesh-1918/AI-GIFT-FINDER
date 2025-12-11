# AI Gift Finder - Detailed Product Requirements Document (PRD)

**Project Name:** AI Gift Finder  
**Build Platform:** Google Antigravity (Vibe Coding) + Free Integrations  
**Target Event:** College Expo  
**Status:** Ready for Development  

---

## 📋 Executive Summary

**AI Gift Finder** is an intelligent, AI-powered web application that helps users discover the perfect gift in under 2 minutes. Users input recipient details, occasion, and budget—the AI suggests personalized, curated gift options with real-time pricing and direct purchase links.

**Vision:** "With AI Gift Finder, the perfect gift is always one click away."

---

## 🎯 Core Features & Requirements

### 1. **Gift Discovery Form (Hero Feature)**

#### Functional Requirements:
- **Input Fields (Multi-step form or accordion):**
  - Recipient Type: (Friend, Family, Colleague, Crush, Pet, etc.)
  - Age Range: (Teenager, Young Adult, Middle-aged, Senior)
  - Interests/Hobbies: (Multi-select tags: Tech, Sports, Fashion, Books, Gaming, Cooking, etc.)
  - Occasion: (Birthday, Anniversary, Wedding, Christmas, Diwali, Graduation, etc.)
  - Budget Range: (₹500-₹2000, ₹2000-₹5000, ₹5000-₹10000, ₹10000+)
  - Personalization Notes: (Optional text field for specific preferences)

#### Technical Specs:
- Form validation on client-side
- Smooth UX with animations
- Mobile-responsive design
- Error handling for empty fields

---

### 2. **AI-Powered Gift Suggestions Engine**

#### Functional Requirements:
- Uses **Google Gemini API (Free Tier)** to generate personalized gift recommendations
- Returns 5-8 gift suggestions per search
- Each suggestion includes:
  - Gift name & description
  - Why it's perfect (personalization reasoning)
  - Price range (₹100-₹50,000)
  - Product image (via web search or placeholder)
  - Rating (simulated 4.0-5.0)
  - Purchase link options (Amazon, Flipkart, direct store)

#### AI Prompt Engineering:
```
"Generate 6 unique, creative gift suggestions for:
- Recipient: [recipient type], Age: [age], Interests: [interests]
- Occasion: [occasion], Budget: ₹[min-max]
- Personal notes: [any custom notes]

Return suggestions in JSON format with: name, description, why_perfect, price_range, category, and emoji.
Make recommendations thoughtful, not generic."
```

#### Technical Specs:
- Integrate Google Gemini API (free)
- Response caching (optional: store searches locally)
- Loading state with animated skeleton
- Error fallback with sample data

---

### 3. **Gift Gallery & Details Page**

#### Functional Requirements:
- Display gifts in responsive card layout (grid: 1 col mobile, 2 cols tablet, 3 cols desktop)
- Card Components show:
  - Gift image with hover effects
  - Name, price, rating (stars)
  - One-line description
  - "View Details" button
  - "Add to Wishlist" button (local storage)
  - Direct "Buy Now" link

- **Detailed View Modal:**
  - Full description & why it's perfect
  - Multiple images (carousel)
  - Price comparison (if available)
  - Customer reviews (simulated or fetched)
  - Multiple purchase options (buttons linking to stores)
  - Share options (WhatsApp, Email, Twitter)

#### Design Notes:
- Smooth animations on card hover
- Clean typography (Google Fonts: Poppins or Inter)
- Festive theme colors (Winter: blues/whites, Festival: golds/reds)

---

### 4. **Smart Wishlist/Favorites**

#### Functional Requirements:
- Local storage-based wishlist (no backend needed)
- Add/remove gifts from wishlist
- View all saved gifts in "My Wishlist" page
- Delete, sort by price/rating
- Share entire wishlist (generate shareable link via social media)
- Wishlist counter badge in header

#### Technical Specs:
- Use browser localStorage API
- Sync wishlist state across app
- Export as JSON (optional)

---

### 5. **Trending & Holiday Sections**

#### Functional Requirements:
- **Trending Gifts:** Pre-curated collections (Top 10, Most Gifted)
- **Holiday Collections:** 
  - Christmas Gift Ideas
  - Diwali Gift Ideas
  - Valentine's Day
  - New Year Gifts
  - Wedding Gifts
  
#### Technical Specs:
- Static data (can be updated manually)
- Filter/search within each collection
- Category badges with emoji icons

---

### 6. **Responsive Header & Navigation**

#### Components:
- **Logo & Branding:** "🎁 AI Gift Finder"
- **Search Bar:** Quick search across all features
- **Navigation Menu:**
  - Home
  - Browse Gifts (by category)
  - Trending
  - My Wishlist (with badge counter)
  - About
  - Contact
- **Mobile Menu:** Hamburger menu with smooth slide-out
- **Dark/Light Mode Toggle** (optional, using CSS)

#### Technical Specs:
- Sticky header on scroll
- Mobile-first responsive design
- Accessibility: keyboard navigation support

---

### 7. **Footer with Trust & CTAs**

#### Sections:
- Quick links (Privacy, Terms, FAQ)
- Newsletter signup (optional: use Formspree for form handling)
- Social media links
- Business model explanation
- "Made for College Expo" attribution

---

## 🔌 Easy, Free Integrations

### Integration 1: **Google Gemini API** (Free Tier - Perfect for Expo)

**Why:** Generates personalized, intelligent gift suggestions  
**Setup:**
1. Get free API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. No credit card required (free tier: 60 requests/minute)
3. Use `fetch()` to call API from frontend

**Implementation:**
```javascript
const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + YOUR_API_KEY, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: your_prompt }] }]
  })
});
```

---

### Integration 2: **Affiliate Links** (Amazon/Flipkart Associates)

**Why:** Monetization + Real shopping links  
**Free Alternative for Expo:**
- Use direct product URLs from Amazon/Flipkart
- Add referral parameters (can be set up later)
- Links open in new tab

**Implementation:**
```html
<a href="https://amazon.in/s?k=gift+name" target="_blank" rel="noopener noreferrer">
  Buy on Amazon
</a>
```

---

### Integration 3: **Web Images** (Unsplash/Pexels Free API)

**Why:** Get real product images  
**Setup:**
1. Use Unsplash API (free, no key needed for basic use)
2. Or embed placeholder images (placeholder.com)

**Implementation:**
```javascript
const imageUrl = `https://source.unsplash.com/400x300/?${giftCategory}`;
```

---

### Integration 4: **Form Handling** (Formspree - Optional)

**Why:** Capture user emails/feedback without backend  
**Setup:**
1. Sign up at [Formspree.io](https://formspree.io/) (free)
2. Create form, get endpoint
3. Post form data directly

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <button type="submit">Subscribe</button>
</form>
```

---

### Integration 5: **Share Feature** (Share API)

**Why:** Let users share wishlists via WhatsApp, Email, Twitter  
**Setup:** Use native Web Share API (built-in)

```javascript
if (navigator.share) {
  navigator.share({
    title: 'My Gift Wishlist',
    text: 'Check out my curated gift wishlist!',
    url: window.location.href
  });
}
```

---

## 🏗️ Tech Stack (All Free)

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | HTML, CSS, JavaScript (Vanilla or React) | Vibe coding in Antigravity |
| **AI** | Google Gemini API (Free) | Intelligent suggestions |
| **Hosting** | Vercel/Netlify (Free) | Deploy instantly |
| **Icons** | Lucide Icons / Heroicons | Beautiful SVG icons |
| **Fonts** | Google Fonts | Free typography |
| **Images** | Unsplash API / Placeholder.com | Free stock images |
| **Storage** | Browser localStorage | No backend needed |
| **Version Control** | GitHub | Backup + resume content |

---

## 🎨 Design & UX Guidelines

### Color Palette (Festival Theme):
- **Primary:** Gold (#FFD700) or Teal (#20B2AA)
- **Secondary:** White (#FFFFFF)
- **Accent:** Red/Orange (#FF6B6B)
- **Background:** Light gray (#F8F9FA)
- **Text:** Dark gray (#2D3436)

### Typography:
- **Headings:** Poppins Bold (24px, 20px, 18px)
- **Body:** Inter Regular (16px)
- **Small text:** 14px, gray
- **Line height:** 1.6

### Spacing & Layout:
- Padding: 16px, 24px, 32px (mobile-first)
- Grid gap: 16px-24px
- Max-width: 1200px

### Animations:
- Fade-in on load (0.3s)
- Hover scale on cards (1.05x)
- Smooth transitions (0.2s cubic-bezier)
- Loading spinner (rotating 360°)

---

## 📱 Page Breakdown & User Flows

### Page 1: **Landing/Home**
- Hero section with value proposition
- Quick input form (collapsible/multi-step)
- Trending gifts carousel
- How it works section
- CTA button: "Find Your Perfect Gift"

**Flow:** User → Input recipient details → Click "Find" → Redirects to Results

---

### Page 2: **Gift Results**
- Display 5-8 AI-suggested gifts
- Filter options (by price, rating, category)
- Pagination if more results
- Each gift card shows name, image, price, rating, "View Details"

**Flow:** User → Clicks gift → Opens modal with full details

---

### Page 3: **Gift Details Modal**
- Full description, images (carousel)
- Customer reviews
- Price options
- Multiple "Buy Now" buttons (Amazon, Flipkart, Direct)
- "Add to Wishlist" button
- "Share" option

**Flow:** User → Clicks "Buy Now" → Opens store link in new tab OR → Clicks "Add to Wishlist" → Saved locally

---

### Page 4: **My Wishlist**
- List of all saved gifts
- Delete individual items
- Sort by: Price (low-high, high-low), Rating, Date Added
- "Share Wishlist" button
- "Clear All" button
- Empty state: "Your wishlist is empty! Start exploring."

**Flow:** User → Browsing wishlist → Shares or deletes → Back to browse

---

### Page 5: **Trending/Collections**
- Pre-built gift collections by holiday/occasion
- Browse without AI (just curated lists)
- Quick filter/search

**Flow:** User → Browsing collections → Clicks gift → Details modal

---

### Page 6: **About/FAQ**
- About section explaining the platform
- How AI works (simplified)
- FAQ section
- Contact form (optional)

---

## ⚡ MVP Features for College Expo (Phase 1)

**Must-Have (Build First):**
1. Gift discovery form ✅
2. Google Gemini API integration ✅
3. Display results in card layout ✅
4. View full gift details ✅
5. Direct Amazon/Flipkart links ✅
6. Responsive mobile design ✅

**Nice-to-Have (Add if Time Permits):**
- Wishlist functionality
- Share feature
- Dark mode toggle
- Newsletter signup

**Future (Phase 2):**
- User authentication
- Saved searches history
- Backend database
- Admin dashboard for analytics
- Mobile app (React Native)

---

## 📊 Success Metrics for Expo

1. **User Engagement:** Gifts searched per session
2. **Time to Result:** Average time to get suggestions (target: <10 seconds)
3. **Wishlist Save Rate:** % of users who save gifts
4. **Share Rate:** How many users share their wishlist
5. **UI/UX Feedback:** Collect user feedback via form

---

## 🚀 Development Roadmap

**Week 1:**
- [ ] Setup Antigravity IDE project
- [ ] Create HTML structure & responsive layout
- [ ] Setup CSS (Tailwind or custom)
- [ ] Integrate Google Fonts & icons

**Week 2:**
- [ ] Build gift discovery form with validation
- [ ] Integrate Google Gemini API
- [ ] Fetch & display results
- [ ] Add details modal

**Week 3:**
- [ ] Add wishlist (localStorage)
- [ ] Implement share functionality
- [ ] Test responsiveness (mobile, tablet, desktop)
- [ ] Optimize performance

**Week 4:**
- [ ] Deploy to Vercel
- [ ] Final testing & bug fixes
- [ ] Create demo video/walkthrough
- [ ] Prepare for college expo presentation

---

## 🔒 Data Privacy & Security

- **No backend:** No user data stored on servers
- **HTTPS only:** Deploy on Vercel (auto-HTTPS)
- **localStorage only:** Gift preferences stored locally in browser
- **API Keys:** Keep Gemini API key private (use environment variables)
- **Privacy Policy:** Simple policy explaining data handling

---

## 📝 Deployment Checklist

- [ ] All links tested (affiliate, social, stores)
- [ ] Images optimized & cached
- [ ] API rate limits understood (60 req/min free tier)
- [ ] Mobile responsiveness verified
- [ ] Error states handled gracefully
- [ ] Loading states visible
- [ ] Accessibility: ARIA labels, keyboard nav
- [ ] Performance: Lighthouse score >80
- [ ] SEO: Meta tags, descriptions
- [ ] Deployed to Vercel with custom domain (optional)

---

## 💡 Unique Selling Points for Expo

1. **AI-Powered:** Real AI (Gemini) generating personalized suggestions
2. **Speed:** Results in seconds, not hours
3. **Free to Build:** Zero hosting costs + free APIs
4. **Scalable:** Can handle real users immediately
5. **Portfolio Project:** Showcases full-stack skills (frontend, AI, integrations, deployment)
6. **Live Demo:** Works instantly during expo, impresses judges

---

## 📞 Support & Questions

**For Build Help:**
- Google Antigravity docs: [link]
- Gemini API docs: [link]
- Vercel deployment guide: [link]

**For Design Inspiration:**
- Dribbble: Search "gift finder"
- UI Kits: Tailwind UI, shadcn/ui

---

## 🎯 College Expo Talking Points

1. "This project uses **real AI (Google Gemini)** to generate personalized gift suggestions, not just a database query."
2. "Built entirely **free** using Antigravity IDE, Gemini API, and Vercel—zero hosting costs."
3. "**Affiliate revenue model** explains how this becomes a sustainable business."
4. "Demonstrates **full-stack skills**: frontend design, API integration, responsive UX, and deployment."
5. "**Ready for production**—could go live today and handle real users."

---

**Document Version:** v1.0  
**Last Updated:** December 2025  
**Created For:** AI Gift Finder College Expo Project