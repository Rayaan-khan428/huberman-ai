import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
import MeetAndrew from './components/meetandrew';
import About from './components/about';
import HomePage from './components/homepage';

function MainContent() {
  const location = useLocation();

  const contentRoutes = {
    "/": <HomePage />,
    "/chat": (
      <Flex>
        <Sidebar />
        <Box flex="1" mx={4}>
          <Box maxW="container.lg" mt={4} p={4}>
            {/* Your main content */}
          </Box>
        </Box>
        <Chat flex="1" />
      </Flex>
    ),
    "/meetandrew": <MeetAndrew />,
    "/about": <About />
  };

  return (
    <Box flex="1" mx={4}>
      {contentRoutes[location.pathname]}
    </Box>
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
