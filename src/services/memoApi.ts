import type { Memo } from "@/types/memo";

type CreateMemoInput = {
  title: string;
  body: string;
};

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchMemos(): Promise<Memo[]> {
  const response = await fetch(`${API_URL}?_limit=10`);

  if (!response.ok) {
    throw new Error("メモの取得に失敗しました。");
  }

  const data: Memo[] = await response.json();

  return data;
}

export async function createMemo(input: CreateMemoInput): Promise<Memo[]> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...input,
      userId: 1,
    }),
  });

  if (!response.ok) {
    throw new Error("メモの追加に失敗しました。");
  }
  return response.json();
}

export async function updateMemo(id: number, input: string): Promise<Memo[]> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("メモの編集に失敗しました。");
  }
  return response.json();
}
