import React from "react";
import styles from "./dessert-idea-builder.module.scss";
import OptionStep from "@/components/dessert-builder/OptionStep";
import ResultCard from "@/components/dessert-builder/ResultCard";

export default function page() {
  return (
    <main className={styles.page}>
      <section className={styles.builder}>
        <div className={styles.header}>
          <p className={styles.label}>Dessert Idea Builder</p>
          <h1 className={styles.title}>デザートアイデア作成</h1>
          <p className={styles.description}>
            種類・味・食感・温度感・飾りを自由に組み合わせてデザート案を作成します。
          </p>
        </div>
      </section>
    </main>
  );
}
