"use client";
import { useAtom } from "jotai";
import styles from "./JotaiDeletedTaskList.module.scss";
import { Task } from "@/types/task";
import {
  clearDeletedJotaiTasksAtom,
  restoreJotaiTaskAtom,
} from "@/atoms/todoAtoms";

type Props = {
  tasks: Task[];
};

export default function JotaiDeletedTaskList({ tasks }: Props) {
  const [, restoreTask] = useAtom(restoreJotaiTaskAtom);
  const [, clearDeletedTasks] = useAtom(clearDeletedJotaiTasksAtom);

  if (tasks.length === 0) return null;
  return (
    <section className={styles.deletedSection}>
      <div className={styles.deletedHeader}>
        <h2>Deleted Tasks</h2>
        <button
          type="button"
          className={styles.clearButton}
          onClick={clearDeletedTasks}
        >
          Clear All
        </button>
      </div>

      <ul className={styles.deletedList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.deletedItem}>
            <div>
              <p>{task.title}</p>
              <span>{task.date}</span>
            </div>

            <button
              type="button"
              className={styles.restoreButton}
              onClick={() => restoreTask(task.id)}
            >
              Restore
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
