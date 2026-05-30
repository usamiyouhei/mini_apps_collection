import { Task } from "@/types/task";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const jotaiTasksAtom = atomWithStorage<Task[]>("jotai-todo-tasks", []);

export const activeJotaiTasksAtom = atom((get) =>
  get(jotaiTasksAtom).filter((task) => !task.deleted),
);

export const deletedJotaiTasksAtom = atom((get) =>
  get(jotaiTasksAtom).filter((task) => !task.deleted),
);

export const incompleteJotaiCountAtom = atom(
  (get) => get(activeJotaiTasksAtom).filter((task) => !task.completed).length,
);
