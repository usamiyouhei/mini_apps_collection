import React from "react";
import styles from "@/styles/layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return <div className={styles.layout}></div>;
}
