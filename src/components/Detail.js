import React from "react";
import { Box, Center, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

function Detail() {
  let { postId } = useParams();

  return (
    <>
      <Grid className="globalGrid" w="100%" bg="#282a36">
        <Grid
          className="internalGrid"
          mr={200}
          ml={250}
          mt={10}
          mb={10}
          templateColumns="repeat(12, 1fr)"
        >
          <GridItem colSpan={3} className="testclass">
            <Box>
              <Center className="centerCenter">
                <Grid templateRows="repeat(6, 1fr)">
                  <GridItem rowSpan={4} textAlign="center">
                    <Link to="/">
                      <IconButton
                        mt={50}
                        variant="outline"
                        colorScheme="telegram"
                        icon={<ArrowBackIcon />}
                      />
                    </Link>
                  </GridItem>
                </Grid>
              </Center>
            </Box>
          </GridItem>
          <GridItem colSpan={6}>
            <Box bg="#282a36" w="100%" h="100%" color="white">
              <Center className="centerCenter">
                <Grid templateRows="repeat(12, 1fr)">
                  <GridItem rowSpan={8} textAlign="center">
                    <h1>Hola este es el post {postId}</h1>
                  </GridItem>
                </Grid>
              </Center>
            </Box>
          </GridItem>
          <GridItem colSpan={3} />{" "}
        </Grid>
      </Grid>
    </>
  );
}

export default Detail;
