import { Memo } from "@/types/memo";
import React, { useState } from "react";
import styles from "./MemoModal.module.scss";

type MemoModalProps = {
  memo: Memo;
  onEdit: (id: number, title: string, body: string) => Promise<void>;
  onClose: () => void;
};

export default function MemoModal({ memo, onEdit, onClose }: MemoModalProps) {
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
  return <div className={styles.overlay}></div>;
}
