import React from "react";
import {motion, AnimatePresence } from "framer-motion";
import { WrapItem, Center, Box } from "@chakra-ui/react";


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


function Post({ post, index }) {
  return (
    <WrapItem>
      <Center>
        <AnimatePresence>
          <motion.div animate="visible" initial="hidden" variants={container}>
            <motion.div variants={item}>
              <Box bg={bg_color[index]} p={10} borderRadius="10px" maxW="450px">
                <motion.h2>{post.title}</motion.h2>
                <motion.p>{post.summary}</motion.p>
              </Box>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Center>
    </WrapItem>
  );
}

export default Post;
