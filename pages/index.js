import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Donut Restaurant</title>
        <meta name="description" content="Best donut in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      homepage
    </div>
  );
}
