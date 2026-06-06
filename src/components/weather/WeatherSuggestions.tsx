import React from "react";
import styles from "./WeatherSuggestions.module.scss";
import { WeatherData } from "@/types/weather";

type Props = {
  weather: WeatherData | null;
  onAddTask: (title: string) => void;
};

function getSuggestions(weather: WeatherData | null) {
  if (!weather) return [];

  const suggestions: string[] = [];

  if (weather.temperature >= 35) {
    suggestions.push("水分補給する");
    suggestions.push("室内で軽く運動する");
  }

  if (weather.temperature < 35) {
    suggestions.push("散歩をする");
    suggestions.push("買い物に行く");
  }

  if (weather.weathercode === 0) {
    suggestions.push("洗濯する");
  }

  if (weather.weathercode >= 51 && weather.weathercode <= 82) {
    suggestions.push("傘を持って出かける");
    suggestions.push("部屋を掃除する");
  }
  if (suggestions.length === 0) {
    suggestions.push("英語学習する");
    suggestions.push("プログラミング学習をする");
  }
  return suggestions;
}
export default function WeatherSuggestion({ weather, onAddTask }: Props) {
  const suggestions = getSuggestions(weather);
  if (!weather || suggestions.length === 0) {
    return null;
  }
  return (
    <section className={styles.suggestions}>
      <div className={styles.header}>
        <p className={styles.label}>Weather Suggestions</p>
        <h2 className={styles.title}>今日のおすすめタスク</h2>
      </div>

      <div className={styles.list}>
        {suggestions.map((suggestion) => (
          <div key={suggestion} className={styles.item}>
            <span>{suggestion}</span>

            <button
              type="button"
              className={styles.button}
              onClick={() => onAddTask(suggestion)}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
