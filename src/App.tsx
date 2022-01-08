import React from "react";
import { Box, Text } from "@unoui/atoms";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box bg="red" m={5} p={3}>
        This is a Box from UnoUi
      </Box>
      <Text as='p'>
        This is a text
      </Text>
    </div>
  );
}

export default App;
