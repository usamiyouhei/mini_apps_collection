import Link from "next/link";
import React from "react";

type AppCardProps = {
  title: string;
  description: string;
  href: string;
};

export function AppCard({ title, description, href }: AppCardProps) {
  return (
    <Link href={href}>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>Open App →</span>
    </Link>
  );
}
