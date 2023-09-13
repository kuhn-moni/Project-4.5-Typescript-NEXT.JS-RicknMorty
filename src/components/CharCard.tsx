import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const CharContent = styled.a`
  display: block;
  text-decoration: none;
  color: #000;
`;

const CharCard = ({ character }) => {
  return (
    <CharContent href={`/character/${character.id}`} prefetch={false}>
      <Image loader={() => character.image} src={character.image} unoptimized width={300} height={300} alt={character.name} />
      <h2>{character.name}</h2>
    </CharContent>
  );
};

export default CharCard;
