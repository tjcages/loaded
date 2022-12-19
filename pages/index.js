import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="/logo.jpg" alt="Logo" width={200} height={200} />
    </main>
  );
}
