import React from "react";
import MainScreen from './Components/MainScreen';
import { ThemeProvider } from "react-bootstrap";

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <MainScreen />
    </ThemeProvider>
  );
}


export default App;