import { Task } from "@/types/task";
import styles from "./ZustandDeleteTask.module.scss";
import { useTodoStore } from "@/store/todo.store";

type Props = {
  tasks: Task[];
};

export default function ZustandDeleteTask({ tasks }: Props) {
  const restoreTask = useTodoStore((state) => state.restoreTask);
  const clearDeletedTasks = useTodoStore((state) => state.clearDeletedTasks);

  if (tasks.length === 0) {
    return null;
  }
  return (
    <section className={styles.deletedSection}>
      <div className={styles.sectionHeader}>
        <h2>Deleted</h2>
        <button className={styles.clearButton} onClick={clearDeletedTasks}>
          Clear all
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li className={styles.item} key={task.id}>
            <div>
              <p className={styles.title}>{task.title}</p>
              <time className={styles.date}>{task.date}</time>
            </div>

            <button
              className={styles.restoreButton}
              type="button"
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
