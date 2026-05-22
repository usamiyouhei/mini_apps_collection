import { Task } from "@/types/task";
import styles from "@/app/todo/todo.module.css";

type Props = {
  tasks: Task[];
  onRestoreTask: (id: string) => void;
  onClearDeletedTasks: () => void;
};

export default function DeletedTaskList({
  tasks,
  onRestoreTask,
  onClearDeletedTasks,
}: Props) {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <div>
      <section className={styles.deletedSection}>
        <div className={styles.deletedHeader}>
          <h2 className={styles.deletedTitle}>削除済みタスク</h2>

          <button
            className={styles.clearButton}
            type="button"
            onClick={onClearDeletedTasks}
          >
            完全削除
          </button>
        </div>
        <ul className={styles.deletedList}>
          {tasks.map((task) => (
            <li className={styles.deletedItem} key={task.id}>
              <div>
                <p className={styles.deletedTaskTitle}>{task.title}</p>
                <p className={styles.deletedTaskDate}>{task.date}</p>
              </div>
              <button
                className={styles.restore}
                type="button"
                onClick={() => onRestoreTask(task.id)}
              >
                戻す
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
