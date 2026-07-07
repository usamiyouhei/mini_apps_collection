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
  selectedTemperatures: string[];
  selectedDecorations: string[];

  onToggleDessertType: (value: string) => void;
  onToggleFlavor: (value: string) => void;
  onToggleShape: (value: string) => void;
  onToggleTexture: (value: string) => void;
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
  selectedTemperatures,
  selectedDecorations,
  onToggleDessertType,
  onToggleFlavor,
  onToggleShape,
  onToggleTexture,
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
          onToggle={onToggleFlavor}
        />
      )}

      {step === 2 && (
        <ShapeStep selectedValues={selectedShapes} onToggle={onToggleShape} />
      )}

      {step === 3 && (
        <TextureStep
          selectedValues={selectedTextures}
          onToggle={onToggleTexture}
        />
      )}

      {step === 4 && (
        <TemperatureStep
          selectedValues={selectedTemperatures}
          onToggle={onToggleTemperature}
        />
      )}

      {step === 5 && (
        <DecorationStep
          selectedValues={selectedDecorations}
          onToggle={onToggleDecoration}
        />
      )}

      <div className={styles.action}>
        <button
          type="button"
          onClick={onBack}
          disabled={step === 0}
          className={styles.secondalyButton}
        >
          戻る
        </button>

        <button type="button" onClick={onNext} className={styles.primaryButton}>
          {step === lastStep ? "アイデアを作成" : "次へ / スキップ"}
        </button>
      </div>
    </div>
  );
}
