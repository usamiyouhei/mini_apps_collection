import React from "react";
import OptionStep from "./OptionStep";
import { decorations } from "@/data/dessertOptions";

type DecorationStepProps = {
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function DecorationStep({
  selectedValues,
  onToggle,
}: DecorationStepProps) {
  return (
    <OptionStep
      title="飾り・仕上げ"
      options={decorations}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
