import React from "react";
import OptionStep from "./OptionStep";
import { shapes } from "@/data/dessertOptions";

type ShapeTypeProps = {
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function ShapeStep({
  selectedValues,
  onToggle,
}: ShapeTypeProps) {
  return (
    <OptionStep
      title="形状を選ぶ"
      description="デザートの見た目を選びます。"
      options={shapes}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
