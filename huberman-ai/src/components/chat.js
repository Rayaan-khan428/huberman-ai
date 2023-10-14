// Chat.js

import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  VStack,
  Text,
  useColorMode,
  Flex, // Import Flex component
} from '@chakra-ui/react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const { colorMode } = useColorMode();

  const handleSubmit = () => {
    if (message.trim() === '') return;
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <VStack spacing={4} p={4} w="100%">
      <Box
        w="100%"
        h="500px"
        p={4}
        borderRadius="lg"
        overflowY="auto"
        boxShadow="lg"
        bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
      >
        {messages.map((msg, index) => (
          <Text
            key={index}
            color={colorMode === 'light' ? 'black' : 'white'}
          >
            {msg}
          </Text>
        ))}
      </Box>
      <Flex w="100%" alignItems="center">
        <Input
          flex="1" // Make the input stretch horizontally
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          colorScheme="blue"
          ml={2} // Add some margin to separate the button
          onClick={handleSubmit}
          bg={colorMode === 'light' ? 'blue.400' : 'blue.600'}
        >
          Send
        </Button>
      </Flex>
    </VStack>
  );
};

export default Chat;
