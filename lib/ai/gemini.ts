import { GoogleGenerativeAI } from "@google/generative-ai";
const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
export async function runVerificationReasoning(input: string) {
  if (!process.env.GEMINI_API_KEY) {
    return { summary: "Simulated verification flow", confidence: 0.82, suspiciousFlags: ["template-reuse-check-pending"] };
  }
  const model = client.getGenerativeModel({ model: "gemini-1.5-pro" });
  const prompt = `Analyze this civic proof for authenticity and fraud risks:\n${input}\nReturn JSON with summary, confidence (0-1), flags.`;
  const result = await model.generateContent(prompt);
  return { summary: result.response.text(), confidence: 0.9, suspiciousFlags: [] };
}
