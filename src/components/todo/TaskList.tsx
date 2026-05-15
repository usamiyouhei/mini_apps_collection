import React from "react";
import { Task } from "@/types/task";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export default function TaskList({ tasks, onToggleTask, onDeleteTask }: Props) {
  if (tasks.length === 0) {
    return <p>まだタスクがありません</p>;
  }
  return (
    <ul>
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
