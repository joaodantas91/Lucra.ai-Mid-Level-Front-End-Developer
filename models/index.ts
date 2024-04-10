import { OpenAIRole } from "@/types";

export interface IPrompt {
  messages: { role: OpenAIRole, content: string };
  model: string;
}