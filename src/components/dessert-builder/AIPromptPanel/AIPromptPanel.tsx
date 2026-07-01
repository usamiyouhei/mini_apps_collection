import React, { useState } from "react";
import styles from "./AIPromptPanel.module.scss";

type AIPromptPanelProps = {
  prompt: string;
};

export default function AIPromptPanel({ prompt }: AIPromptPanelProps) {
  const [copyMessage, setCopyMessage] = useState("");

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopyMessage("コピーしました");
    } catch (error) {
      setCopyMessage("コピーに失敗しました");
      console.error(error);
    }
  };
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <p className={styles.label}>AI Prompt</p>
        <h2 className={styles.title}>AI画像生成プロンプト</h2>
      </div>

      <textarea className={styles.textarea} value={prompt} readOnly />

      <div className={styles.actions}>
        <button type="button" onClick={copyPrompt}>
          コピーする
        </button>
      </div>

      {copyMessage && <p className={styles.message}>{copyMessage}</p>}
    </section>
  );
}
