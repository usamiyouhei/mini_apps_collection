"use client";

import WeatherCard from "@/components/weather/WeatherCard";
import WeatherSuggestion from "@/components/weather/WeatherSuggestions";
import useWeather from "@/hooks/useWeather";
import React from "react";

export default function WeatherPage() {
  const { weather, isLoading, error } = useWeather();
  return (
    <section>
      <h1>Weather App</h1>
      <p>天気アプリ</p>

      <div>
        <WeatherCard weather={weather} isLoading={isLoading} error={error} />
      </div>
    </section>
  );
}
