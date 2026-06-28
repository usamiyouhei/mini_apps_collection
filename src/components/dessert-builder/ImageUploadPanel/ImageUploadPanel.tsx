import React, { ChangeEvent, DragEvent, useState } from "react";
import styles from "./ImageUploadPanel.module.scss";

export default function ImageUploadPanel() {
  const [imageUrl, setImageUrl] = useState("");
  const [filePreviewUrl, setFilePreviewUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const previewUrl = filePreviewUrl || imageUrl;

  const handleImageUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
    setFilePreviewUrl("");
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setFilePreviewUrl(reader.result);
        setImageUrl("");
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
    setImageUrl("");
    setFilePreviewUrl("");
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
      </div>
    </section>
  );
}
