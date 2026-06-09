import React from "react";
import OptionStep from "./OptionStep";
import { dessertTypes } from "@/data/dessertOptions";

type DessertTypeStepProps = {
  selectedValues: string[];
  onToggle: (values: string) => void;
};
export default function DessertTypeStep({
  selectedValues,
  onToggle,
}: DessertTypeStepProps) {
  return (
    <OptionStep
      title="ケーキ・デザートの種類"
      options={dessertTypes}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
