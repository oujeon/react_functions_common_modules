"use strict";

import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export function chakra_button() {
  return (
    <ChakraProvider>
      <Button>Click me</Button>
    </ChakraProvider>
  );
}
