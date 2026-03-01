import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateHeroBackground() {
  const prompt = "Ultra-high-resolution, vibrant travel collage showcasing famous Asian tourist destinations, landmarks, and cultural icons like the Great Wall of China, Taj Mahal, Mount Fuji, and tropical beaches of Bali. Crystal clear and realistic, with a bright and inviting atmosphere. Include diverse landscapes like beaches, mountains, cityscapes, and historical monuments, subtly blended to create a seamless background. Soft depth of field so text overlay is clearly readable; modern, professional, and inspirational travel vibe; cinematic lighting, 16:9 aspect ratio.";
  
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: {
      parts: [
        {
          text: prompt,
        },
      ],
    },
    config: {
      imageConfig: {
            aspectRatio: "16:9",
            imageSize: "1K"
        }
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
