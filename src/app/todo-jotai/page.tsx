"use client";

import {
  activeJotaiTasksAtom,
  deletedJotaiTasksAtom,
  incompleteJotaiCountAtom,
} from "@/atoms/todoAtoms";
import { useAtom } from "jotai";
import styles from "./todo-jotai.module.scss";
import React from "react";

export default function TodoJotaiPage() {
  const [activeTasks] = useAtom(activeJotaiTasksAtom);
  const [deletedTasks] = useAtom(deletedJotaiTasksAtom);
  const [incompleteCount] = useAtom(incompleteJotaiCountAtom);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>Jotai Todo App</p>
          <h1 className={styles.title}>Atomic Task Manager</h1>
          <p>Jotaiのatomで状態を分割して管理するTodoアプリです。</p>
        </div>

        <div className={styles.summary}>
          <p>未完了タスク</p>
          <strong>{incompleteCount}</strong>
        </div>
      </div>
    </section>
  );
}
