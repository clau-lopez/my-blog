import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import customTheme from "./styles/theme";
import customFonts from "./styles/font-face";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={extendTheme(customTheme)}>
      <Global styles={customFonts} />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
