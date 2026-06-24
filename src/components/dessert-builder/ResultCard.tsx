import React, { ChangeEvent, DragEvent, useRef, useState } from "react";
import styles from "./ResultCard.module.scss";

type ResultCardProps = {
  dessertTypes: string[];
  flavors: string[];
  textures: string[];
  temperatures: string[];
  decorations: string[];
  aiPrompt: string;
  imageUrl: string;
  imageFileDataUrl: string;
  onChangeImageUrl: (value: string) => void;
  onChangeImageFileDataUrl: (value: string) => void;
  onBack: () => void;
  onReset: () => void;
  onSave: () => void;
};

const formatItems = (items: string[]) => {
  return items.length > 0 ? items.join(" / ") : "指定なし";
};
export default function ResultCard({
  dessertTypes,
  flavors,
  textures,
  temperatures,
  decorations,
  aiPrompt,
  imageUrl,
  imageFileDataUrl,
  onChangeImageUrl,
  onChangeImageFileDataUrl,
  onBack,
  onReset,
  onSave,
}: ResultCardProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const previewSrc = imageFileDataUrl || imageUrl;

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(aiPrompt);
    alert("コピーしました");
  };

  const convertFileToDataUrl = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("画像ファイルを選択してください。");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      if (typeof result === "string") {
        onChangeImageFileDataUrl(result);
        onChangeImageUrl("");
      }
    };

    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    convertFileToDataUrl(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    convertFileToDataUrl(file);
  };

  const handleDraggOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const clearImage = () => {
    onChangeImageUrl("");
    onChangeImageFileDataUrl("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <section className={styles.result}>
      <p className={styles.label}>Result</p>
      <h2 className={styles.title}>デザートアイデア</h2>

      <div className={styles.card}>
        <div className={styles.row}>
          <span className={styles.category}>種類</span>
          <p>{formatItems(dessertTypes)}</p>
        </div>

        <div className={styles.row}>
          <span className={styles.category}>味の構成</span>
          <p>{formatItems(flavors)}</p>
        </div>

        <div className={styles.row}>
          <span className={styles.category}>食感</span>
          <p>{formatItems(textures)}</p>
        </div>

        <div className={styles.row}>
          <span className={styles.category}>温度感</span>
          <p>{formatItems(temperatures)}</p>
        </div>

        <div className={styles.row}>
          <span className={styles.category}>飾り・仕上げ</span>
          <p>{formatItems(decorations)}</p>
        </div>

        <div className={styles.ideaText}>
          <span className={styles.category}>アイデアメモ</span>
          <p>
            {formatItems(dessertTypes)}をベースに、{formatItems(flavors)}
            の要素を合わせ、{formatItems(textures)}
            の食感を組み合わせたデザート案です。温度感は
            {formatItems(temperatures)}、仕上げには{formatItems(decorations)}
            を使用します。
          </p>
        </div>

        <div className={styles.promptBox}>
          <div className={styles.promptHeader}>
            <span className={styles.category}>AI画像生成プロンプト</span>

            <button
              type="button"
              onClick={copyPrompt}
              className={styles.copyButton}
            >
              コピー
            </button>
          </div>
          <pre className={styles.prompt}>{aiPrompt}</pre>
        </div>

        <div className={styles.imageArea}>
          <label className={styles.imageLabel} htmlFor="imageUrl">
            AIで生成した画像URL
          </label>

          <input
            id="imageUrl"
            type="url"
            value={imageUrl}
            onChange={(e) => {
              onChangeImageUrl(e.target.value);
              onChangeImageFileDataUrl("");
            }}
            placeholder="https://example.com/dessert-image.jpg"
            className={styles.imageInput}
          />
          <div
            className={`${styles.dropZone} ${isDragging ? styles.dragging : ""}`}
            onDrop={handleDrop}
            onDragOver={handleDraggOver}
            onDragLeave={handleDragLeave}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
            <p className={styles.dropText}>
              画像をクリックして選択、またはドラッグ&ドロップ
            </p>
          </div>

          <div className={styles.preview}>
            {previewSrc ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previewSrc} alt="AI生成デザート画像" />
              </>
            ) : (
              <p>AIで生成した画像URLを貼ると、ここにプレビューされます。</p>
            )}
          </div>

          {previewSrc && (
            <button
              type="button"
              onClick={clearImage}
              className={styles.clearImageButton}
            >
              画像を削除
            </button>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={onBack}
          className={styles.secondaryButton}
        >
          戻る
        </button>

        <button
          type="button"
          onClick={onReset}
          className={styles.secondaryButton}
        >
          最初から
        </button>

        <button type="button" onClick={onSave} className={styles.primaryButton}>
          保存する
        </button>
      </div>
    </section>
  );
}
