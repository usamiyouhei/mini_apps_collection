import React from "react";
import OptionStep from "./OptionStep";
import { flavors } from "@/data/dessertOptions";

type FlavorStepProps = {
  selectedValues: string[];
  onToggle: (values: string) => void;
};

export default function FlavorStep({
  selectedValues,
  onToggle,
}: FlavorStepProps) {
  return (
    <OptionStep
      title="味の構成"
      options={flavors}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
