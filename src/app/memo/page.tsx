"use client";
import MemoList from "@/components/memo/MemoList";
import styles from "./memo.module.scss";
import { useMemos } from "@/hooks/useMemos";
import MemoForm from "@/components/memo/MemoForm";
import { useState } from "react";
import { Memo } from "@/types/memo";
import MemoModal from "@/components/memo/MemoModal";

export default function MemoPage() {
  const { memos, isLoading, error, addMemo, editMemo, removeMemo } = useMemos();
  const [editingMemo, setEditingMemo] = useState<Memo | null>(null);

  if (isLoading) {
    return <p>読み込み中...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <main className={styles.container}>
      <h1 className={styles.mainTitle}>Memo App</h1>

      <MemoForm onAdd={addMemo} />

      {error && <p>{error}</p>}

      <MemoList memos={memos} onRemove={removeMemo} />

      {editingMemo && (
        <MemoModal
          memo={editingMemo}
          onEdit={editMemo}
          onClose={() => setEditingMemo(null)}
        />
      )}

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
