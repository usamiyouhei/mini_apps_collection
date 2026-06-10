import React from "react";
type ResultCardProps = {
  dessertTypes: string[];
  flavors: string[];
  textures: string[];
  temperatures: string[];
  decorations: string[];
  onBack: () => void;
  onReset: () => void;
  onSave: () => void;
};

const formatItems = (items: string[]) => {
  return items.length > 0 ? items.join(" / ") : "指定なし";
};
export default function ResultCard({
  dessertTypes,
  flavors,
  textures,
  temperatures,
  decorations,
  onBack,
  onSave,
  onReset,
}: ResultCardProps) {
  return <div></div>;
}
