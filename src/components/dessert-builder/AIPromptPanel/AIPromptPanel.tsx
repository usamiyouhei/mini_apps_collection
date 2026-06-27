import React, { useState } from "react";

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
    <section>
      <h2>AI画像生成プロンプト</h2>

      <textarea value={prompt} readOnly />

      <button type="button" onClick={copyPrompt}>
        コピーする
      </button>

      {copyMessage && <p>{copyMessage}</p>}
    </section>
  );
}
