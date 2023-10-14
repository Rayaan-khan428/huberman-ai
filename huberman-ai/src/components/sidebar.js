// Sidebar.js
import React from 'react';
import { Box, Heading, List, ListItem, Link, Divider } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

function Sidebar() {
  const { colorMode } = useColorMode();

  const sidebarStyles = {
    light: {
      backgroundColor: 'gray.200',
    },
    dark: {
      backgroundColor: 'gray.800',
    },
  };

  return (
    <Box
      w="250px"
      p={4}
      shadow="lg"
      height="100vh"
      style={sidebarStyles[colorMode]}
    >
      <Heading as="h2" size="md" mb={4}>
        FAQs
      </Heading>
      <List spacing={2}>
        <ListItem>
          <Link href="#faq1">FAQ 1</Link>
        </ListItem>
        <ListItem>
          <Link href="#faq2">FAQ 2</Link>
        </ListItem>
        <ListItem>
          <Link href="#faq3">FAQ 3</Link>
        </ListItem>
        {/* Add more FAQ links as needed */}
      </List>
      <Divider my={4} />
      {/* Additional sidebar content or links can be added here */}
    </Box>
  );
}

export default Sidebar;
