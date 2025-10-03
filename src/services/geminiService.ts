// Type definition for the expected structure of the Gemini API response
interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
}

// The system prompt remains constant, so it can be defined here.
const SYSTEM_PROMPT: string = `You are a helpful and friendly AI assistant...`; // (The full prompt text goes here)

export const generateContent = async (query: string): Promise<string> => {
  // Access the API key from Vite's environment variables
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("API key is not configured. Please set VITE_GEMINI_API_KEY in your .env file.");
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: query }] }],
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText} (${response.status})`);
  }

  const data: GeminiResponse = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No content received from the API.");
  }

  return text;
};