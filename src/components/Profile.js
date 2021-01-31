import { Box, Center, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai"
import React from "react";
import Typewriter from "typewriter-effect";

const emoji = require("emoji-dictionary");
const myEmoji =
  "I love backend " +
  emoji.getUnicode("heart") +
  " but I hate frontend " +
  emoji.getUnicode("boom");

const Profile = () => {
  return (
    <Grid w="100%" bg="#282a36">
      <Grid
        mr="200px"
        ml="250px"
        h="400px"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(12, 1fr)"
      >
        <GridItem colSpan={12} rowSpan={12}>
          <Box bg="#282a36" w="100%" h="100%" color="white">
            <Center w="100%" h="100%" pl="250px" pr="250px">
              <Grid templateRows="repeat(12, 1fr)">
                <GridItem rowSpan={8} textAlign="center">
                  <h1>Hi, I'm Claudia, software engineer</h1>
                </GridItem>
                <GridItem rowSpan={2} color="#8be9fd" textAlign="center">
                  <text>
                    <Typewriter
                      options={{
                        strings: [myEmoji],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </text>
                </GridItem>
                <GridItem rowSpan={2} color="white" textAlign="center">
                  <IconButton
                    variant="outline"
                    colorScheme="telegram"
                    icon={<AiFillGithub/>}
                    hasStripe="true"
                  
                  />
                </GridItem>
              </Grid>
            </Center>
          </Box>
        </GridItem>
      </Grid>
    </Grid>
  );
};
export default Profile;
