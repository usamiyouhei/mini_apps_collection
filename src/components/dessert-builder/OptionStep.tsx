import React from "react";
import styles from "./OptionStep.module.scss";

type OptionStepProps = {
  title: string;
  options: string[];
  selectedValues: string[];
  onToggle: (value: string) => void;
};

export default function OptionStep({
  title,
  options,
  selectedValues,
  onToggle,
}: OptionStepProps) {
  return (
    <section className={styles.step}>
      <h2 className={styles.title}>{title}</h2>

      <p className={styles.description}>
        複数選択できます。選ばずに進むこともできます。
      </p>

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
              {isSelected && <span>✓</span>}
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
