import React from "react";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import { Wrap, WrapItem, Center, Box } from "@chakra-ui/react";

const items = [
  {
    id: 1,
    title: "Titulo uno",
    summary: " aiusdha dfsfn sa sl flashlksfkas",
  },
  {
    id: 2,
    title: "titulo dos",
    summary: " aiusdha dfsfn sa sl flashlks sd s dc sd csd cdfkas",
  },
  {
    id: 3,
    title: "titulo tres",
    summary: " aiusdha dfsfn sa sl f we fw ef wef weflashlksfkas",
  },
  {
    id: 4,
    title: "titulo cuatro",
    summary: " aiusdha dfsfn sa sl flashlksfkas",
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
const contianer = {
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
          <motion.div animate="visible" initial="hidden" variants={contianer}>
            <motion.div variants={item}>
              <Box bg={bg_color[index]} p={10} borderRadius="10px" fontFamily="FiraCode">
                <motion.h1>{post.title}</motion.h1>
                {post.summary}
              </Box>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Center>
    </WrapItem>
  );
}

export default Board;
