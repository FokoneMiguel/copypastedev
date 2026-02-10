
export enum Category {
  HTML = 'HTML',
  CSS = 'CSS',
  JS = 'JavaScript',
  REACTIVE = 'React/Vue',
}

export interface Snippet {
  id: string;
  name: string;
  category: Category;
  shortDescription: string;
  description: string;
  problem: string;      // The "Why"
  solution: string;     // The "How"
  price: number;
  features: string[];
  limitations: string[];
  previewHtml?: string;
  codePreview?: string;
  lastUpdated: string;
  downloadSize?: string;
}

export interface GeminiResponse {
  text: string;
  sources?: { web?: { uri: string; title: string } }[];
}
