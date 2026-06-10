import React from "react";
import OptionStep from "./OptionStep";
import { textures } from "@/data/dessertOptions";

type TextureStepProps = {
  selectedValues: string[];
  onToggle: (value: string) => void;
};
export default function TextureStep({
  selectedValues,
  onToggle,
}: TextureStepProps) {
  return (
    <OptionStep
      title="食感"
      options={textures}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
