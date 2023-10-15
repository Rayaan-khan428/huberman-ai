import React from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

function CreatorProfile({ imageSrc, name, bio }) {
  return (
    <Flex direction="column" align="center" m={4}>
      <Image
        src={imageSrc}
        alt={`${name}'s Profile Picture`}
        boxSize="200px"
        borderRadius="full"
        objectFit="cover"
        mb={4}
      />
      <Heading size="lg">{name}</Heading>
      <Text mt={2} textAlign="center" color={useColorModeValue('gray.600', 'gray.400')}>
        {bio}
      </Text>
    </Flex>
  );
}

function About() {
  return (
    <Box p={6}>
      <Heading mb={6}>Creators</Heading>
      <Divider mb={6} />
      <Flex direction={['column', 'row']} justifyContent="space-between">
        <CreatorProfile
          imageSrc="rayaan.jpg"
          name="Rayaan Khan"
          bio="Rayaan Khan is a third year CS student at Wilfrid Laurier University, currently seeking internships for Winter / Summer 2024."
        />
        <CreatorProfile
          imageSrc="umar.jpeg"
          name="Umar Rasool"
          bio="Umar Rasool is a third year CS student at Wilfrid Laurier University, currently seeking internships for Winter / Summer 2024."
        />
      </Flex>
    </Box>
  );
}

export default About;
