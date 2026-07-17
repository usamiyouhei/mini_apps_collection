"use client";

import { fetchMemos } from "@/services/memoApi";
import { Memo } from "@/types/memo";
import { useCallback, useEffect, useState } from "react";

export function useMemo() {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadMemos = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");

      const data = await fetchMemos();

      setMemos(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "メモの取得に失敗しました",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadMemos();
  }, []);

  const addMemos = async () => {};

  return { memos, isLoading, error };
}
