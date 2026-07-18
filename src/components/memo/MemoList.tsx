import { Memo } from "@/types/memo";
import MemoCard from "./MemoCard";
import styles from "./MemoList.module.scss";

type MemoListProps = {
  memos: Memo[];
};

export default function MemoList({ memos }: MemoListProps) {
  if (memos.length === 0) {
    return <p>メモはありません。</p>;
  }
  return (
    <ul className={styles.memoList}>
      {memos.map((memo) => (
        <MemoCard key={memo.id} memo={memo} />
      ))}
    </ul>
  );
}
