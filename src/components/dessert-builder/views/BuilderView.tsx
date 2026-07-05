import React from "react";
import styles from "./BuilderView.module.scss";
import StepProgress from "../layout/StepProgress";
import DessertTypeStep from "../DessertTypeStep";
import FlavorStep from "../FlavorStep";
import ShapeStep from "../ShapeStep";
import TextureStep from "../TextureStep";
import TemperatureStep from "../TemperatureStep";
import DecorationStep from "../DecorationStep";

type BuilderViewProps = {
  step: number;
  lastStep: number;

  selectedDessertTypes: string[];
  selectedFlavors: string[];
  selectedShapes: string[];
  selectedTextures: string[];
  selectedTemperature: string[];
  selectedDecoration: string[];

  onToggleDessertType: (value: string) => void;
  onToggleFlavors: (value: string) => void;
  onToggleShapes: (value: string) => void;
  onToggleTextures: (value: string) => void;
  onToggleTemperature: (value: string) => void;
  onToggleDecoration: (value: string) => void;

  onBack: () => void;
  onNext: () => void;
};

export default function BuilderView({
  step,
  lastStep,
  selectedDessertTypes,
  selectedFlavors,
  selectedShapes,
  selectedTextures,
  selectedTemperature,
  selectedDecoration,
  onToggleDessertType,
  onToggleFlavors,
  onToggleShapes,
  onToggleTextures,
  onToggleTemperature,
  onToggleDecoration,
  onBack,
  onNext,
}: BuilderViewProps) {
  return (
    <div className={styles.builderView}>
      <p className={styles.stepText}>
        Step {step + 1} / {step - 1}
      </p>

      {step === 0 && (
        <DessertTypeStep
          selectedValues={selectedDessertTypes}
          onToggle={onToggleDessertType}
        />
      )}

      {step === 1 && (
        <FlavorStep
          selectedValues={selectedFlavors}
          onToggle={onToggleFlavors}
        />
      )}

      {step === 2 && (
        <ShapeStep selectedValues={selectedShapes} onToggle={onToggleShapes} />
      )}

      {step === 3 && (
        <TextureStep
          selectedValues={selectedTextures}
          onToggle={onToggleTextures}
        />
      )}

      {step === 4 && (
        <TemperatureStep
          selectedValues={selectedTemperature}
          onToggle={onToggleTemperature}
        />
      )}

      {step === 5 && (
        <DecorationStep
          selectedValues={selectedDecoration}
          onToggle={onToggleDecoration}
        />
      )}
    </div>
  );
}
