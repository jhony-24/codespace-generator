
import React, { useState } from "react";
import { render, Text, Box } from "ink";
import Input from "ink-text-input";



const Demo = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <Box flexDirection="columnas">
      <Box>
      <Input onChange={setValue} value={value} onSubmit={() => {
        console.log("ok")
      }} />
      <Text>-----------------------------</Text>
      <Input onChange={setValue2} value={value2} />
      </Box>
      <Box>
      <Text>Label: {value2}</Text>
      <Text>Fills all remaining space {value} </Text>
      </Box>
    </Box>
  );
};
render(<Demo />);