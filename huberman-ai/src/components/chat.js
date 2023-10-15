import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Input,
  Button,
  VStack,
  Text,
  useColorMode,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import axios from 'axios';

const Chat = () => {
  // State variables
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const { colorMode } = useColorMode();
  const messagesEndRef = useRef(null);

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  // Effect to scroll to the bottom whenever a new message is added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to format the backend response
  function formatResponse(response) {
    const lines = response.split(/\d+\./).map(line => line.trim()).filter(line => line);
    const formattedResponse = lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
    return formattedResponse;
  }

  // Function to handle the submission of a message
  const handleSubmit = async () => {
    if (message.trim() === '') return;

    // Add the user's message to the chat
    setMessages([...messages, { text: message, sender: 'user' }]);

    try {
      // Make an API call to the Flask backend
      const response = await axios.post('http://localhost:4000/ask', {
        question: message
      });

      // Add the backend's response to the chat
      if (response.data && response.data.response) {
        setMessages(prevMessages => [...prevMessages, { text: response.data.response, sender: 'bot' }]);
      }
    } catch (error) {
      console.error("Error communicating with backend:", error);
    }

    // Clear the input field
    setMessage('');
  };

  // Function to handle key press events in the input field
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit();
      e.preventDefault();
    }
  };

  // Render the chat component
  return (
    <VStack spacing={4} p={4} w="100%" alignItems="flex-start">
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
          <Flex
            key={index}
            direction="row"
            alignSelf={msg.sender === 'user' ? 'flex-start' : 'flex-end'}
            mb={2}
            w="80%"
          >
            <Flex direction="row" alignItems="center" w="100%">
              <Avatar
                size="sm"
                name={msg.sender.charAt(0).toUpperCase() + msg.sender.slice(1)}
                src={msg.sender === 'bot' ? 'favicon.ico' : 'path_to_user_avatar_image.png'}
                mr={2}
              />
              <Box
                flex="1"
                p={2}
                borderRadius="lg"
                wordWrap="break-word"
                color={msg.sender === 'user' ? 'white' : 'black'}
                bg={msg.sender === 'user' ? 'blue.500' : 'gray.200'}
              >
                {msg.text.split(/(?=\d+\.)/).map((line, lineIndex) => (
                  <Text
                    key={lineIndex}
                    ml={line.startsWith("\d+\.") ? "20px" : "0"}
                    display="block"
                  >
                    {line}
                  </Text>
                ))}
              </Box>
            </Flex>
          </Flex>
        ))}
        <div ref={messagesEndRef} />
      </Box>
      <Flex w="100%" alignItems="center">
        <Input
          flex="1"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          colorScheme="blue"
          ml={2}
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
