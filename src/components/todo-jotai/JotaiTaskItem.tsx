"use client";
import React from "react";
import styles from "./JotaiTaskItem.module.scss";
import { deleteJotaiTaskAtom, toggleJotaiTaskAtom } from "@/atoms/todoAtoms";
import { useAtom } from "jotai";
import { Task } from "@/types/task";

type Props = {
  task: Task;
};

export default function JotaiTaskItem({ task }: Props) {
  const [, toggleTask] = useAtom(toggleJotaiTaskAtom);
  const [, deleteTask] = useAtom(deleteJotaiTaskAtom);
  return (
    <li className={styles.taskItem}>
      <button
        type="button"
        onClick={() => toggleTask(task.id)}
        className={`${styles.checkButton} ${task.completed ? styles.checked : ""}`}
      >
        {task.completed ? "✓" : ""}
      </button>

      <div className={styles.taskBody}>
        <p
          className={`${styles.taskTitle} ${task.completed ? styles.completed : ""}`}
        >
          {task.title}
        </p>
        <span className={styles.taskDate}>{task.date}</span>
      </div>

      <button
        type="button"
        onClick={() => deleteTask(task.id)}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </li>
  );
}
