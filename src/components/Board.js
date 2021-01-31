import React from "react";
import Post from "./Post";
import { AnimateSharedLayout } from "framer-motion";
import { Center, Wrap } from "@chakra-ui/react";

const items = [
  {
    id: 1,
    title: "Titulo uno",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "titulo dos",
    summary: "Vestibulum fermentum lectus vitae luctus consequat",
  },
  {
    id: 3,
    title: "titulo tres",
    summary:
      "Suspendisse commodo at eros id condimentum. Nulla sit amet nisl ante.",
  },
  {
    id: 4,
    title: "titulo cuatro",
    summary: "Maecenas nibh urna, facilisis in porttitor a, tempus id tortor",
  },
];

function Board() {
  return (
    <AnimateSharedLayout type="crossfade">
      <Center marginBottom="-30px" color="#6272a4">
        <h1>My Posts</h1>
      </Center>

      <Wrap spacing="30px" justify="center">
        {items.map((item, index) => (
          <Post key={item.id} index={index} post={item} />
        ))}
      </Wrap>
    </AnimateSharedLayout>
  );
}

export default Board;
