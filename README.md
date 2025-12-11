# 🎁 AI Gift Finder

**"The perfect gift is always one click away."**

AI Gift Finder is an intelligent, AI-powered web application designed to help users discover unique, personalized gift ideas in seconds. Built using modern web technologies and Generative AI, it takes the stress out of gifting.

![AI Gift Finder Banner](https://placehold.co/1200x400/2563eb/white?text=AI+Gift+Finder+Banner)

---

## 🌟 Special Dedication

This project is made for **Prakashini**, a dedicated Computer Science Junior.

- **Student**: Prakashini
- **Course**: Polytechnic 2nd Year (2024 - 2027 Batch)
- **College**: Sanketika Polytechnic College, Vizag

*Wishing you the very best in your journey to becoming an amazing engineer!* 🚀

---

## ✨ Key Features

- **🤖 Multi-Model AI Brain**: Powered by a robust fallback system using **Google Gemini**, **Groq (Llama 3)**, and **OpenRouter** to ensure 100% reliability.
- **🎨 Dynamic UI**: Beautiful, responsive interface built with React and Tailwind CSS.
- **🖼️ AI Image Generation**: Visualizes gift ideas instantly using `pollinations.ai`.
- **🎲 Surprise Me Mode**: One-click random scenario generator for fun testing.
- **📱 Web Share API**: Built-in native sharing to send gift ideas to friends via WhatsApp, Telegram, etc.
- **❤️ Wishlist**: Save your favorite ideas locally.
- **⚡ Blazing Fast**: Optimized for speed with Vite.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), JavaScript
- **Styling**: Tailwind CSS, Framer Motion (Animations), Lucide React (Icons)
- **AI Integrations**:
  - Google Gemini API (Primary)
  - Groq API (Fallback Strategy 1)
  - OpenRouter API (Fallback Strategy 2)
- **Deployment**: Ready for Vercel / Netlify

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ritesh-1918/AI-GIFT-FINDER.git
cd AI-GIFT-FINDER
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file in the root directory and add your API keys:
```env
VITE_GEMINI_API_KEY=your_gemini_key
VITE_GROQ_API_KEY=your_groq_key
VITE_OPENROUTER_API_KEY=your_openrouter_key
```

### 4. Run Locally
```bash
npm run dev
```

---

## 📦 Deployment (Vercel)

This project is optimized for deployment on **Vercel**.

1. Push this code to your GitHub.
2. Go to [Vercel](https://vercel.com) and import the project.
3. **IMPORTANT**: Add the Environment Variables (`VITE_GEMINI_API_KEY`, etc.) in the Vercel Project Settings.
4. Click Deploy!

**Note on Sharing**: The "Share" button uses the standard `navigator.share` API. It works perfectly on Vercel (HTTPS) and mobile devices.

---

Made with ❤️ in Vizag.
