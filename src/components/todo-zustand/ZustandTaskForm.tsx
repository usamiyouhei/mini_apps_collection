"use client";

import { useTodoStore } from "@/store/todo.store";
import { useState } from "react";
import styles from "./ZustandTaskForm.module.scss";

export default function ZustandTaskForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const addTask = useTodoStore((state) => state.addTask);

  return (
    <form className={styles.form}>
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
