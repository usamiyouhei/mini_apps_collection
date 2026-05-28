"use client";

import { useTodoStore } from "@/store/todo.store";
import { FormEvent, useState } from "react";
import styles from "./ZustandTaskForm.module.scss";

export default function ZustandTaskForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const addTask = useTodoStore((state) => state.addTask);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !date) return;

    addTask(title, date);
    setTitle("");
    setDate("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          type="text"
          placeholder="タスクを入力"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={styles.dateInput}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit">
        Add Task
      </button>
    </form>
  );
}
