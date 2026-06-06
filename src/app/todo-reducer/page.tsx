"use client";

import TaskForm from "@/components/todo-reducer/ReducerTaskForm";
import TaskList from "@/components/todo-reducer/ReducerTaskList";
import { taskReducer } from "@/reducers/task.reducer";
import { useEffect, useReducer } from "react";
import styles from "./todo-reducer.module.scss";
import DeletedTaskList from "@/components/todo-reducer/ReducerDeletedTaskList";
import useWeather from "@/hooks/useWeather";
import WeatherCard from "@/components/weather/WeatherCard";
import WeatherSuggestions from "@/components/weather/WeatherSuggestions";

const STORAGE_KEY = "todo-tasks";

export default function TodoPage() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const { weather, isLoading, error } = useWeather();

  useEffect(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (!savedTasks) return;

    try {
      const parsedTasks = JSON.parse(savedTasks);
      dispatch({ type: "SET_TASKS", payload: parsedTasks });
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const activeTasks = tasks.filter((task) => !task.deleted);
  const deletedTasks = tasks.filter((task) => task.deleted);

  const incompleteCount = activeTasks.filter((task) => !task.completed).length;
  const completedCount = activeTasks.filter((task) => task.completed).length;

  const handleAddTask = (title: string, date: string) => {
    dispatch({ type: "ADD_TASK", payload: { title, date } });
  };

  const handleToggleTask = (id: string) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const handleDeleteTask = (id: string) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleRestoreTask = (id: string) => {
    dispatch({ type: "RESTORE_TASK", payload: id });
  };

  const handleClearDeletedTasks = () => {
    dispatch({ type: "CLEAR_DELETED_TASKS" });
  };

  const handleAddSuggestionTask = (title: string) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        title,
        date: new Date().toISOString().split("T")[0],
      },
    });
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
        <WeatherCard weather={weather} isLoading={isLoading} error={error} />
        <WeatherSuggestions
          weather={weather}
          onAddTask={handleAddSuggestionTask}
        />
        <TaskForm onAddTask={handleAddTask} />

        <TaskList
          tasks={activeTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />

        <div className={styles.footer}>
          <p>
            未完了:<span className={styles.count}>{incompleteCount}</span>件
          </p>
          <p>
            完了:<span className={styles.count}>{completedCount}</span>件
          </p>
        </div>
      </div>

      <DeletedTaskList
        tasks={deletedTasks}
        onRestoreTask={handleRestoreTask}
        onClearDeletedTasks={handleClearDeletedTasks}
      />
    </section>
  );
}
