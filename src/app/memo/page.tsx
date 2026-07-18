"use client";
import MemoList from "@/components/memo/MemoList";
import styles from "./memo.module.scss";
import { useMemos } from "@/hooks/useMemos";

export default function MemoPage() {
  const { memos, isLoading, error } = useMemos();

  if (isLoading) {
    return <p>読み込み中...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <main className={styles.container}>
      <h1 className={styles.mainTitle}>Memo App</h1>

      <MemoList memos={memos} />

      {/* {memos.length === 0 ? (
        <p>メモはありません。</p>
      ) : (
        <ul className={styles.memoList}>
          {memos.map((memo) => (
            <li key={memo.id} className={styles.memoItem}>
              <h2 className={styles.memoTitle}>{memo.title}</h2>
              <p className={styles.memoBody}>{memo.body}</p>
            </li>
          ))}
        </ul>
      )} */}
    </main>
  );
}
