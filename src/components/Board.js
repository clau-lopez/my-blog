import React from "react";
import Post from "./Post";
import { AnimateSharedLayout, motion } from "framer-motion";
import { Center, Wrap, Grid, GridItem } from "@chakra-ui/react";

const items = [
  {
    id: 1,
    title: "Título uno",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Título dos",
    summary: "Vestibulum fermentum lectus vitae luctus consequat",
  },
  {
    id: 3,
    title: "Título tres",
    summary:
      "Suspendisse commodo at eros id condimentum. Nulla sit amet nisl ante.",
  },
  {
    id: 4,
    title: "Título cuatro",
    summary: "Maecenas nibh urna, facilisis in porttitor a, tempus id tortor",
  },

  {
    id: 5,
    title: "Título cinco",
    summary: "Maecenddas nibh urna, facilisis in porttitor a, tempus id tortor",
  },
];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.075,
    },
  },
};

function Board() {
  return (
    <Grid templateRows="repeat(12, 1fr)">
      <AnimateSharedLayout type="crossfade">
        <GridItem rowSpan={1}>
          <Center mb={2} color="#6272a4">
            <h1>My Posts</h1>
          </Center>
        </GridItem>

        <GridItem rowSpan={9}>
          <motion.div variants={container} initial="hidden" animate="visible">
            <Wrap spacing="30px" justify="center" mr="30px" ml="30px">
              {items.map((item, index) => (
                <Post key={item.id} index={index} post={item} />
              ))}
            </Wrap>
          </motion.div>
        </GridItem>
      </AnimateSharedLayout>
    </Grid>
  );
}

export default Board;
