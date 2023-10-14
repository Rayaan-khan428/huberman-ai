import React from 'react';
import { ChakraProvider, Box, Flex, Spacer } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Chat from './components/chat';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Flex>
    <Sidebar />  {/* This is your FAQ bar */}
    <Box flex="1" mx={4}>
        {/* Add your main content here */}
        <Box maxW="container.lg" mt={4} p={4}>
            {/* Your main content */}
        </Box>
    </Box>
    <Chat flex="1" />  {/* Let the chat take up the remaining space */}
</Flex>

      </Box>
    </ChakraProvider>
  );
}

export default App;
