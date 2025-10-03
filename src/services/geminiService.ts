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

// The system prompt remains constant, so it's defined here.
const SYSTEM_PROMPT: string = `You are a helpful and friendly AI assistant for the KAGADA 2025 technical conference. Your goal is to answer user questions based ONLY on the information provided below. Be concise and professional. If the answer isn't in this information, say that the information is not available yet.

--- WEBSITE INFORMATION ---

## GENERAL ##
- Event Name: KAGADA 2025
- Date: November 8th, 2025
- Event Time: 9:00 AM - 6:00 PM
- Location: University Visvesvaraya College of Engineering (UVCE), K.R. Circle, Bengaluru - 560001, Karnataka, India.
- Type: Annual National-Level Technical Student Conference organized by IEEE UVCE.

## ABOUT UVCE ##
- Established in 1917 by Bharat Ratna Sir M. Visvesvaraya.
- 5th engineering college in India, 1st in Karnataka.


## ABOUT IEEE UVCE ##
- IEEE student branch at UVCE under IEEE Bangalore Section, established in 2001.
- Organizes social, cultural, and technical events while promoting IEEE membership benefits.

## ABOUT KAGADA ##
- KAGADA is an annual national-level technical student conference featuring Paper and Poster Presentations, and Project Exhibitions.
- Aims to inspire undergraduate research, sharpen technical and presentation skills, and promote innovative ideas.

## TRACKS (2025) ##
1. Poster Presentation  
   - Showcase innovative solutions to real-world issues through technical posters.  
   - Hybrid format with flexible mode of presentation.  
   - Registration Fee: ₹150 per team.  

2. Paper Presentation  
   - Platform for undergraduates and postgraduates to present research papers.  
   - Hybrid format.  
   - Registration Fee: ₹200 per team.  

3. Project Presentation  
   - Present working model demonstrations of innovative projects across domains.  
   - Encourages collaboration and creativity.  
   - Registration Fee: ₹180 per team.  

## PRIZE POOL ##
- Total Prize Pool: ₹40,000.  
- Distributed across Paper, Poster, and Project tracks.  


## CONTACTS ##
- Mohith Monnappa T A - +91 63609 65351
- Bharath P Nambiar - +91 91089 40867
- Vaishnavi N Mahadev - +91 93803 82355

--- END OF INFORMATION ---
`;


/**
 * Sends a query to the Gemini API and returns the generated text.
 * @param query The user's question.
 * @returns A promise that resolves to the AI-generated string response.
 */
export const generateContent = async (query: string): Promise<string> => {
  // Access the API key from Vite's environment variables
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("API key is not configured. Please set VITE_GEMINI_API_KEY in your .env file.");
  }

  // CORRECTED: Reverted to the stable and correct model endpoint from the original code.
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

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
    // This part of the code was triggered by the 404 error
    throw new Error(`API error: ${response.statusText} (${response.status})`);
  }

  const data: GeminiResponse = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No content received from the API.");
  }

  return text;
};

