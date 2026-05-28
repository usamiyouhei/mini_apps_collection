import React from "react";
import styles from "./todo-zustand.module.scss";
import ZustandTaskForm from "@/components/todo-zustand/ZustandTaskForm";

export default function TodoZustandPage() {
  return (
    <main className={styles.page}>
      <section className={styles.todoCard}>
        <div className={styles.header}>
          <p className={styles.label}>Zustand Todo</p>
          <h1 className={styles.title}>今日のタスクを整理する</h1>
          <p className={styles.description}>
            Zustandで状態管理したTodoアプリです。タスクの追加・完了・削除・復元ができます。
          </p>
        </div>
        <ZustandTaskForm />
      </section>
    </main>
  );
}
