import React, { useEffect, useState } from "react";
import { Flex, Container, Heading, Button, NavLink } from "theme-ui";
const NetlifyIdentityWidget = require("netlify-identity-widget");
import {Link} from 'gatsby';

export default (props) => {

  const [user, setUser] = useState();

  useEffect(() => {
    NetlifyIdentityWidget.init({});
  });

  NetlifyIdentityWidget.on("login", user => {
    NetlifyIdentityWidget.close();
    setUser(user);
  });

  NetlifyIdentityWidget.on("logout", () => {
    NetlifyIdentityWidget.close();
    setUser();
  })

  return (
    <Container>
      <Flex as="nav">
        <NavLink as={Link} to="/" p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to={"/app"} p={2}>
          Dashboard
        </NavLink>        
        { user && (<NavLink p={2}>
          {user.user_metadata.full_name}
        </NavLink>) }
      </Flex>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Todo App</Heading>
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            NetlifyIdentityWidget.open();
          }}
        >
          Login
        </Button>
      </Flex>
    </Container>
  );
};
