import React, {useEffect} from "react";
import { Flex, Container, Heading, Button } from "theme-ui";
const NetlifyIdentityWidget = require("netlify-identity-widget");

export default props => {

  useEffect( () => {
    NetlifyIdentityWidget.init({});
  });

  return (
    <Container>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Todo App</Heading>
        <Button sx={{marginTop: 2}} 
            onClick={() => alert('Login Button Click')}
        >
            Login
        </Button>
      </Flex>
    </Container>
  );
};

