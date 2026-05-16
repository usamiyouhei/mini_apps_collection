"use client";

import React, { useState } from "react";
import styles from "@/app/todo/todo.module.css";

type Props = {
  onAddTask: (title: string) => void;
};
export default function TaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask(title);
    setTitle("");
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="タスクを入力..."
        />
        <button className={styles.button} type="submit">
          追加
        </button>
      </form>
    </div>
  );
}
