"use client";
import { useState } from "react";
import styles from "./dessert-idea-builder.module.scss";

import type { DessertIdea } from "@/types/dessert";

const STORAGE_KEY = "dessert-ideas";
const TOTAL_STEPS = 5;

export default function DessertBuilderPage() {
  const [step, setStep] = useState(0);

  const [selectedDessertTypes, setSelectedDessertTypes] = useState<string[]>(
    [],
  );
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedTextures, setSelectedTextures] = useState<string[]>([]);
  const [selectedTemperatures, setSelectedTemperatures] = useState<string[]>(
    [],
  );
  const [selectedDecorations, setSelectedDecorations] = useState<string[]>([]);

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
