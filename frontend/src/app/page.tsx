'use client';

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";


// ToDo: Create a list of items for the motivation-crate components
// Todo: Create a component
// ToDo: Create a mapper to render the crates

// display motivation crate

function MotivationGear({ index, motivator }: { index: number; motivator: string }) {
    const classPrefix = 'motivator-gear ';
    const gearClass = classPrefix + (index % 2 === 0 ? 'clockwise' : 'anti-clockwise');
    return (
        <Image
            className={gearClass}
            src="/small_silver_gear.png"
            alt={motivator}
            width={100}
            height={100}
        />
    );
}

export default function Home() {

  const [motivators, setMotivators] = React.useState<string[]>([]);

  function displayCrate() {
    setMotivators((prev: string[]) => [...prev, "crate"]);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Motivation Machine</h1>
        <h2>Under Construction</h2>

        <button onClick={displayCrate}>Get Motivated</button>

        {motivators.map((motivator, index) => (
            <MotivationGear key={index} index={index} motivator={motivator} />
        ))}

        <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
            />
            Deploy now
          </a>
          <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
