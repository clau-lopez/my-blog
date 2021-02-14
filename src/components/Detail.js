import React, { useEffect, useState } from "react";
import { Box, Center, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import postServiceInstance from "../client/PostsService";
import { AnimateSharedLayout, motion } from "framer-motion";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.075,
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

function Detail() {
  let { postId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    postServiceInstance
      .getPost(postId)
      .then((response) => response.json())
      .then((responseAsJson) => {
        setData(responseAsJson);
      });
  }, [postId]);

  return (
    <>
      <Grid
        className="internalGrid"
        w="100%"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(10, 1fr)"
      >
        <GridItem bg="#282a36" colSpan={3} rowSpan={2} className="iconClass">
          <Grid templateRows="repeat(10, 1fr)">
            <GridItem rowSpan={7} className="upIconClass" />
            <GridItem rowSpan={3} className="downIconClass" textAlign="center">
              <Link to="/">
                <IconButton
                  variant="outline"
                  colorScheme="telegram"
                  icon={<ArrowBackIcon />}
                />
              </Link>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem bg="#282a36" colSpan={6} rowSpan={2} className="titleClass">
          <Grid templateRows="repeat(10, 1fr)">
            <GridItem rowSpan={3} />
            <GridItem rowSpan={7}>
              <Box w="100%" h="100%" color="white" textAlign="center">
                <h1>{data.title}</h1>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem bg="#282a36" colSpan={3} rowSpan={2} />

        <GridItem bg="gray.50" colSpan={2} rowSpan={8} />
        <GridItem bg="gray.50" colSpan={8} rowSpan={8}>
          <AnimateSharedLayout type="crossfade">
            <motion.div variants={container} initial="hidden" animate="visible">
              <motion.div variants={item}>
                <Box boxShadow="xl" p={6} mt={4} ml={4} mr={4} rounded="md" minH={700} bg="white" h="100%">
                  <Center className="centerCenter">{data.summary}</Center>
                </Box>
              </motion.div>
            </motion.div>
          </AnimateSharedLayout>
        </GridItem>
        <GridItem bg="gray.50" colSpan={2} rowSpan={8} />
      </Grid>
    </>
  );
}

export default Detail;
