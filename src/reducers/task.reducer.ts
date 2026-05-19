import { Task } from "@/types/task";

export type TaskAction =
  | { type: "ADD_TASK"; payload: { title: string; date: string } }
  | { type: "TOGGLE_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "RESTORE_TASK"; payload: string }
  | { type: "CLEAR_DELETED_TASKS" }
  | { type: "SET_TASKS"; payload: Task[] };

import React from "react";

export function taskReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...tasks,
        {
          id: crypto.randomUUID(),
          title: action.payload.title,
          date: action.payload.date,
          completed: false,
          deleted: false,
          createdAt: new Date().toISOString(),
        },
      ];

    case "TOGGLE_TASK":
      return tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );

    case "DELETE_TASK":
      return tasks.map((task) =>
        task.id !== action.payload ? { ...task, deleted: true } : task,
      );

    case "RESTORE_TASK":
      return tasks.map((task) =>
        task.id !== action.payload ? { ...task, deleted: false } : task,
      );

    case "CLEAR_DELETED_TASKS":
      return tasks.filter((task) => !task.deleted);

    case "SET_TASKS":
      return action.payload;

    default:
      return tasks;
  }
}
