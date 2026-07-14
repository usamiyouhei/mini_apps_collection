import type { Memo } from "@/types/memo";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchMemos(): Promise<Memo[]> {
  const response = await fetch(`${API_URL}?_limit=10`);

  if (!response.ok) {
    throw new Error("メモの取得に失敗しました。");
  }

  const data: Memo[] = await response.json();

  return data;
}
