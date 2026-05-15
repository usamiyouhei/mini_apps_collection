"use client";

import TaskForm from "@/components/todo/TaskForm";
import TaskList from "@/components/todo/TaskList";
import { taskReducer } from "@/reducers/task.reducer";
import { useReducer } from "react";

export default function TodoPage() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const incompleteCount = tasks.filter((task) => !task.completed).length;
  return (
    <section>
      <h1>Todo App</h1>
      <p>タスク管理アプリ</p>

      <TaskForm />

      <TaskList />
    </section>
  );
}
