import { Memo } from "@/types/memo";
import React, { useState } from "react";
import styles from "./MemoModal.module.scss";

type MemoModalProps = {
  memo: Memo;
  onEdit: (id: number, title: string, body: string) => Promise<void>;
  onClose: () => void;
};

export default function MemoModal({ memo, onEdit, onClose }: MemoModalProps) {
  console.log("MemoModalが描画された");
  const [title, setTitle] = useState(memo.title);
  const [body, setBody] = useState(memo.body);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      return;
    }

    await onEdit(memo.id, title, body);
    onClose();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>メモを編集</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="edit-title">本文</label>

            <textarea
              id="edit-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={onClose}>
              キャンセル
            </button>
            <button type="submit">保存</button>
          </div>
        </form>
      </div>
    </div>
  );
}
