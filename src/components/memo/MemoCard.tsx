import { Memo } from "@/types/memo";
import styles from "./MemoCard.module.scss";

type MemoCardProps = {
  memo: Memo;
  onEdit: () => void;
  onRemove: () => void;
};
export default function MemoCard({ memo, onEdit, onRemove }: MemoCardProps) {
  return (
    <li className={styles.memoItem}>
      <div className={styles.card}>
        <h2 className={styles.memoTitle}>{memo.title}</h2>
        <p className={styles.memoBody}>{memo.body}</p>
        <div className={styles.buttonContents}>
          <button onClick={onEdit}>編集</button>
          <button onClick={onRemove}>削除</button>
        </div>
      </div>
    </li>
  );
}
