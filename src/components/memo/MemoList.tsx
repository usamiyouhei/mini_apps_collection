import { Memo } from "@/types/memo";
import MemoCard from "./MemoCard";
import styles from "./MemoList.module.scss";

type MemoListProps = {
  memos: Memo[];
  onRemove: (id: number) => void | Promise<void>;
};

export default function MemoList({ memos, onRemove }: MemoListProps) {
  if (memos.length === 0) {
    return <p>メモはありません。</p>;
  }
  return (
    <ul className={styles.memoList}>
      {memos.map((memo) => (
        <MemoCard
          key={memo.id}
          memo={memo}
          onRemove={() => onRemove(memo.id)}
        />
      ))}
    </ul>
  );
}
