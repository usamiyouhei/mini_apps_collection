import React from "react";
import styles from "./SavedIdeaList.module.scss";
import { DessertIdea } from "@/types/dessert";

type SavedIdeaListProps = {
  ideas: DessertIdea[];
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
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

export default function SavedIdeaList({
  ideas = [],
  onDelete,
  onToggleFavorite,
}: SavedIdeaListProps) {
  if (ideas.length === 0) {
    return (
      <section className={styles.savedList}>
        <h2 className={styles.title}>保存済みアイデア</h2>
        <p className={styles.empty}>まだ保存されたアイデアはありません。</p>
      </section>
    );
  }
  return (
    <section className={styles.savedIdea}>
      <h2 className={styles.title}>保存済みアイデア</h2>

      <div className={styles.list}>
        {ideas.map((idea) => {
          const imageSrc = idea.imageFileDataUrl || idea.imageUrl;
          return (
            <article key={idea.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.date}>{formatDate(idea.createdAt)}</p>
                  <h3 className={styles.cardTitle}>
                    {formatItems(idea.dessertTypes)}
                  </h3>
                </div>

                <div className={styles.actions}>
                  <button
                    type="button"
                    onClick={() => onToggleFavorite(idea.id)}
                    className={styles.favoriteButton}
                    aria-label={
                      idea.favorite
                        ? "お気に入りに登録する"
                        : "お気に入りに追加する"
                    }
                  >
                    {idea.favorite ? "★" : "⭐︎"}
                  </button>

                  <button
                    type="button"
                    onClick={() => onDelete(idea.id)}
                    className={styles.deleteButton}
                  >
                    削除
                  </button>
                </div>
              </div>

              {imageSrc && (
                <div className={styles.imageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageSrc} alt="保存されたAI生成デザート画像" />
                </div>
              )}

              <div className={styles.content}>
                <div className={styles.item}>
                  <span>味</span>
                  <p>{formatItems(idea.flavors)}</p>
                </div>

                <div className={styles.item}>
                  <span>食感</span>
                  <p>{formatItems(idea.textures)}</p>
                </div>

                <div className={styles.item}>
                  <span>温度感</span>
                  <p>{formatItems(idea.temperatures)}</p>
                </div>

                <div className={styles.item}>
                  <span>飾り</span>
                  <p>{formatItems(idea.decorations)}</p>
                </div>
              </div>

              <div className={styles.promptWrap}>
                <span>AIプロンプト</span>
                <pre>{idea.aiPrompt}</pre>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
