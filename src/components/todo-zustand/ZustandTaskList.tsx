import { Task } from "@/types/task";
import styles from "./ZustandTaskList.module.scss";
import ZustandTaskItem from "./ZustandTaskItem";

type Props = {
  tasks: Task[];
};

export default function ZustandTaskList({ tasks }: Props) {
  if (tasks.length === 0) {
    return (
      <div className={styles.empty}>
        <p>まだタスクがありません。</p>
      </div>
    );
  }
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>Tasks</h2>
        <span>{tasks.length} items</span>
      </div>

      <ul className={styles.list}>
        {tasks.map((task) => (
          <ZustandTaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}
