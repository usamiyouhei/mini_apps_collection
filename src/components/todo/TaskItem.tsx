import React from "react";
import { Task } from "@/types/task";

type Props = {
  task: Task;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export default function TaskItem({ task, onToggleTask, onDeleteTask }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span>{task.title}</span>
      </label>

      <button type="button" onClick={() => onDeleteTask(task.id)}>
        削除
      </button>
    </li>
  );
}
