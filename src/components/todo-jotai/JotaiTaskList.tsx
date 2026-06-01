"use client";
import { Task } from "@/types/task";
import styles from "./JotaiTaskList.module.scss";
import React from "react";
import JotaiTaskItem from "./JotaiTaskItem";
type Props = {
  tasks: Task[];
};

export default function JotaiTaskList({ tasks }: Props) {
  if (tasks.length === 0) {
    return <p className={styles.empty}>タスクはまだありません。</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <JotaiTaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
