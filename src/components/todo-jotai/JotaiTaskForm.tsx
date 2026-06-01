"use client";

import { useAtom } from "jotai";
import styles from "./JotaiTaskForm.module.scss";
import { FormEvent, useState } from "react";
import { addJotaiTaskAtom } from "@/atoms/todoAtoms";

export default function JotaiTaskForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [, addTask] = useAtom(addJotaiTaskAtom);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !date) return;
    addTask({
      title: title.trim(),
      date,
    });
    setTitle("");
    setDate("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={title}
        placeholder="タスクを入力"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles.dateInput}
      />
      <button type="submit" className={styles.addButton}>
        Add Task
      </button>
    </form>
  );
}
