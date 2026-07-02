export type DessertIdea = {
  id: string;
  dessertTypes: string[];
  flavors: string[];
  shapes?: string[];
  textures: string[];
  temperatures: string[];
  decorations: string[];
  aiPrompt?: string;
  imageUrl?: string;
  imageFileDataUrl?: string;
  favorite: boolean;
  memo?: string;
  createdAt: string;
};
