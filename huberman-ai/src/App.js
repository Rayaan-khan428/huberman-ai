import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
import MeetAndrew from './components/meetandrew';
import About from './components/about';

function MainContent() {
  const location = useLocation();

  const contentRoutes = {
    "/meetandrew": <MeetAndrew />,
    "/about": <About />
  };

  if (contentRoutes[location.pathname]) {
    return (
      <Box flex="1" mx={4}>
        {contentRoutes[location.pathname]}
      </Box>
    );
  }

  return (
    <Flex>
      <Sidebar />
      <Box flex="1" mx={4}>
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
