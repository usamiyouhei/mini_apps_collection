import React from "react";
import styles from "./BuilderView.module.scss";
import StepProgress from "../layout/StepProgress";

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

export default function BuilderView() {
  return (
    <section className={styles.builderView}>
      <StepProgress />
    </section>
  );
}
