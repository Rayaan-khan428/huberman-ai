import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
import MeetAndrew from './components/meetandrew';  // Make sure the component import is correct
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import About from './components/about'

function MainContent() {
  const location = useLocation();

  if (location.pathname === "/meetandrew") {
    return (
      <Box flex="1" mx={4}>
        <MeetAndrew />
      </Box>
    );
  }

  if (location.pathname === "/about") {
    return (
      <Box flex="1" mx={4}>
        <About />
      </Box>
    );
  }

  return (
    <Flex>
      <Sidebar />
      <Box flex="1" mx={4}>
        {/* Add your other main content here */}
        <Box maxW="container.lg" mt={4} p={4}>
            {/* Your main content */}
        </Box>
      </Box>
      <Chat flex="1" />
    </Flex>
  );
}


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box>
          <Navbar />
          <MainContent />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
