"use client";

import {
  createMemo,
  deleteMemo,
  fetchMemos,
  updateMemo,
} from "@/services/memoApi";
import type { Memo } from "@/types/memo";
import { useEffect, useState } from "react";

export function useMemos() {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMemos = async () => {
      try {
        const data = await fetchMemos();

        setMemos(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "メモの取得に失敗しました",
        );
      } finally {
        setIsLoading(false);
      }
    };

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
    setError("");
    try {
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
    } catch (error) {
      setError(error instanceof Error ? error.message : "編集に失敗しました");
    }
  };

  const removeMemo = async (id: number) => {
    try {
      await deleteMemo(id);

      setMemos((currentMemos) => currentMemos.filter((memo) => memo.id !== id));
    } catch (error) {
      setError(error instanceof Error ? error.message : "削除に失敗しました。");
    }
  };

  return { memos, isLoading, error, addMemo, editMemo, removeMemo };
}
