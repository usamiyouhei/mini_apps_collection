"use client";

import React, { useState } from "react";
import styles from "@/app/todo/todo.module.css";

type Props = {
  onAddTask: (title: string, date: string) => void;
};

function getTodayString() {
  return new Date().toISOString().split("T")[0];
}
export default function TaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(getTodayString());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask(title, date);
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

        <input
          className={styles.dataInput}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className={styles.button} type="submit">
          追加
        </button>
      </form>
    </div>
  );
}
