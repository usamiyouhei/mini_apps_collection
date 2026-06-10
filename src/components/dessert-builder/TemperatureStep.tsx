import React from "react";
import OptionStep from "./OptionStep";
import { temperatures } from "@/data/dessertOptions";

type TemperatureStepProps = {
  selectedValues: string[];
  onToggle: (value: string) => void;
};
export default function TemperatureStep({
  selectedValues,
  onToggle,
}: TemperatureStepProps) {
  return (
    <OptionStep
      title="温度感"
      options={temperatures}
      selectedValues={selectedValues}
      onToggle={onToggle}
    />
  );
}
