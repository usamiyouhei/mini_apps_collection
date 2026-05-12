import Image from "next/image";
import styles from "./page.module.css";
import { AppCard } from "@/components/AppCard";

const apps = [
  {
    title: "Todo App",
    description: "タスクの追加・完了・削除を管理するアプリ",
    href: "/todo",
  },
  {
    title: "Memo App",
    description: "簡単なメモを保存・管理するアプリ",
    href: "/memo",
  },
  {
    title: "Weather App",
    description: "天気情報を表示するアプリ",
    href: "/weather",
  },
  {
    title: "Calculator App",
    description: "シンプルな電卓アプリ",
    href: "/calculator",
  },
  {
    title: "English Word App",
    description: "英単語をカード形式で学習するアプリ",
    href: "/english",
  },
];

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <p>Next.js</p>
        <h1>Mini Apps Collections</h1>

        <p>
          Next.js、TypeScript、SCSSで作るミニアプリ集です。
          ページ遷移・コンポーネント設計・状態管理を練習します。
        </p>
      </div>

      <div className={styles.grid}>
        {apps.map((app) => (
          <AppCard
            key={app.href}
            title={app.title}
            description={app.description}
            href={app.href}
          />
        ))}
      </div>
    </section>
  );
}
