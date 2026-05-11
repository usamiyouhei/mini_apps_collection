import React from "react";
import styles from "@/styles/header.modules.scss";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Next mini Apps
      </Link>

      <nav>
        <Link href="/Todo">Todo</Link>
        <Link href="/Memo">Memo</Link>
        <Link href="/Weather">Weather</Link>
        <Link href="/Calculater">Calculater</Link>
        <Link href="English">English</Link>
      </nav>
    </header>
  );
}
