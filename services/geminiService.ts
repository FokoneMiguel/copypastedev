
import { GoogleGenAI } from "@google/genai";
import { GeminiResponse } from "../types";

export const getGeminiHelp = async (prompt: string, context?: string): Promise<GeminiResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const fullPrompt = context 
    ? `Context (Snippet Code): \n${context}\n\nUser Question: ${prompt}\n\nPlease provide a clear, concise answer for a developer.`
    : prompt;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: fullPrompt,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      },
    });

    const text = response.text || "Désolé, je n'ai pas pu générer de réponse.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks;

    return { text, sources };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "Une erreur est survenue lors de la communication avec l'IA." };
  }
};

export const getComplexAnalysis = async (snippetName: string, code: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `Analyse ce snippet nommé "${snippetName}" et explique en 3 points clés pourquoi il est performant et quelles sont les meilleures pratiques pour l'intégrer :\n\n${code}`,
    config: {
      thinkingConfig: { thinkingBudget: 32768 }
    }
  });

  return response.text || "Analyse indisponible.";
};
