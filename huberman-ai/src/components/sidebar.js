// Sidebar.js
import React from 'react';
import { Box, Heading, List, ListItem, Link, Divider, Spacer } from '@chakra-ui/react';
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
          <Link href="#faq1">"How do I quit smoking?"</Link>
        </ListItem>
        <br></br>
        <ListItem>
          <Link href="#faq2">"What is the best way to optimize my morning routine, for better overall health and productivity?"</Link>
        </ListItem>
        <br></br>
        <ListItem>
          <Link href="#faq3">"Give me 10 tips on optimizing my sleep schedule, including the things I should avoid before going to bed."</Link>
        </ListItem>
        <br></br>
        <ListItem>
          <Link href="#faq4">"What occurs in the mind and body when someone has ADHD?"</Link>
        </ListItem>
        {/* Add more FAQ links as needed */}
      </List>
      <Divider my={4} />
      {/* Additional sidebar content or links can be added here */}
    </Box>
  );
}

export default Sidebar;
