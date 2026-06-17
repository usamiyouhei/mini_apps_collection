export type DessertIdea = {
  id: string;
  dessertTypes: string[];
  flavors: string[];
  textures: string[];
  temperatures: string[];
  decorations: string[];
  favorite: boolean;
  aiPrompt: string;
  imageUrl: string;
  memo?: string;
  createdAt: string;
};
