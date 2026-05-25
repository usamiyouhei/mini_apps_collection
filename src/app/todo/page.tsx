import React from "react";
import Link from "next/link";
import styles from "./todo.module.scss";

const todoApps = [
  {
    title: "useReducer Todo",
    description: "React標準のuseReducerで状態管理するTodoアプリ",
    href: "/todo-reducer",
  },
  {
    title: "Zustand Todo",
    description: "軽量状態管理ライブラリZustandで作るTodoアプリ",
    href: "/todo-zustand",
  },
  {
    title: "Jotai Todo",
    description: "Atomベースで状態管理するJotai版Todoアプリ",
    href: "/todo-jotai",
  },
];

export default function TodoSelectPage() {
  return (
    <div>
      <section className={styles.todoSelect}>
        <div className={styles.inner}>
          <p className={styles.label}>Todo Apps</p>

          <h1 className={styles.title}>Todoアプリを選択</h1>
          <p className={styles.text}>
            useReducer、Zustand、Jotaiの3種類の状態管理で作ったTodoアプリを比較できます。
          </p>

          <div className={styles.grid}>
            {todoApps.map((app) => (
              <Link key={app.href} href={app.href} className={styles.card}>
                <h2>{app.title}</h2>
                <p>{app.description}</p>
                <span>開く</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
