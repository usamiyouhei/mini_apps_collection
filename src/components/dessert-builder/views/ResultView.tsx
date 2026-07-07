import { DessertIdea } from "@/types/dessert";
import React from "react";
import styles from "./ResultView.module.scss";

type ResultViewProps = {
  result: DessertIdea;
  aiPrompt: string;
  onSave: () => void;
  onReset: () => void;
};

export default function ResultView({
  result,
  aiPrompt,
  onSave,
  onReset,
}: ResultViewProps) {
  return <div className={styles.resultView}></div>;
}
