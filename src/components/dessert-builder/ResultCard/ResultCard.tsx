import { DessertIdea } from "@/types/dessert";
import React from "react";

type ResultCardProps = {
  idea: DessertIdea;
  onSave: () => void;
};

export default function ResultCard({ idea, onSave }: ResultCardProps) {
  return (
    <section>
      <h2>完成したデザート案</h2>

      <p>タイプ: {idea.dessertTypes.join("、")}</p>
      <p>フレーバー: {idea.flavors.join("、")}</p>
      <p>食感: {idea.textures.join("、")}</p>
      <p>温度: {idea.temperatures.join("、")}</p>
      <p>飾り: {idea.decorations.join("、")}</p>
    </section>
  );
}
