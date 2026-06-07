"use client";

import {
  activeJotaiTasksAtom,
  addJotaiTaskAtom,
  deletedJotaiTasksAtom,
  incompleteJotaiCountAtom,
} from "@/atoms/todoAtoms";
import { useAtom, useSetAtom } from "jotai";
import styles from "./todo-jotai.module.scss";
import React from "react";
import JotaiTaskForm from "@/components/todo-jotai/JotaiTaskForm";
import JotaiTaskList from "@/components/todo-jotai/JotaiTaskList";
import JotaiDeletedTaskList from "@/components/todo-jotai/JotaiDeletedTaskList";
import WeatherCard from "@/components/weather/WeatherCard";
import useWeather from "@/hooks/useWeather";
import WeatherSuggestions from "@/components/weather/WeatherSuggestions";

export default function TodoJotaiPage() {
  const [activeTasks] = useAtom(activeJotaiTasksAtom);
  const [deletedTasks] = useAtom(deletedJotaiTasksAtom);
  const [incompleteCount] = useAtom(incompleteJotaiCountAtom);

  const addTask = useSetAtom(addJotaiTaskAtom);
  const { weather, isLoading, error } = useWeather();

  const handleAddSuggestionTask = (title: string) => {
    addTask({
      title,
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>Jotai Todo App</p>
          <h1 className={styles.title}>Atomic Task Manager</h1>
          <p>Jotaiのatomで状態を分割して管理するTodoアプリです。</p>
        </div>

        <WeatherCard weather={weather} isLoading={isLoading} error={error} />
        <WeatherSuggestions
          weather={weather}
          onAddTask={handleAddSuggestionTask}
        />
        <div className={styles.summary}>
          <p>未完了タスク</p>
          <strong>{incompleteCount}</strong>
        </div>

        <JotaiTaskForm />
        <JotaiTaskList tasks={activeTasks} />
        <JotaiDeletedTaskList tasks={deletedTasks} />
      </div>
    </section>
  );
}
