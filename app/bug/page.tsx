import Link from "next/link";
import React from "react";
import { Button } from "@chakra-ui/react";

const IssuesPage = () => {
  return (
    <div className="py-6 px-6">
      <Link href="/bug/new">
        <Button
          colorScheme="blue"
          size="md"
          fontWeight="bold"
          borderRadius="md"
          _hover={{ bg: "blue.300" }}
        >
          New Issue
        </Button>
      </Link>
    </div>
  );
};

export default IssuesPage;
