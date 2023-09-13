import { useRouter } from "next/router";
import React from "react";

type Props = {};

function CharactersById({}: Props) {
  const router = useRouter();
  console.log(router);
  return <h1>Characters Page 1</h1>;
}

export default CharactersById;
