import React from "react";
import styles from "./OptionStep.module.scss";

type OptionStepProps = {
  title: string;
  description?: string;
  options: string[];
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function OptionStep({
  title,
  description = "複数選択できます。選ばずに進むこともできます。",
  options,
  selectedValues,
  onToggle,
}: OptionStepProps) {
  return (
    <section className={styles.step}>
      <h2 className={styles.title}>{title}</h2>

      <p className={styles.description}>{description}</p>

      <div className={styles.optionList}>
        {options.map((option) => {
          const isSelected = selectedValues.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              className={`${styles.optionButton} ${isSelected ? styles.selected : ""}`}
            >
              <span className={styles.check}>{isSelected ? "✓" : ""}</span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
