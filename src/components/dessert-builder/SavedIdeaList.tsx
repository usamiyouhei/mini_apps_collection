import React from "react";
import styles from "./SavedIdeaList.module.scss";
import { DessertIdea } from "@/types/dessert";

type SavedIdeaListProps = {
  ideas: DessertIdea[];
  onDelete: (title: string) => void;
};

const formatItems = (items: string[]) => {
  return items.length > 0 ? items.join(" / ") : "指定なし";
};

const formatDate = (isoString: string) => {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(isoString));
};

export default function SavedIdeaList({ ideas, onDelete }: SavedIdeaListProps) {
  return <div></div>;
}
