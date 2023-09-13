import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CharCard from "../components/CharCard";

const inter = Inter({ subsets: ["latin"] });

export const API_URL = "https://rickandmortyapi.com/api/character";

export default function Home({ characters }) {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Homepage</h1>
        <div className={styles.characterGrid}>
          {characters.map((character) => (
            <CharCard key={character.id} character={character} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(API_URL);
  const data = await response.json();
  const characters = data.results;

  return {
    props: {
      characters,
    },
  };
}
