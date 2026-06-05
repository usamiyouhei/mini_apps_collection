import React from "react";
import styles from "./WeatherCard.module.scss";
import { WeatherData } from "@/types/weather";

type Props = {
  weather: WeatherData | null;
  isLoading: boolean;
  error: string;
};

function getWeatherLabel(code: number) {
  if (code === 0) return "快晴";
  if (code >= 1 && code <= 3) return "晴れ・曇り";
  if (code >= 45 && code <= 48) return "霧";
  if (code >= 51 && code <= 67) return "雨";
  if (code >= 80 && code <= 82) return "にわか雨";
  if (code >= 95) return "雷雨";

  return "不明";
}

export default function WeatherCard({ weather, isLoading, error }: Props) {
  if (isLoading) {
    return <div className={styles.card}>天気を読み込み中...</div>;
  }

  if (error) {
    return <div className={styles.card}>{error}</div>;
  }

  if (!weather) {
    return <div className={styles.card}>天気情報がありません。</div>;
  }
  return <div></div>;
}
