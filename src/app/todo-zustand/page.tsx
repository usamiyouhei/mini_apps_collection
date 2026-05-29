"use client";
import styles from "./todo-zustand.module.scss";
import ZustandTaskForm from "@/components/todo-zustand/ZustandTaskForm";
import ZustandTaskList from "@/components/todo-zustand/ZustandTaskList";
import { useTodoStore } from "@/store/todo.store";

export default function TodoZustandPage() {
  const tasks = useTodoStore((state) => state.tasks);
  const activetasks = tasks.filter((task) => !task.deleted);
  const deletedTasks = tasks.filter((task) => task.deleted);

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
        <ZustandTaskList tasks={activetasks} />
      </section>
    </main>
  );
}
