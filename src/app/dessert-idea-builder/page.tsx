import React from "react";
import styles from "./dessert-idea-builder.module.scss";
import OptionStep from "@/components/dessert-builder/OptionStep";

export default function page() {
  return (
    <section>
      <h1>デザートアイデアアプリです</h1>
      <span>Stepごとに選択し、最終構成を決めます。</span>
    </section>
  );
}
