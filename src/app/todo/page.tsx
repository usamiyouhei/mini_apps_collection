"use client";

import TaskForm from "@/components/todo/TaskForm";
import TaskList from "@/components/todo/TaskList";
import { taskReducer } from "@/reducers/task.reducer";
import { useReducer } from "react";
import styles from "./todo.module.css";

export default function TodoPage() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const incompleteCount = tasks.filter((task) => !task.completed).length;

  const handleAddTask = (title: string) => {
    dispatch({ type: "ADD_TASK", payload: title });
  };

  const handleToggleTask = (id: string) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const handleDeleteTask = (id: string) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  return (
    <section className={styles.todo}>
      <div className={styles.header}>
        <span className={styles.label}>useReducer Practice</span>
        <h1 className={styles.title}>Todo App</h1>
        <p className={styles.text}>
          ReactのuseReducerを使ってタスクの追加、完了切り替え・削除を管理するアプリです
        </p>
      </div>

      <div className={styles.card}>
        <TaskForm onAddTask={handleAddTask} />

        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>

      <div className={styles.footer}>
        <p>
          未完了:<span className={styles.count}></span>件
        </p>
        <p>
          完了:<span className={styles.count}></span>件
        </p>
      </div>
    </section>
  );
}
