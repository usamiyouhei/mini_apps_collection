import { DessertIdea } from "@/types/dessert";

const shapePromptMap: Record<string, string> = {
  球体: "sphere",
  半球: "hemisphere",
  四角: "square shape",
  長方形: "rectangular shape",
  円柱: "cylindrical shape",
  ピラミッド: "pyramid shape",
  涙型: "teardrop shape",
  トヨ型: "tunnel mold shape, log-shaped dessert",
  デセールスタイル: "free-form plated dessert style",
  不規則: "organic irregular shape",
  リング型: "ring shape",
  ドーム型: "dome shape",
  楕円: "oval shape",
  キューブ: "cube shape",
  薄い板状: "thin slab shape",
  層状: "layered structure",
};

const formatPromptItems = (items: string[] | undefined) => {
  if (!items || items.length === 0) return "not specified";
  return items.join(",");
};

const formatShapePrompt = (shapes: string[] | undefined) => {
  if (!shapes || shapes.length === 0) return "not specified";
  return shapes.map((shape) => shapePromptMap[shape] ?? shape).join(",");
};

export function createDessertPrompt(idea: DessertIdea) {
  return `
Create a professional plated dessert concept image.
DessertType: ${formatPromptItems(idea.dessertTypes)}
Flavor composition: ${formatPromptItems(idea.flavors)}
Texture: ${formatPromptItems(idea.textures)}
Temperature style: ${formatPromptItems(idea.temperatures)}
Shape and form: ${formatShapePrompt(idea.shapes)}
Decoration and finishing: ${formatPromptItems(idea.decorations)}
Style: modern fine dining dessert, elegant plating, luxury restaurant presentation, clean composition, realistic food photography, soft natural lighting, shallow depth of field, high-end pastry, white or neutral ceramic plate, minimal background.
Do not include text, labels, hands, people, logos, or packaging.
`.trim();
}
