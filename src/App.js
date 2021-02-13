import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import customTheme from "./styles/theme";
import customFonts from "./styles/font-face";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <ChakraProvider theme={extendTheme(customTheme)}>
      <Global styles={customFonts} />
      <Router>
        <Switch>
          <Route path="/detail/:postId">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
