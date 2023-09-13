import Link from "next/link";
import React from "react";

type Props = {};

function Nav({}: Props) {
  return (
    <div style={{ width: "100%", height: "50px" }}>
      <Link href={"/"}>Homepage</Link> <Link href={"/characters"}>Characters</Link>
    </div>
  );
}

export default Nav;
