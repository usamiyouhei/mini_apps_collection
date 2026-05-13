import { Task } from "@/types/task";

export type TaskAction =
  | { type: "ADD_TASK"; payload: string }
  | { type: "TOGGLE_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: string };

import React from "react";

export function taskReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...tasks,
        {
          id: crypto.randomUUID(),
          title: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TASK":
      return tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );

    case "DELETE_TASK":
      return tasks.filter((task) => task.id !== action.payload);

    default:
      return tasks;
  }
}
