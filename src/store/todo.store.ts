import { Task } from "@/types/task";
import { create } from "zustand";
import React from "react";
import { persist } from "zustand/middleware";

type TodoStore = {
  tasks: Task[];
  addTask: (title: string, date: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  restoreTask: (id: string) => void;
  clearDeletedTasks: () => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (title, date) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              title,
              date,
              completed: false,
              deleted: false,
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, deleted: true } : task,
          ),
        })),
      restoreTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, deleted: false } : task,
          ),
        })),
      clearDeletedTasks: () =>
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.deleted),
        })),
    }),
    {
      name: "zustand-todo-tasks",
    },
  ),
);
