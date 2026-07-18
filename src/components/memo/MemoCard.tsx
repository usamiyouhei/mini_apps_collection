import { Memo } from "@/types/memo";
import styles from "./MemoCard.module.scss";

type MemoCardProps = {
  memo: Memo;
};
export default function MemoCard({ memo }: MemoCardProps) {
  return (
    <li className={styles.memoItem}>
      <h2 className={styles.memoTitle}>{memo.title}</h2>
      <p className={styles.memoBody}>{memo.body}</p>
    </li>
  );
}
