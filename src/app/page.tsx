import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <p>Next.js</p>
        <h1>Mini Apps Collections</h1>

        <p>
          Next.js、TypeScript、SCSSで作るミニアプリ集です
          ページ遷移・コンポーネント設計・状態管理を練習します。
        </p>
      </div>
    </section>
  );
}
