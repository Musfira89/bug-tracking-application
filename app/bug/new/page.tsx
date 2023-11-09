"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { InputGroup, Input, Button } from "@chakra-ui/react";

const NewBugpage = () => {
  return (
    <div className="max-w-md space-y-2">
      <InputGroup>
        <Input placeholder="Title" />
      </InputGroup>
      <InputGroup>
        <SimpleMDE placeholder="Description" />
      </InputGroup>
      <Button
        colorScheme="blue"
        size="md"
        fontWeight="bold"
        borderRadius="md"
        _hover={{ bg: "blue.300" }}> Submit Issue</Button>
    </div>
  );
};

export default NewBugpage;
