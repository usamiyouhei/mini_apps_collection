import React from "react";
import styles from "./SavedIdeaList.module.scss";
import { DessertIdea } from "@/types/dessert";

type SavedIdeaListProps = {
  ideas: DessertIdea[];
  onDelete: (title: string) => void;
};

const formatItems = (items: string[]) => {
  return items.length > 0 ? items.join(" / ") : "指定なし";
};

const formatDate = (isoString: string) => {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(isoString));
};

export default function SavedIdeaList({ ideas, onDelete }: SavedIdeaListProps) {
  if (ideas.length === 0) {
    return (
      <section className={styles.savedList}>
        <h2 className={styles.title}>保存済みアイデア</h2>
        <p className={styles.empty}>まだ保存されたアイデアはありません。</p>
      </section>
    );
  }
  return;
  <section></section>;
}
