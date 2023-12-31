import React from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Divider,
  Link,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function CreatorProfile({ imageSrc, name, bio, linkedinUrl, githubUrl, funFact }) {
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
      <Flex direction="row" align="center">
        <Heading size="lg" mr={2}>{name}</Heading>
        <Link href={linkedinUrl} isExternal>
          <FaLinkedin color={useColorModeValue('blue.600', 'blue.300')} size="24px" />
        </Link>
        <Link href={githubUrl} ml={2} isExternal>
          <FaGithub color="gray.600" size="24px" />
        </Link>
      </Flex>
      <Text mt={2} textAlign="center" color={useColorModeValue('gray.600', 'gray.400')}>
        {bio}
      </Text>
      <Text mt={2} fontStyle="italic" color={useColorModeValue('gray.500', 'gray.300')}>
        Fun Fact: {funFact}
      </Text>
    </Flex>
  );
}

function About() {
  return (
    <Box p={6}>
      <Heading mb={6}>About the Project</Heading>
      <Text mb={6}>
        This project aims to help people make better decisions to lead better lives. 
        Built using cutting-edge technologies, it serves customers by enabling them to 
        change their life in ways that have been tested and verified by multiple research
        papers.
      </Text>

      <Heading mb={4}>Skills & Technologies</Heading>
      <Flex mb={6} wrap="wrap">
        <Tag m={1} colorScheme="blue">React</Tag>
        <Tag m={1} colorScheme="green">Chakra UI</Tag>
        <Tag m={1} colorScheme="red">Python</Tag>
        <Tag m={1} colorScheme="pink">Flask</Tag>
        <Tag m={1} colorScheme="purple">Open API</Tag>
      </Flex>

      <Heading mb={6}>Creators</Heading>
      <Divider mb={6} />
      <Flex direction={['column', 'row']} justifyContent="space-between">
        <CreatorProfile
          imageSrc="rayaan.jpg"
          name="Rayaan Khan"
          bio="Rayaan Khan is a third year CS student at Wilfrid Laurier University."
          linkedinUrl="https://www.linkedin.com/in/rayaankhan/"
          githubUrl="https://github.com/rayaankhan"
          funFact="I started skiing at the age of 5 and have even raced competitively! "
        />
        <CreatorProfile
          imageSrc="umar.jpeg"
          name="Umar Rasool"
          bio="Umar Rasool is a third year CS student at Wilfrid Laurier University."
          linkedinUrl="https://www.linkedin.com/in/umarrasool/"
          githubUrl="https://github.com/umarrasool"
          funFact="Umar is a chess enthusiast with a score of 1500!"
        />
      </Flex>
    </Box>
  );
}

export default About;
