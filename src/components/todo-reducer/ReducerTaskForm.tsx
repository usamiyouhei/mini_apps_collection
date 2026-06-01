"use client";

import React, { useState } from "react";
import styles from "@/app/todo-reducer/todo-reducer.module.scss";

type Props = {
  onAddTask: (title: string, date: string) => void;
};

// function getTodayString() {
//   return new Date().toISOString().split("T")[0];
// }

function getDateStringAfter(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}
export default function TaskForm({ onAddTask }: Props) {
  const today = getDateStringAfter(0);
  const nextWeek = getDateStringAfter(7);
  const [title, setTitle] = useState("");
  // const [date, setDate] = useState(getTodayString());
  const [date, setDate] = useState(today);

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
          className={styles.dateInput}
          type="date"
          value={date}
          min={today}
          max={nextWeek}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className={styles.button} type="submit">
          追加
        </button>
      </form>
    </div>
  );
}
