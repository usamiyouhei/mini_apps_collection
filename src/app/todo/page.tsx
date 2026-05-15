"use client";

import TaskForm from "@/components/todo/TaskForm";
import TaskList from "@/components/todo/TaskList";
import { taskReducer } from "@/reducers/task.reducer";
import { useReducer } from "react";

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
    <section>
      <h1>Todo App</h1>
      <p>タスク管理アプリ</p>

      <TaskForm onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
      <p>未完了:{incompleteCount}件</p>
    </section>
  );
}
