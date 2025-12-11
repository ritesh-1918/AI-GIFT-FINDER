import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

// --- Helper Functions for each provider ---

const callGemini = async (prompt) => {
  if (!GEMINI_API_KEY) throw new Error("Gemini API Key missing");

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const models = ["gemini-2.5-flash", "gemini-2.5-pro", "gemini-2.0-flash", "gemini-pro"];

  for (const modelName of models) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (e) {
      console.warn(`Gemini model ${modelName} failed: ${e.message}`);
      if (e.message.includes("429")) throw e; // RETHROW RATE LIMITS to trigger fallback immediately
    }
  }
  throw new Error("All Gemini models failed");
};

const callGroq = async (prompt) => {
  if (!GROQ_API_KEY) throw new Error("Groq API Key missing");

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile", // Valid model as of late 2025
      temperature: 0.7
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Groq API Error: ${response.status} - ${err}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || "";
};

const callOpenRouter = async (prompt) => {
  if (!OPENROUTER_API_KEY) throw new Error("OpenRouter API Key missing");

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      // Optional: site identification for OpenRouter
      "HTTP-Referer": window.location.origin,
      "X-Title": "AI Gift Finder"
    },
    body: JSON.stringify({
      messages: [{ role: "user", content: prompt }],
      // Use Llama 3 8B Free - very high availability, completely different quota from Gemini
      model: "meta-llama/llama-3-8b-instruct:free",
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenRouter API Error: ${response.status} - ${err}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || "";
}

// --- Main Export ---

export const generateGiftSuggestions = async (criteria) => {
  const prompt = `
    Generate 6 unique, creative gift suggestions for:
    - Recipient: ${criteria.recipient}
    - Age: ${criteria.age}
    - Interests: ${criteria.interests}
    - Occasion: ${criteria.occasion}
    - Budget: ${criteria.budget}
    - Personal notes: ${criteria.notes || "None"}

    Return suggestions in valid JSON format (array of objects) with the following strictly: 
    {
      "name": "Gift Name",
      "description": "Short description",
      "why_perfect": "Reasoning based on inputs",
      "price_range": "Estimated price range",
      "category": "Category",
      "search_term": "Term to search for image"
    }

    Do not include any markdown formatting like \`\`\`json or \`\`\`. Just return the raw JSON string.
  `;

  let lastError;

  // 1. Try Gemini
  try {
    console.log("Trying Gemini...");
    const text = await callGemini(prompt);
    return parseResponse(text);
  } catch (e) {
    console.warn("Gemini Failed. Switching to Groq...", e);
    lastError = e;
  }

  // 2. Try Groq
  try {
    console.log("Trying Groq...");
    const text = await callGroq(prompt);
    return parseResponse(text);
  } catch (e) {
    console.warn("Groq Failed. Switching to OpenRouter...", e);
    lastError = e;
  }

  // 3. Try OpenRouter
  try {
    console.log("Trying OpenRouter...");
    const text = await callOpenRouter(prompt);
    return parseResponse(text);
  } catch (e) {
    console.error("All providers failed.", e);
    lastError = e;
  }

  throw lastError;
};

// Helper to parse JSON from any AI response
const parseResponse = (text) => {
  console.log("Raw Response length:", text.length);
  const start = text.indexOf('[');
  const end = text.lastIndexOf(']');

  if (start === -1 || end === -1) {
    throw new Error("No JSON array found in response");
  }

  const jsonStr = text.substring(start, end + 1);
  return JSON.parse(jsonStr);
};
