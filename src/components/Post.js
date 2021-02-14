import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WrapItem, Center, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const bg_color = [
  "#f7d052",
  "#e89be0",
  "#ff94b0",
  "#90ddde",
  "#8cc3fa",
  "#d3ccfc",
  "#faa489",
];

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
          <motion.div variants={item}>
            <Link to={`/detail/${post.id}`}>
              <Box bg={bg_color[index]} p={10} borderRadius="10px" maxW="450px" boxShadow="xl">
                <motion.h2>{post.title}</motion.h2>
                <motion.p>{post.summary}</motion.p>
              </Box>
            </Link>
          </motion.div>
        </AnimatePresence>
      </Center>
    </WrapItem>
  );
}

export default Post;
