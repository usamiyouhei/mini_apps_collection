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
    <section>
      <div></div>
    </section>
  );
}
