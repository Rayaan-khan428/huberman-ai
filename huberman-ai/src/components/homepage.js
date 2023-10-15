import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      
      <Box mb={8}>
        <Image src="logo.png" alt="Website Logo" boxSize="150px" />
        <Heading as="h1" size="2xl" mt={5}>
          Welcome to Huberman AI
        </Heading>
        <Text fontSize="xl" mt={5} textAlign="center">
        Imagine gaining unlimited access to the knowlege of a PHD Stanford Neuroscientist, to ask any question you may have about health, habits, and lifestyle improvements.        </Text>
      </Box>
      
      <br></br>
        <Box>
        <Link to="/chat">
          <Button mt={0} colorScheme="blue" size="lg">
          <Text>Go to Chat</Text> 
          </Button>
          </Link>
        </Box>
      <br></br>
      <br></br>
      <Text fontSize="sm" color="gray.500">Huberman AI 1.0.0</Text>
      <Text fontSize="sm" color="gray.500">© 2023 All rights reserved.</Text>
    </Flex>
  );
}

export default HomePage;
