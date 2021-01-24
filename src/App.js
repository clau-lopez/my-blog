import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "FiraCode",
      },
      fonts: {
        body: "FiraCode",
        heading: "FiraCode",
        mono: "FiraCode",
      },
    }),
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>

        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
