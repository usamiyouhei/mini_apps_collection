import styles from "@/styles/header.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Next mini Apps
      </Link>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/todo">Todo</Link>
        <Link href="/memo">Memo</Link>
        <Link href="/weather">Weather</Link>
        <Link href="/calculater">Calculater</Link>
        <Link href="/english">English</Link>
        <Link href="/dessert-idea-builder">Dessert Idea Builder</Link>
      </nav>
    </header>
  );
}
