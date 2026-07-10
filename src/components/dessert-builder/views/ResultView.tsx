import { DessertIdea } from "@/types/dessert";
import React from "react";
import styles from "./ResultView.module.scss";
import ResultCard from "../ResultCard/ResultCard";

type ResultViewProps = {
  result: DessertIdea;
  aiPrompt: string;
  imageUrl: string;
  imageFileDataUrl: string;
  onChangeImageUrl: (value: string) => void;
  onChangeImageFileDataUrl: (value: string) => void;
  onBack: () => void;
  onSave: () => void;
  onReset: () => void;
};

export default function ResultView({
  result,
  aiPrompt,
  imageUrl,
  imageFileDataUrl,
  onChangeImageUrl,
  onChangeImageFileDataUrl,
  onBack,
  onSave,
  onReset,
}: ResultViewProps) {
  return (
    <div className={styles.resultView}>
      <ResultCard
        idea={result}
        aiPrompt={aiPrompt}
        imageUrl={imageUrl}
        imageFileDataUrl={imageFileDataUrl}
        onChangeImageUrl={onChangeImageUrl}
        onChangeImageFileDataUrl={onChangeImageFileDataUrl}
        onSave={onSave}
        onBack={onBack}
        onReset={onReset}
      />

      <button
        type="button"
        className={styles.secondarybutton}
        onClick={onReset}
      >
        最初から作り直す
      </button>
    </div>
  );
}
