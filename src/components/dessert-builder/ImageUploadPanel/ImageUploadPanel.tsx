import React, { ChangeEvent, DragEvent, useState } from "react";
import styles from "./ImageUploadPanel.module.scss";

type ImageUploadPanel = {
  imageUrl: string;
  imageFileDataUrl: string;
  onChangeImageUrl: (value: string) => void;
  onChangeImageFileDataUrl: (value: string) => void;
};

export default function ImageUploadPanel({
  imageUrl,
  imageFileDataUrl,
  onChangeImageUrl,
  onChangeImageFileDataUrl,
}: ImageUploadPanel) {
  const previewSrc = imageFileDataUrl || imageUrl;
  // const [imageUrl, setImageUrl] = useState("");
  // const [filePreviewUrl, setFilePreviewUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const previewUrl = imageFileDataUrl || imageUrl;

  const handleImageUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeImageUrl(event.target.value);
    onChangeImageFileDataUrl("");
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChangeImageFileDataUrl(reader.result);
        onChangeImageUrl("");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    handleFile(file);
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(true);
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];
    if (!file) return;

    handleFile(file);
  };

  const clearImage = () => {
    onChangeImageUrl("");
    onChangeImageFileDataUrl("");
  };

  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <p className={styles.label}>Generated Image</p>
        <h2 className={styles.title}>AI生成画像を配置</h2>
      </div>

      <div className={styles.field}>
        <label className={styles.inputLabel} htmlFor="imageUrl">
          画像URL
        </label>

        <input
          id="imageUrl"
          type="url"
          value={imageUrl}
          onChange={handleImageUrlChange}
          placeholder="https://example.com/image.jpg"
          className={styles.input}
        />

        <label
          className={`${styles.dropArea} ${isDragging ? styles.dragging : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
          <span>画像を選択、またはドラッグ＆ドロップ</span>
        </label>

        {previewUrl && (
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewUrl} alt="AI生成画像プレビュー" />
            <button
              type="button"
              className={styles.clearButton}
              onClick={clearImage}
            >
              画像を削除
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
