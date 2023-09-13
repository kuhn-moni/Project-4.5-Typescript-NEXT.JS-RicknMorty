import Image from "next/image";
import Link from "next/link";

const CharCard = ({ character }) => {
  return (
    <div href={`/character/${character.id}`} prefetch={false}>
      <Image loader={() => character.image} src={character.image} unoptimized width={300} height={300} alt={character.name} />
      <h2>{character.name}</h2>
    </div>
  );
};

export default CharCard;
