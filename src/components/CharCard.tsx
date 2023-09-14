import Image from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

interface CharCardProps {
  character: {
    id: string;
    image: string;
    name: string;
  };
}

const CharContainer = styled.div`
  border: 3px solid white;
  border-radius: 10px;
  margin-top: 10px;
`;

const CharCard = ({ character }: CharCardProps) => {
  return (
    <div>
      <Link href={`/character/${character.id}`} prefetch={false}>
        <CharContainer>
          <Image loader={() => character.image} src={character.image} unoptimized width={300} height={300} alt={character.name} />
          <h2>{character.name}</h2>
        </CharContainer>
      </Link>
    </div>
  );
};

export default CharCard;
