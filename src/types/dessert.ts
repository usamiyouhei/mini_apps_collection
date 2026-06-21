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
  imageFileDataUrl: string;
  memo?: string;
  createdAt: string;
};
