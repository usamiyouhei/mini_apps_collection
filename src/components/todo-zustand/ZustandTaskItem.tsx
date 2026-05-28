import { Task } from "@/types/task";
import styles from "./ZustandTaskItem.module.scss";
import { useTodoStore } from "@/store/todo.store";

type Props = {
  task: Task;
};
export default function ZustandTaskItem({ task }: Props) {
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const deleteTask = useTodoStore((state) => state.deleteTask);
  return (
    <li className={styles.item}>
      <button
        className={`${styles.checkButton} ${task.completed ? styles.completed : ""}`}
        type="button"
        onClick={() => toggleTask(task.id)}
        aria-label="タスクの完了状態を切り替える"
      >
        {task.completed ? "✓" : ""}
      </button>
      <div className={styles.content}>
        <p
          className={`${styles.title} ${task.completed ? styles.completedText : ""}`}
        >
          {task.title}
        </p>
        <time className={styles.date}>{task.date}</time>
      </div>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}
