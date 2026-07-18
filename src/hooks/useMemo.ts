"use client";

import { createMemo, fetchMemos, updateMemo } from "@/services/memoApi";
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

  const addMemo = async (title: string, body: string) => {
    setError("");
    try {
      const newMemo = await createMemo({
        title,
        body,
      });

      setMemos((currentMemos) => [
        {
          ...newMemo,
          id: Date.now(),
        },
        ...currentMemos,
      ]);
    } catch (error) {
      setError(error instanceof Error ? error.message : "追加に失敗しました");
    }
  };

  const editMemo = async (id: number, title: string, body: string) => {
    try {
      setError("");

      const updatedMemo = await updateMemo(id, { title, body });
      setMemos((currentMemos) =>
        currentMemos.map((memo) =>
          memo.id === id
            ? {
                ...memo,
                title: updatedMemo.title,
                body: updatedMemo.body,
              }
            : memo,
        ),
      );
    } catch (error) {}
  };

  return { memos, isLoading, error };
}
