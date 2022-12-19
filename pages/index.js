import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Meta from "../components/Meta"
import MagneticButton from "../components/Magnetic";

export default function Home() {
  useEffect(() => {
    createMagneticButtons();
  }, []);

  function createMagneticButtons(id = '[data-dom="magnetic"]') {
    return [...document.querySelectorAll(id)].map((item) => {
      const el = new MagneticButton(item);
      return el;
    });
  }

  return (
    <Meta>
    <main className={styles.main}>
      <Image
        src="/logo.jpg"
        alt="Logo"
        width={200}
        height={200}
        data-dom="magnetic"
      />
    </main>
    </Meta>
  );
}
