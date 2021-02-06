import { Box, Center, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import React from "react";
import Typewriter from "typewriter-effect";

const emoji = require("emoji-dictionary");
const message =
  "I love backend " +
  emoji.getUnicode("heart") +
  " but I hate frontend " +
  emoji.getUnicode("boom");

const Profile = () => {
  return (
    <Grid className="globalGrid" w="100%" bg="#282a36">
      <Grid
        className="internalGrid"
        mr={200}
        ml={250}
        mt={10}
        mb={10}
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(12, 1fr)"
      >
        <GridItem colSpan={3}></GridItem>
        <GridItem colSpan={6} rowSpan={12}>
          <Box bg="#282a36" w="100%" h="100%" color="white">
            <Center className="centerCenter">
              <Grid templateRows="repeat(12, 1fr)">
                <GridItem rowSpan={8} textAlign="center">
                  <h1>Hi, I'm Claudia, software engineer</h1>
                </GridItem>
                <GridItem rowSpan={2} color="#8be9fd" textAlign="center">
                  <text>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString(message).deleteChars(23).start();
                      }}
                    />
                  </text>
                </GridItem>
                <GridItem rowSpan={2} color="white" textAlign="center">
                  <a href="https://github.com/colopezfuentes">
                    <IconButton
                      variant="outline"
                      colorScheme="telegram"
                      icon={<AiFillGithub />}
                      hasStripe="true"
                    />
                  </a>
                </GridItem>
              </Grid>
            </Center>
          </Box>
        </GridItem>
        <GridItem colSpan={3}></GridItem>
      </Grid>
    </Grid>
  );
};
export default Profile;
