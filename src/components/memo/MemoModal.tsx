import { Memo } from "@/types/memo";
import React, { useState } from "react";

type MemoModalProps = {
  memo: Memo;
};

export default function MemoModal({ memo }: MemoModalProps) {
  const [title, setTitle] = useState(memo.title);
  const [body, setBody] = useState(memo.body);
  return <div></div>;
}
