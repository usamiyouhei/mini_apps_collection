"use client";
import React, { useState } from "react";
import styles from "./MemoForm.module.scss";

type MemoFormProps = {
  onAdd: (title: string, body: string) => Promise<void>;
};

export default function MemoForm({ onAdd }: MemoFormProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      return;
    }
    await onAdd(title, body);

    setTitle("");
    setBody("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
      />
      <div className={styles.field}>
        <label className={styles.label} htmlFor="memo-body">
          本文
        </label>

        <textarea
          id="memo-body"
          value={body}
          className={styles.textarea}
          onChange={(e) => setBody(e.target.value)}
          placeholder="本文"
        />
      </div>
      <button type="submit" className={styles.addButton}>
        追加
      </button>
    </form>
  );
}
