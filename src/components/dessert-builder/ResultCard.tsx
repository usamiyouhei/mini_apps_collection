import React from "react";
import styles from "./ResultCard.module.scss";

type ResultCardProps = {
  dessertTypes: string[];
  flavors: string[];
  textures: string[];
  temperatures: string[];
  decorations: string[];
  onBack: () => void;
  onReset: () => void;
  onSave: () => void;
};

const formatItems = (items: string[]) => {
  return items.length > 0 ? items.join(" / ") : "指定なし";
};
export default function ResultCard({
  dessertTypes,
  flavors,
  textures,
  temperatures,
  decorations,
  onBack,
  onSave,
  onReset,
}: ResultCardProps) {
  return (
    <section className={styles.result}>
      <p className={styles.label}>Result</p>
      <h2 className={styles.title}>デザートアイデア</h2>

      <div className={styles.card}>
        <div className={styles.row}>
          <span className={styles.category}>種類</span>
          <p>{formatItems(dessertTypes)}</p>
        </div>

        <div className={styles.row}>
          <span className={styles.category}>味の構成</span>
          <p>{formatItems(flavors)}</p>
        </div>

        <div className={styles.row}>
          <span className={styles.category}>食感</span>
          <p>{formatItems(textures)}</p>
        </div>

        <div className={styles.row}>
          <span className={styles.category}>温度感</span>
          <p>{formatItems(temperatures)}</p>
        </div>

        <div className={styles.row}>
          <span className={styles.category}>飾り・仕上げ</span>
          <p>{formatItems(decorations)}</p>
        </div>

        <div className={styles.ideaText}>
          <span className={styles.category}>アイデアメモ</span>
          <p>
            {formatItems(dessertTypes)}をベースに、{formatItems(flavors)}
            の要素を合わせ、{formatItems(textures)}
            の食感を組み合わせたデザート案です。温度感は
            {formatItems(temperatures)}、仕上げには{formatItems(decorations)}
            を使用します。
          </p>
        </div>
      </div>
    </section>
  );
}
