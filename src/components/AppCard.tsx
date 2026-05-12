import Link from "next/link";
import styles from "@/styles/appCard.module.scss";

type AppCardProps = {
  title: string;
  description: string;
  href: string;
};

export function AppCard({ title, description, href }: AppCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <span className={styles.next}>Open App →</span>
    </Link>
  );
}
