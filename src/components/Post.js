import React from "react";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import { Wrap, WrapItem, Center, Box } from "@chakra-ui/react";

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

const bg_color = [
  "#f7d052",
  "#e89be0",
  "#ff94b0",
  "#90ddde",
  "#8cc3fa",
  "#d3ccfc",
  "#faa489",
];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const item = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function Board() {
  return (
    <AnimateSharedLayout type="crossfade">
      <Wrap spacing="30px" justify="center">
        {items.map((item, index) => (
          <Post key={item.id} index={index} post={item} />
        ))}
      </Wrap>
    </AnimateSharedLayout>
  );
}

function Post({ post, index }) {
  return (
    <WrapItem>
      <Center>
        <AnimatePresence>
          <motion.div animate="visible" initial="hidden" variants={container}>
            <motion.div variants={item}>
              <Box bg={bg_color[index]} p={10} borderRadius="10px" maxW="450px">
                <motion.h1>{post.title}</motion.h1>
                <motion.p>{post.summary}</motion.p>
              </Box>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Center>
    </WrapItem>
  );
}

export default Board;
