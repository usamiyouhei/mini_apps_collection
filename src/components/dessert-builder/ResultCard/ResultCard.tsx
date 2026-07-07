import { DessertIdea } from "@/types/dessert";
import React from "react";
import styles from "./ResultCard.module.scss";

type ResultCardProps = {
  idea: DessertIdea;
  aiPrompt: string;
  onSave: () => void;
};

const formatItems = (items: string[] | undefined) => {
  return items && items.length > 0 ? items.join(" / ") : "指定なし";
};

export default function ResultCard({ idea, onSave }: ResultCardProps) {
  return (
    <section>
      <div className={styles.header}>
        <p className={styles.label}>Result</p>
        <h2 className={styles.title}>完成したデザート案</h2>
      </div>

      <div className={styles.list}>
        <div className={styles.item}>
          <span className={styles.itemLabel}>タイプ</span>
          <p>{formatItems(idea.dessertTypes)}</p>
        </div>

        <div className={styles.item}>
          <span className={styles.itemLabel}>フレーバー</span>
          <p>{formatItems(idea.flavors)}</p>
        </div>

        <div className={styles.item}>
          <span className={styles.itemLabel}>形状</span>
          <p>{formatItems(idea.shapes)}</p>
        </div>
        <div className={styles.item}>
          <span className={styles.itemLabel}>食感</span>
          <p>{formatItems(idea.textures)}</p>
        </div>
        <div className={styles.item}>
          <span className={styles.itemLabel}>温度</span>
          <p>{formatItems(idea.temperatures)}</p>
        </div>
        <div className={styles.item}>
          <span className={styles.itemLabel}>飾り</span>
          <p>{formatItems(idea.decorations)}</p>
        </div>
      </div>

      <button type="button" className={styles.saveButton} onClick={onSave}>
        このアイデアを保存
      </button>
    </section>
  );
}
