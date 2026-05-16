import React from "react";
import { Task } from "@/types/task";
import TaskItem from "./TaskItem";
import styles from "@/app/todo/todo.module.css";

type Props = {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export default function TaskList({ tasks, onToggleTask, onDeleteTask }: Props) {
  if (tasks.length === 0) {
    return <p className={styles.empty}>まだタスクがありません</p>;
  }
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
