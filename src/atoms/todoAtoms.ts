import { Task } from "@/types/task";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const jotaiTasksAtom = atomWithStorage<Task[]>("jotai-todo-tasks", []);

export const activeJotaiTasksAtom = atom((get) =>
  get(jotaiTasksAtom).filter((task) => !task.deleted),
);

export const deletedJotaiTasksAtom = atom((get) =>
  get(jotaiTasksAtom).filter((task) => task.deleted),
);

export const incompleteJotaiCountAtom = atom(
  (get) => get(activeJotaiTasksAtom).filter((task) => !task.completed).length,
);

export const addJotaiTaskAtom = atom(
  null,
  (get, set, payload: { title: string; date: string }) => {
    const tasks = get(jotaiTasksAtom);

    set(jotaiTasksAtom, [
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: payload.title,
        date: payload.date,
        completed: false,
        deleted: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  },
);

export const toggleJotaiTaskAtom = atom(null, (get, set, id: string) => {
  const tasks = get(jotaiTasksAtom);

  set(
    jotaiTasksAtom,
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    ),
  );
});

export const deleteJotaiTaskAtom = atom(null, (get, set, id: string) => {
  const tasks = get(jotaiTasksAtom);

  set(
    jotaiTasksAtom,
    tasks.map((task) => (task.id === id ? { ...task, deleted: true } : task)),
  );
});

export const restoreJotaiTaskAtom = atom(null, (get, set, id: string) => {
  const tasks = get(jotaiTasksAtom);

  set(
    jotaiTasksAtom,
    tasks.map((task) => (task.id === id ? { ...task, deleted: false } : task)),
  );
});

export const clearDeletedJotaiTasksAtom = atom(null, (get, set) => {
  const tasks = get(jotaiTasksAtom);

  set(
    jotaiTasksAtom,
    tasks.filter((task) => !task.deleted),
  );
});
