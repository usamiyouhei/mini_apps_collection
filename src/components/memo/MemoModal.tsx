import { Memo } from "@/types/memo";
import React, { useState } from "react";

type MemoModalProps = {
  memo: Memo;
  onEdit: (id: number, title: string, body: string) => Promise<void>;
  onClose: () => void;
};

export default function MemoModal({ memo, onEdit, onClose }: MemoModalProps) {
  const [title, setTitle] = useState(memo.title);
  const [body, setBody] = useState(memo.body);
  return <div></div>;
}
