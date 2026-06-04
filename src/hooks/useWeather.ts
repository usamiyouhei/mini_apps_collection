import { WeatherData } from "@/types/weather";
import { useEffect, useState } from "react";

type WeatherApiResponse = {
  current_weather: {
    temperature: number;
    windspeed: number;
    weathercode: number;
  };
};

export default function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=25.2048&longitude=55.2708&current_weather=true",
        );
        if (!res.ok) {
          throw new Error("天気データの取得に失敗しました。");
        }

        const data: WeatherApiResponse = await res.json();

        setWeather({
          city: "Dubai",
          temperature: data.current_weather.temperature,
          windspeed: data.current_weather.windspeed,
          weathercode: data.current_weather.weathercode,
        });
      } catch (error) {
        console.error(error);
      }
    };

    return () => {};
  }, []);
}
