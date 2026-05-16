import React from "react";
import { Task } from "@/types/task";
import styles from "@/app/todo/todo.module.css";

type Props = {
  task: Task;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export default function TaskItem({ task, onToggleTask, onDeleteTask }: Props) {
  return (
    <li className={styles.item}>
      <label className={styles.itemLabel}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span
          className={`${styles.taskTitle} ${task.completed ? styles.completed : ""}`}
        >
          {task.title}
        </span>
      </label>

      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => onDeleteTask(task.id)}
      >
        削除
      </button>
    </li>
  );
}
