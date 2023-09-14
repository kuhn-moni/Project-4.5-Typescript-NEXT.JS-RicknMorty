import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Character } from "@/@types/ApiSchema";

const inter = Inter({ subsets: ["latin"] });

export const API_URL = "https://rickandmortyapi.com/api/character";

export default function CharactersById({ character }) {
  return (
    <>
      <Head>
        <title>{character.name}</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>{character.name}</h1>
        <div>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Type: {character.type}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch(API_URL);
  const data = await response.json();
  const characters = data.results;

  const paths = characters.map((character) => ({
    params: { id: character.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${API_URL}/${params.id}`);
  const character = await response.json();

  return {
    props: {
      character,
    },
  };
}
