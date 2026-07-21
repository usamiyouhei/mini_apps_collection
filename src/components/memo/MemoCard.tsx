import { Memo } from "@/types/memo";
import styles from "./MemoCard.module.scss";

type MemoCardProps = {
  memo: Memo;
  onRemove: () => void;
};
export default function MemoCard({ memo, onRemove }: MemoCardProps) {
  return (
    <div className={styles.card}>
      <li className={styles.memoItem}>
        <h2 className={styles.memoTitle}>{memo.title}</h2>
        <p className={styles.memoBody}>{memo.body}</p>
        <div className={styles.buttonContents}>
          <button onClick={onRemove}>削除</button>
        </div>
      </li>
    </div>
  );
}
