import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import Theme from './ui/Theme';
import Header from "../components/ui/Header";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
