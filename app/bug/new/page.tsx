import React from "react";
import { InputGroup, Input, Textarea, Button } from "@chakra-ui/react";

const NewBugpage = () => {
  return (
    <div className="max-w-xl px-6 py-9 space-y-2">
      <InputGroup>
        <Input placeholder="Title" />
      </InputGroup>

      <InputGroup>
        <Textarea placeholder="Description" size="md" resize="vertical" />
      </InputGroup>

      <Button
          colorScheme="blue"
          size="md"
          fontWeight="bold"
          borderRadius="md"
          _hover={{ bg: "blue.300" }}
        >
          Submit Issue
        </Button>    </div>
  );
};

export default NewBugpage;
