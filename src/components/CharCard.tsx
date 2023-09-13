import Image from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CharCardProps {
  character: {
    id: string;
    image: string;
    name: string;
  };
}

const CharCard = ({ character }: CharCardProps) => {
  return (
    <div>
      <Link href={`/character/${character.id}`} prefetch={false}>
        <div>
          <Image loader={() => character.image} src={character.image} unoptimized width={300} height={300} alt={character.name} />
          <h2>{character.name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default CharCard;
